// import logo from './logo.svg';

import './App.css';
// import PrimerComponente from './components/PrimerComponente/PrimerComponente';
// import CreateStudent from './components/formCreateStudent/createStudent';
// import Users from './components/Users/Users';
import Students from './components/Home/Students';
import CreateStudent from './components/formCreateStudent/createStudent';
import CreateTeacher from './components/formCreateTeacher/createTeacher';
import Teachers from './components/teachers/Teachers';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './components/landingPage/landingPage';
import UpdateStudent from './components/formUpdateStudent/updateStudent';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>} />
          <Route path='/formCreateTeacher' element={<CreateTeacher/>} />
          <Route path='/formCreateStudent' element={<CreateStudent/>} />
          <Route path='/Home' element={<Students/>} />
          <Route path='/teachers' element={<Teachers/>} />
          <Route path='/formUpdateStudent' element={<UpdateStudent/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
