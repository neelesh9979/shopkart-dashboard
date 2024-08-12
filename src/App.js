
import './App.css';
import './assets/css/Custom.css';
// Pages
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';

// Routing
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { React, useState, useEffect } from 'react';

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   useEffect(() => {
    const storedValue = sessionStorage.getItem('userLoggedIn') === 'true'? true : false;
    setIsLoggedIn(storedValue);
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={isLoggedIn === 'true' ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} /> */}
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/login" element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
