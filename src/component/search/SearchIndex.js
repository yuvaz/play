import React, {useState} from 'react'
import SearchInput from './SearchInput'
import SearchList from './SearchList'
import userList from "./SearchMock"
import "./search.css"


function SearchIndex() {


const [userFilterList, SetUserFilterList] = useState(userList) 

  return (
    <div>
        <h2>User Details</h2>
        <SearchInput SetUserFilterList={SetUserFilterList} userList={userList}/>
        <SearchList userList={userFilterList}/>
    </div>
  )
}

export default SearchIndex