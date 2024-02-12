import React from 'react'

function SearchList({userList}) {
    console.log(userList)
  return (
    <table className="searchTable">
    <thead>
        <tr>
            <th>name</th>
            <th>age</th>
            <th>email</th>
        </tr>
    </thead>
    <tbody>
    {userList.length < 1 && 
        <tr><td colSpan={3}>No record found</td></tr>
    }
    {userList.map((i,index) => {
        const {name, age, email} = i
        return(
            <tr key={index}>
                <td>{name}</td>
                <td>{age}</td>
                <td>{email}</td>
            </tr>
        )
    })}
    </tbody>
  </table>
  )
}

export default SearchList