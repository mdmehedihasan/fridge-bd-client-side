import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';

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

        <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
