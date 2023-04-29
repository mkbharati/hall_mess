import React from 'react'
import Regstudlist from "./Regstudlist"
export default function Regstud() {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sr no.</th>
                        <th scope="col">Student name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Bill amount </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <Regstudlist />
                </tbody>
            </table>
        </div>
    )
}
