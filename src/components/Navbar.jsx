import SearchBar from './SearchBar';
import CategoryFilter from './CategoryFilter';
import Sort from './Sort';

function Navbar({ onSearchChange,onCategoryChange, onSortChange }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
           
                <a className="navbar-brand" href="#">Product Store</a>
                
                {/* Search & Controls */}
                <div className="d-flex gap-3 align-items-center">
                    <SearchBar onSearchChange={onSearchChange} />
                    <CategoryFilter onCategoryChange={onCategoryChange} />
                    <Sort onSortChange={onSortChange} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
