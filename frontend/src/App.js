// import logo from './logo.svg';

import './App.css';
// import PrimerComponente from './components/PrimerComponente/PrimerComponente';
// import CreateStudent from './components/formCreateStudent/createStudent';
// import Users from './components/Users/Users';
import Students from './components/Home/Students';
import CreateStudent from './components/formCreateStudent/createStudent';

function App() {
  return (
    <div className="App">
      <Students/>
      <CreateStudent/>
    </div>
  );
}

export default App;
