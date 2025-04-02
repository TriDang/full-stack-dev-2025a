import { getStudent, updateStudent } from '../api/students';
import { useLoaderData, Form, useNavigate, redirect } from 'react-router-dom';

export async function loadStudent({ params }) {
  const student = await getStudent(parseInt(params.studentID));
  return student;
}

export async function saveStudent({ request, params }) {
  const formData = await request.formData();
  const newData = Object.fromEntries(formData);
  await updateStudent(parseInt(params.studentID), newData);
  return redirect(`/students/${params.studentID}`);
}

export default function StudentEdit() {
  const student = useLoaderData();

  const navigate = useNavigate();

  return (
    <>
      <h2>Student</h2>
      <Form method="post">
        <div>
          ID: {student.id}
        </div>
        <div>
          Name: <input key="name" type="text" name="name" defaultValue={student.name} />
        </div>
        <div>
          Major: <input key="major" type="text" name="major" defaultValue={student.major} />
        </div>
        <div>
          GPA: <input key="GPA" type="text" name="GPA" defaultValue={student.GPA} />
        </div>
        <div>
          <input type="submit" value="Save" />
          <input type="button" value="Cancel" onClick={() => navigate(-1)} />
        </div>
      </Form>
    </>
  )
}