import StudentDetail from "./components/StudentDetail";

function App() {
  return (<>
    <div className="container mt-4">
      <div className="row">
        <StudentDetail name="Ammar" title="PHP Developer" email="newemail@server.com" contact="0312-1234567" />
        <StudentDetail name="Ishraq" title="JS Developer" email="newemail@server.com" contact="0312-1234567" />
        <StudentDetail name="Anas" title="React Developer" contact="0312-1234567" />
        <StudentDetail />
      </div>
    </div>

  </>);
}

export default App;