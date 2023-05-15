
import logo from './logo2.png';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';
import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
    <div className="">
      
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
