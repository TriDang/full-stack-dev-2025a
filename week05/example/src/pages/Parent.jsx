import Header from '../components/Header';
import { Link, Outlet } from 'react-router-dom';

export default function Parent() {
  return (
    <>
      <Header />
      <div>Parent</div>
      <div>
        <ul>
          <li>
            <Link to="child1">Go to Child1</Link>
          </li>
          <li>
            <Link to="child2">Go to Child2</Link>
          </li>
        </ul>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  )
}