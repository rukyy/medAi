import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/navbar';
import Home from './screens/landingpage';
import Registration from './screens/registration';
import Medform from './screens/medform';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Registration/>}/>
        <Route exact path='/forms' element={<Medform/>}/>
      </Routes>

    </BrowserRouter>



  );
}

export default App;
