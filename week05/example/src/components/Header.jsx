import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      <h1>Header</h1>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'active' : ''
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'active' : ''
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/parent"
            className={({ isActive }) =>
              isActive ? 'active' : ''
            }
          >
            Parent Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/students"
            className={({ isActive }) =>
              isActive ? 'active' : ''
            }
          >
            Students
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}