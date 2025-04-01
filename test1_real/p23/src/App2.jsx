import './App.css'
import StudentResult from './StudentResult.jsx'

function App2() {
  const results = [
    { id: 1, name: 'Alice', major: 'IT', score: 67 },
    { id: 2, name: 'Bob', major: 'SE', score: 45 },
    { id: 3, name: 'Carol', major: 'SE', score: 82 },
    { id: 5, name: 'Tri', major: 'SE', score: 72 }
  ]

  return (
    <StudentResult results={results} />
  )
}

export default App2
