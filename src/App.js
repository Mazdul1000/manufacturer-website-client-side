import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer';
import Headers from './pages/Shared/Headers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {



  return (
    <div className="App">
     <Headers></Headers>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
