/* eslint-disable no-unused-vars */
import React from 'react'

const Register = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="text-center"></div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

            <form className="card-body">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Firstname</span>
                </label>
                <input type="text" placeholder="firstname" className="input input-bordered" required />
              </div>      <div className="form-control">
                <label className="label">
                  <span className="label-text">Lastname</span>
                </label>
                <input type="text" placeholder="lastname" className="input input-bordered" required />
              </div>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-2">
                <button className="btn bg-gradient-to-r from-cyan-500 to-blue-500">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
