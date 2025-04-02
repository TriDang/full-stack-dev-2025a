import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default function Login() {
  return (
    <>
      <Header />
      <h1>Login Page</h1>
      <div>
        <Link to="/">Go to Home</Link>
      </div>
    </>
  )
}