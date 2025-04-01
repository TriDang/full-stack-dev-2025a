function StudentResult({ results }) {
  return (
    <div>
      <h2>Student Results</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Major</th>
            <th>Score</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {results.map((student) => (
            studentRow(student)
          ))}
        </tbody>
      </table>
    </div>
  )
}

// return a row of student data
function studentRow(student) {
  let className, grade;
  if (student.score < 50) {
    className = 'red';
    grade = 'NN';
  } else if (student.score < 80) {
    className = 'green';
    grade = 'OK';
  } else {
    className = 'blue';
    grade = 'HD';
  }
  return (
    <tr className={className} key={student.id}>
      <td>{student.id}</td>
      <td>{student.name}</td>
      <td>{student.major}</td>
      <td>{student.score}</td>
      <td>{grade}</td>
    </tr>
  );
}

export default StudentResult
