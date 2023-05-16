
import logo from './logo2.png';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import Register from './pages/register';
import Login from './pages/login';
import Home from './pages/home';
import 'https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js'

function App() {
console.log("Hello World")
  return (
    <div className="">
      
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
