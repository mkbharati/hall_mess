import React from 'react'
import Studitemlist from "./Studitemlist"
export default function Studitem() {
  return (
    
      <div>
        <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sr no.</th>
                        <th scope="col">Mess Item</th>
                        <th scope="col">Item Price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                <Studitemlist/>
                </tbody>
            </table>
    </div>
  )
}
