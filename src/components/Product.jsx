



function Product({product}) {
    return (
        <div className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <p>Category: {product.category}</p>
          <p>Rating: {product.rating}</p>
          <button onClick={() => console.log(product.name, "added to cart")}>Add to Cart</button>
        </div>
      );
}

export default Product;