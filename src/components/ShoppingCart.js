import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import "../styles/layouts/ShoppingCart.scss";

const ShoppingCart = ({ addedToCart, showButtonCart }) => {
  return (
    <>
      <Link to={"/products"} className="link">
        <i className="fa-solid fa-angles-left arrow"> Back products</i>
      </Link>
      <div className="shopping-card">
        <h2 className="shopping-title">
          <i class="fa-solid fa-cart-shopping"></i> Shopping Cart
        </h2>
        {addedToCart.length > 0 ? (
          <ProductList
            productsToDisplay={addedToCart}
            addedToCart={addedToCart}
            showButtonCart={showButtonCart}
          ></ProductList>
        ) : (
          <p className="product-p">No products in shopping cart</p>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
