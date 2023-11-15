// import logo from './logo.svg';

import './App.css';
// import PrimerComponente from './components/PrimerComponente/PrimerComponente';
// import CreateStudent from './components/formCreateStudent/createStudent';
// import Users from './components/Users/Users';
import Students from './components/Home/Students';
import CreateStudent from './components/formCreateStudent/createStudent';
import CreateTeacher from './components/formCreateTeacher/createTeacher';
import Teachers from './components/Home/Teachers';

function App() {
  return (
    <div className="App">
      <CreateTeacher/>
      <Teachers/>
    </div>
  );
}

export default App;
