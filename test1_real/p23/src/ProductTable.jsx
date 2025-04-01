import { useState } from "react"

function ProductTable({ products, updateProducts }) {
  // this function replace the current product list with the new one
  function saveProduct() {
    const newName = document.querySelector('#productName').value;
    const newPrice = document.querySelector('#productPrice').value;
    const newProducts = products.map(product => {
      // for the changed product, use the new name and price
      if (product.id === editProduct) {
        return { ...product, name: newName, price: newPrice };
      }
      // otherwise, return the product unchanged
      return product;
    });
    // the product list setter function is passed from the parent
    updateProducts(newProducts);
  }
  // the ID of the product being edited
  // zero mean no product is being edited
  const [editProduct, setEditProduct] = useState(0);

  return (
    <div>
      <h2>Products</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <a href="#" onClick={() => setEditProduct(product.id)}>{product.id}</a>
              </td>
              <td>
                {editProduct === product.id ? <input id="productName" type="text" defaultValue={product.name} /> : product.name}
              </td>
              <td>{editProduct === product.id ? <input id="productPrice" type="text" defaultValue={product.price} /> : product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {editProduct != 0 &&
        <>
          <button onClick={() => { saveProduct(); setEditProduct(0) }}>Save</button>
          <button onClick={() => setEditProduct(0)}>Cancel</button>
        </>}
    </div>
  )
}

export default ProductTable
