import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Parent from './pages/Parent';
import Child1 from './pages/Child1';
import Child2 from './pages/Child2';
import Students, { loadStudents } from './pages/Students';
import Student, { loadStudent } from './pages/Student';
import StudentEdit, { loadStudent as getStudent, saveStudent } from './pages/StudentEdit';
import StudentIndex from './pages/StudentIndex';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/parent',
    element: <Parent />,
    children: [
      {
        path: 'child1',
        element: <Child1 />
      },
      {
        path: 'child2',
        element: <Child2 />
      }
    ]
  },
  {
    path: '/students',
    element: <Students />,
    loader: loadStudents,
    children: [
      {
        index: true,
        element: <StudentIndex />
      },
      {
        path: ':studentID',
        element: <Student />,
        loader: loadStudent,
      },
      {
        path: ':studentID/edit',
        element: <StudentEdit />,
        loader: getStudent,
        action: saveStudent,
      }
    ]
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);