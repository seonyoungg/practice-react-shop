import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
// import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import PrivateRoute from './routes/PrivateRoute';

function App() {

  const [authenticate, setAuthenticate] = useState(false); //true만 로그인

  useEffect(() => {
    console.log("Authenticate state changed:", authenticate);
  }, [authenticate]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/products/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
