import React from 'react'
import {
  Link
} from "react-router-dom";
export default function Messsign() {

  const onChange = () => {

  }
  return (
    <div className='container'>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" name="name" onChange={onChange} />
          {/* value={ceredential.name} */}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" onChange={onChange} />
          {/* value={ceredential.email}  */}
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" name="password" onChange={onChange} />
          {/* value={ceredential.password} */}
        </div>

        <button type="submit" className="btn btn-primary mx-2">Sign Up</button>
        Already have account
        <Link className='mx-2' to="/messlog">Login</Link>
      </form>

    </div>
  )
}
