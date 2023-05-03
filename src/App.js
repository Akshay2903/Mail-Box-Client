import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import SentBox from './components/Pages/SentBox';
import LogIn from './components/UI/Login';
import SignUp from './components/UI/SignUp';
import Welcome from './components/UI/Welcome';


function App() {
  return (
    <div>
      <Header/>
     <Routes>
        <Route path='/' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/sentbox'  element={<SentBox/>}/>
     </Routes>
    </div>
  );
}

export default App;