import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItems from './Pages/AddItems/AddItems';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageItems from './Pages/ManageItems/ManageItems';
import MyItems from './Pages/MyItems/MyItems';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';
import MainInventory from './Pages/MainInventory/MainInventory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        <Route path='/additems' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>

        <Route path='/manageitems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>

        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>

        <Route path='/inventory/:inventoryId' element={
          <RequireAuth>
            <MainInventory></MainInventory>
          </RequireAuth>
        }></Route>


        {/* 404 page */}

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
