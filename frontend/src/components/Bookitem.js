import React from 'react'
import Bookeitemlist from "./Bookitemlist"
export default function Regstud() {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sr no.</th>
                        <th scope="col">Student name</th>
                        <th scope="col">Price</th>
                        <th scope="col"> </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <Bookeitemlist/>
                </tbody>
            </table>
        </div>
    )
}
