import { Link } from "react-router-dom";
import "../styles/layouts/ProductCard.scss";
const ProductCard = ({ eachProduct, addedToCart, showButtonCart }) => {
  const handleAddToCart = (ev, productToBeAdded) => {
    ev.preventDefault();
    addedToCart.push(productToBeAdded);
    console.log("funciona, my list is: ", JSON.stringify(addedToCart));
  };
  return (
    <Link className="list__link" to={`/product/${eachProduct.id}`}>
      <li className="list__li">
        <span className="span">DETAILS</span>
        <div className="div">
          <img
            className="img"
            src={eachProduct.image}
            alt={`Photography of ${eachProduct.title}`}
            title={`Photography of ${eachProduct.title}`}
          />
        </div>
        <h4 className="list__title">{eachProduct.title}</h4>
        <p className="list__p">{eachProduct.price + " " + "$"}</p>
        {showButtonCart && (
          <button
            className="button"
            onClick={(ev) => handleAddToCart(ev, eachProduct)}
          >
            Add to cart <i class="fa-solid fa-cart-shopping"></i>
          </button>
        )}
      </li>
    </Link>
  );
};

export default ProductCard;
