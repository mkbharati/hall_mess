import React from 'react'
import Studitem from './Studitem'
import {
  Link
} from "react-router-dom";

export default function Homestud() {
  return (
    <div>
      <Link className="nav-link active" aria-current="page" to="/bookitem">Booked Item</Link>
      <Studitem/>
    </div>
  )
}
