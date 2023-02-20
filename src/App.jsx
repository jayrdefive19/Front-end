import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './page/homepage';
import Accountslog from './page/accountpage';
import Profilepg from './page/profilepage';


import Adminpage from './page/admin';
import Vetpage from './page/doctorpage';


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Accountslog/>} />
        <Route path='/profile' element={<Profilepg/>} />
        <Route path='/profile/:tab' element={<Profilepg/>} />
        <Route path='/admin' element={<Adminpage/>} />
        <Route path='/veterinary' element={<Vetpage/>} />


      </Routes>
    </BrowserRouter>
  )
}



export default App
