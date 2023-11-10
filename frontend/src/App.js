// import logo from './logo.svg';

import './App.css';
// import PrimerComponente from './components/PrimerComponente/PrimerComponente';
// import CreateStudent from './components/formCreateStudent/createStudent';
// import Users from './components/Users/Users';
import Students from './components/Home/Students';
import CreateStudent from './components/formCreateStudent/createStudent';
import CreateTeacher from './components/formCreateTeacher/createTeacher';

function App() {
  return (
    <div className="App">
      <CreateTeacher/>
      <CreateStudent/>
    </div>
  );
}

export default App;
