import { Routes, Route, Link } from "react-router-dom";

import Login from './components/Login';
import Register from './components/Register';
import Wallet from './components/Dashboard';
import Sidebar from "./components/Sidebar";
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500">
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
        <div className="navbar-center text-xl text-indigo-900">
          EXPENSE TRACKER
        </div>
        <div className="navbar-end">
          <div>
            <Link className="pr-5" to="/login">LOGIN</Link>
          </div>
          <div >
            <Link className="pr-5" to="/register">REGISTER</Link>
          </div>

        </div>
      </div>

      <div className="flex">
  <div className="flex-none">
  <Sidebar />
    
  </div>
  <div className="flex-initial">
  <div className="max-w-md">
    <Routes>
      <Route exact path="/wallet" element={<Wallet />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  </div>
    
  </div>
</div>

      <Footer />

    </div>

  );
}

export default App;
