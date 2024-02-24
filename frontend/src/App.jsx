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
        <div className="mr-20">
        <div>
        <Sidebar />
        <Footer />
        </div>
          <div className="mt-20">
          
          </div>

        </div>
        <div className="flex flex-col">
          <div className="flex items-center mt-20 mb-20">
            <Routes>
              <Route exact path="/wallet" element={<Wallet />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
            </Routes>

          </div>

        </div>
      </div>



    </div>

  );
}

export default App;
