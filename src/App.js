import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Shared/Footer';
import Headers from './pages/Shared/Headers';


function App() {



  return (
    <div className="App">
     <Headers></Headers>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
