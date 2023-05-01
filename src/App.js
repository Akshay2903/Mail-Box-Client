import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/Pages/SignUp';
import Login from './components/Pages/Login';
import Welcome from './components/Pages/Welcome';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
     </Routes>
    </div>
  );
}

export default App;