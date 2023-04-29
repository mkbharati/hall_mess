import React from 'react'
import Items from './Items'
import {
  Link
} from "react-router-dom";
export default function Homemess() {
  const onChange = ()=>{

  }
  return (
    <div>
      <div className="container my-3">
        <h1 className>Add Item</h1>
        <form >
          <div className="mb-3">
            <label htmlFor="itemname" className="form-label">Item Name</label>
            <input type="text" className="form-control" id="itemname" name='itemname'  onChange={onChange} aria-describedby="emailHelp" />
            {/* value={note.title} */}
          </div>
          <div className="mb-3">
            <label htmlFor="itemprice" className="form-label" >Item Price</label>
            <input type="number" className="form-control" id="itemprice" name='itemprice'  onChange={onChange} />
            {/* value={note.description} */}
          </div>
          <button  type="submit" className="btn btn-primary" >Add Item</button>
        </form>

      </div>
      <div className="container my-3">
        <Link className="nav-link active" aria-current="page" to="/regstud">Registered Student</Link>
        <Items />
      </div>

    </div>
  )
}
