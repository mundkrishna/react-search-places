import React from 'react'
import '../styles/table.css';
import { DEFAULT_ITEMS_PER_PAGE } from '../utilities/constanst';

const Table = ({ data, currentPage }) => {
    return (
        <div className='table-container'>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Place Name</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((item, index) => (
                            <tr key={item.id}>
                                <td>
                                    {(currentPage - 1) * DEFAULT_ITEMS_PER_PAGE + index + 1}
                                </td>
                                <td>{item.name}</td>
                                <td>{item.country}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
