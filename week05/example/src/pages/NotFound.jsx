import { Link, useRouteError } from 'react-router-dom';
import Header from '../components/Header';

export default function NotFound() {
  const err = useRouteError();
  console.log(err);

  return (
    <>
      <Header />
      <h1>NotFound Page</h1>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
    </>
  )
}