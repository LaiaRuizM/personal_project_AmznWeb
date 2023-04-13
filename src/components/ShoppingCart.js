import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import "../styles/layouts/ShoppingCart.scss";

const ShoppingCart = ({
  addedToCart,
  showButtonCart,
  handleResetShoppingCart,
}) => {
  const handleResetCart = (ev) => {
    ev.preventDefault();
    handleResetShoppingCart();
  };
  return (
    <>
      <Link to={"/products"} className="link">
        <i className="fa-solid fa-angles-left arrow"> Back products</i>
      </Link>
      <section className="sectionCart">
        <div className="shopping">
          <h2 className="shopping__title">
            <i class="fa-solid fa-cart-shopping"></i> Your products added in
            Shopping Cart
          </h2>
          <input
            className="reset__btn"
            type="button"
            value="Reset"
            title="Press here to delete and re-start your information!"
            onClick={handleResetCart}
          />
          {addedToCart.length > 0 ? (
            <ProductList
              productsToDisplay={addedToCart}
              addedToCart={addedToCart}
              showButtonCart={showButtonCart}
            ></ProductList>
          ) : (
            <p className="noprod">No products in shopping cart</p>
          )}
        </div>
      </section>
    </>
  );
};

export default ShoppingCart;
