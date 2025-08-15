


function SearchBar({ onSearchChange }) {
    return (
        <div className="search-bar">
            <input  onChange={(e) => {onSearchChange(e.target.value) }}
                type="text" 
                placeholder="Search products..." 
                className="search-input"
            />
        </div>
    )
}

export default SearchBar;
