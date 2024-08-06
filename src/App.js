import logo from './logo.svg';
import './App.css';
import './assets/css/Custom.css';
// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

// Routing
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
