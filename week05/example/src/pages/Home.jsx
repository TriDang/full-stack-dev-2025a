import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <h1>Home Page</h1>
      <div>
        <Link to="/login">Go to login</Link>
      </div>
    </>
  )
}