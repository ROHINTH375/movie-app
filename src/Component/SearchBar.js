 import { useState } from "react"


 function SearchBar ({onSearch,onTypeChange}) {
    const[searchTerm, setSearchTerm] = useState('');

    const[type,setType] = useState('movie');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm, type)
    }

    return(
        <form onSubmit={handleSearch} className="search-bar">
            <input type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search your movies"
            />

            <select value ={type} onChange={(e) => setType(e.target.value)}>
                <option value="movie">Movies</option>
                <option value="series">Series</option>
                <option value="episode">Episodes</option>
            </select>

            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar