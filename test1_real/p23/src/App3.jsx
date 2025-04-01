import { useState } from 'react'
import './App.css'
import ProductTable from './ProductTable';

function App3() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', price: 2500 },
    { id: 2, name: 'Table', price: 500 },
    { id: 3, name: 'Mouse', price: 150 },
    { id: 4, name: 'Tri', price: 123 }
  ]);

  return (
    <ProductTable products={products} updateProducts={setProducts} />
  )
}

export default App3
