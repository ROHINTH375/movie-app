function FilterDropdown ({onFilterChange}) {
    return(
        <select onChange={(e) => onFilterChange(e.target.value)} className="filter-dropdown">
            <option value="" >All Types</option>
            <option value="movie" >Movies</option>
            <option value="series" >Series</option>
            <option value="episode" >Episodes</option>
        </select>
    )
}

export default FilterDropdown