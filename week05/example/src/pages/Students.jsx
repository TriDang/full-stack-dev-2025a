import Header from '../components/Header';
import { Link, Outlet, useLoaderData, useNavigation } from 'react-router-dom';
import { getStudents } from '../api/students';

export async function loadStudents() {
  const students = await getStudents();
  return students;
}

export default function Students() {
  const students = useLoaderData();
  const navigation = useNavigation();
  const studentList = students.map((stu) =>
    <li key={stu.id}><Link to={`${stu.id}`}>{stu.id} {stu.name}</Link></li>
  );

  return (
    <>
      <Header />
      <h2>Students</h2>
      <ul>
        {studentList}
      </ul>
      <div>
        {navigation.state === 'idle' && <Outlet />}
        {navigation.state !== 'idle' && 'Loading...'}
      </div>

    </>
  )
}