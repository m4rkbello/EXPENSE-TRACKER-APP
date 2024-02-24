/* eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router-dom';
import avatar1 from '../assets/avatarv1.png'


const Login = () => {
  return (
    <div>
    <div>
    
    <div className="hero min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="text-center"></div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <center>
          <img src={avatar1} className="object-contain h-48 w-48 rounded-full" />
          </center>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
              <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">Login</button>
              </div>
              <label className="label">
              <Link to="/register">
              <a className="text-md link link-hover text-center">Create Account?</a>
              </Link>
              </label>
              </form>
        </div>
      </div>
    </div>

  </div>
    </div>
  )
}

export default Login;