import { useEffect, useState } from 'react';
import './App.css';
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Loader from './pages/loader/Loader';
import Header from './components/shared/Header';
import Home from './pages/Home/Home';
import Footer from './components/shared/Footer';
import Login from './pages/user/auth/Login';
import Signup from './pages/user/auth/Signup';
import FilterBuses from './pages/buses/FilterBuses';
import SingleBus from './pages/buses/SingleBus';

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  })
  return (
    <div>
    {loading ? <div className="bg-white">
      <Loader></Loader>
    </div> : <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes >

          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/user-signin" element={< Login />}></Route>
          <Route path="/user-signup" element={<Signup />}></Route>
          <Route path="/buses" element={<FilterBuses />}></Route>
          <Route path="/bus/:busId" element={<SingleBus />}></Route>
       

     
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </div>}
  </div>
  );
}

export default App;
