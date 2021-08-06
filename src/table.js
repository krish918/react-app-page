import React from 'react'

/* Using simple component to define table header and
table body separately */

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th> Name </th>
                <th> Age </th>
                <th> Gender </th>
                <th> Salary </th>
                <th> Phone No.</th>
                <th> Operation </th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    var rowClassName;
    const rows = props.salaryData.map((row, index) => {
        if(index % 2 === 0) {
            rowClassName = 'even-row'  
        }
        else {
            rowClassName = 'odd-row'
        }
        return (
            <tr key={index} className={rowClassName}>
                <td>{row.empname}</td>
                <td>{row.age}</td>
                <td>{row.gender}</td>
                <td>{row.phone}</td>
                <td>{row.salary}</td>
                <td> 
                    <button onClick={() => props.removeData(index)}>
                    Remove
                    </button>
                </td>
            </tr>
        )
    })

    return (
        <tbody>{rows}</tbody>
    )
}

const Table = (props) => {
    
    const {salaryData, removeEmployee} = props

    return (
        <table>
            <TableHeader />
            <TableBody salaryData = {salaryData} 
            removeData={removeEmployee} />
        </table>
    )
}


export default Table 