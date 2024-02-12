import React, {useState} from 'react'

function SearchInput(props) {
const {SetUserFilterList, userList} = props

const [searchInput, SetSearchInput] = useState("") 

const handleInput = (e) => {
    SetSearchInput(e.target.value)
    console.log(e.target.value)
    if(e.target.value === "") {
        SetUserFilterList(userList)
    } else {
        const filterValue = userList.filter(({name, email, age}) => {
            return name.toLowerCase().includes(e.target.value.toLowerCase())
            || email.toLowerCase().includes(e.target.value.toLowerCase())
            || age.toString().includes(e.target.value)
        })
        console.log("filterValue :", filterValue)
        SetUserFilterList(filterValue)
    }
}

  return (
    <div className="searchInputBlock">
        <input type="text" value={searchInput} onChange={handleInput} placeholder="Enter name, age or email" />
    </div>
  )
}

export default SearchInput