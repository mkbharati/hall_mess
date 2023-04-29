import React from 'react'

export default function Itemslist() {
    return (
        <>
            <tr>
                <th scope="row">1</th>
                <td>Chicken</td>
                <td>20</td>
                <td>
                <button type="button" className="btn btn-dark">Remove Item</button>
                </td>
            </tr>
        </>
    )
}
