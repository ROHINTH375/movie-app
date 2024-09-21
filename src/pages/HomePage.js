import { useState } from "react";
import SearchBar from "../Component/SearchBar";
import MovieList from "../Component/MovieList";
import FilterDropdown from "../Component/FilterDropdown";
import { fetchMovies } from "../api/api";


function HomePage () {

    const[movie,setmovies] = useState([]); //to hold the list of movies


    const[filterType, setFilterType] = useState('');// state to hold the filter type

    //handle Search
    const handleSearch = async(searchTerm, type) => {
        const result = await fetchMovies(searchTerm, type);
        setmovies(result)
    }



    //handle filter
    const handleFilterChange = (type) => {
        setFilterType(type)
    }


    return(
        <div className = "home-page">
        <h1>Find your movie</h1>

        {/* searchBar */}

        <SearchBar onSearch = {handleSearch} onTypeChange = {handleFilterChange}  />
        <FilterDropdown onFilterChange = {handleFilterChange} />
        <MovieList  movies = {movie} />
    </div>
    )
    

}

export default HomePage