
import Product from './Product';
import products from '../data/products.json';

function ProductList({ searchTerm, selectedCategory, sortOption }) {
    const filteredProducts = products.filter(product => {
        const matchesSearch = searchTerm 
            ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) 
            : true;
        const matchesCategory = selectedCategory 
            ? product.category === selectedCategory 
            : true;
        return matchesSearch && matchesCategory;
    });

    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sortOption === 'price-low-high') {
            return a.price - b.price;
        } else if (sortOption === 'price-high-low') {
            return b.price - a.price;
        }
        else if (sortOption === 'rating-low-high') {
            return a.rating - b.rating;
        }
        else if (sortOption === 'rating-high-low') {
            return b.rating - a.rating;
        }
        return 0;
    });

    if (sortedProducts.length === 0) {
        return (
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="alert alert-warning text-center" role="alert">
                            <h4>Product not found</h4>
                            <p>No products match your search criteria. Try different keywords or filters.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }   

    return (
        <div className="product-list">
            {sortedProducts.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}
export default ProductList;