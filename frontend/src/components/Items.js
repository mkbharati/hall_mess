import React from 'react'
import Itemslist from './Itemslist'

export default function Items() {
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
                <Itemslist/>
                </tbody>
            </table>
    </div>
  )
}
