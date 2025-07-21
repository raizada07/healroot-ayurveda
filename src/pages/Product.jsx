import "./Product.css";

function Product() {
  return (
    <div className="product-container ">
      <h1 className="product-heading">Our Best Ayurvedic Products</h1>

      <div className="product-grid">
        {/* Product 1 */}
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product 1" className="product-image" />
          <h3>Baabsir Care Syrup</h3>
          <p className="description">100% Ayurvedic, fast relief in Baabsir problems.</p>
          <p className="price">₹1999</p>
          <button className="buy-btn">Buy Now</button>
        </div>

        {/* Product 2 */}
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product 2" className="product-image" />
          <h3>HealRoot Herbal Capsules</h3>
          <p className="description">Powerful herbs for better digestion & immunity.</p>
          <p className="price">₹1499</p>
          <button className="buy-btn">Buy Now</button>
        </div>

        {/* Product 3 */}
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product 3" className="product-image" />
          <h3>Joint Pain Relief Oil</h3>
          <p className="description">Relief from joint & muscle pain, natural & safe.</p>
          <p className="price">₹999</p>
          <button className="buy-btn">Buy Now</button>
        </div>

        {/* Product 4 */}
        <div className="product-card">
          <img src="https://via.placeholder.com/150" alt="Product 4" className="product-image" />
          <h3>Detox Powder</h3>
          <p className="description">Ayurvedic detox for clean stomach & fresh skin.</p>
          <p className="price">₹799</p>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
