import React from "react"
import { MdSearch } from "react-icons/md"

export default function Search(props) {

    const handleSearchTextFunction = (Event) => {
        props.handleSearchText(Event.target.value)
    }
    return(
        <div className="search">
            <MdSearch className="search-icon" />
            <input 
                onChange={handleSearchTextFunction} 
                type="text" 
                placeholder="Type to search..." 
            />
        </div>
    )
}