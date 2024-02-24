import {Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="bg-violet-600">
    <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Homepage</a></li>
          <li><a>Portfolio</a></li>
          <li><a>About</a></li>
        </ul>
      </div>
    </div>
    <div className="navbar-center">
      <a className="btn btn-ghost text-xl">EXPENSE TRACKER</a>
    </div>
    <div className="navbar-end">
      <div>
        <Link to="/login">LOGIN</Link>
      </div>
      <div>
      <Link to="/register">REGISTER</Link>
    </div>

    </div>
  </div>
      
      <div className="max-w-7xl mx-auto mt-6">
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
