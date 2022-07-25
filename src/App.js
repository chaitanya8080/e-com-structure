import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Fitness } from './pages/Fitness';
import Care from './pages/Care';
import { Store } from './pages/Store';
import { SignIn } from './components/SignUp';
import { Login } from './components/Login';
import { Cart } from './components/Cart';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/fitness" element={<Fitness></Fitness>}></Route>
        <Route path="/care" element={<Care></Care>}></Route>
        <Route path="/products" element={<Store></Store>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/cart" element={<Cart></Cart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
