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
import Dashboard from './pages/Dashboard/Dashboard';
import MyProfile from './pages/Dashboard/MyProfile';
import AddReview from './pages/Dashboard/AddReview';
import MyOrders from './pages/Dashboard/MyOrders';
import RequireAuth from './pages/Login/RequireAuth';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import ManageProducts from './pages/Dashboard/ManageProducts';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders';
import AddProduct from './pages/Dashboard/AddProduct';
import RequireAdmin from './pages/Login/RequireAdmin';
import Blogs from './pages/Blogs/Blogs';
import MyPorfolio from './pages/MyPortfolio/MyPorfolio';




function App() {



  return (
    <div className="App">
     <Headers></Headers>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/home' element={<Home></Home>}></Route>
       <Route path='/blogs' element={<Blogs></Blogs>}></Route>
       <Route path='/myportfolio' element={<MyPorfolio></MyPorfolio>}></Route>
       <Route path='/placeorder/:productId' element={<RequireAuth><PlaceOrder></PlaceOrder></RequireAuth>}></Route>
       <Route path='/dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
         <Route index element={<MyProfile></MyProfile>}></Route>
         <Route path='/dashboard/addreview' element={<AddReview></AddReview>}></Route>
         <Route path='/dashboard/myorders' element={<MyOrders></MyOrders>}></Route>
         <Route path='/dashboard/makeAdmin' element={<MakeAdmin></MakeAdmin>}></Route>
         <Route path='/dashboard/manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>}></Route>
         <Route path='/dashboard/manageOrders' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}></Route>
         <Route path='/dashboard/addProduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
       </Route>
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
