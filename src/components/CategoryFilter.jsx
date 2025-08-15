

function CategoryFilter({ onCategoryChange }) {
    return (
        <select onChange={(e) => onCategoryChange(e.target.value)}>
  <option value="">All Categories</option>
  <option value="electronics">Electronics</option>
  <option value="exercise">Exercise</option>
  <option value="food">Food</option>
</select>
)
}

export default CategoryFilter;