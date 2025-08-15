function Sort({ onSortChange }) {
    return (
        <select onChange={(e) => onSortChange(e.target.value)}>
            <option value="">Default</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
            <option value="rating-high-low">Rating: High to Low</option>
        </select>
    )
}

export default Sort;
