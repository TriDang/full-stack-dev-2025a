import { getStudent } from '../api/students';
import { useLoaderData, Link } from 'react-router-dom';

export async function loadStudent({ params }) {
  const student = await getStudent(parseInt(params.studentID));
  return student;
}

export default function Student() {
  const student = useLoaderData();
  const keys = Object.keys(student);

  const items = keys.map((key) =>
    <li key={key}>{key} : {student[key]}</li>
  );

  return (
    <>
      <h2>Student details</h2>
      <ul>
        {items}
      </ul>
      <Link to="edit">Edit</Link>
    </>
  )
}