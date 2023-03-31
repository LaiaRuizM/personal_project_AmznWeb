import { Link } from "react-router-dom";
import "../styles/layouts/ProductCard.scss";
const ProductCard = ({ eachProduct }) => {
  return (
    <Link className="list__link" to={`/character/${eachProduct.id}`}>
      <li className="list__li">
        <span className="span">DETAILS⚡️</span>
        <div className="div">
          <img
            className="img"
            src={eachProduct.image}
            alt={`Photography of ${eachProduct.title}`}
            title={`Photography of ${eachProduct.title}`}
          />
        </div>
        <h4 className="list__title">{eachProduct.title}</h4>
        <p className="list__p">{eachProduct.price}</p>
      </li>
    </Link>
  );
};

export default ProductCard;
