import { Link, useLocation, matchPath } from "react-router-dom";
import "../styles/layouts/ProductDetail.scss";
import LoadingAmzn from "./LoadingAmzn";

const ProductDetail = ({
  productList,
  handleOnSubmit,
  addProductToShoppingCart,
}) => {
  const { pathname } = useLocation();
  const routeData = matchPath("/product/:productId", pathname);
  const productId = routeData !== null ? routeData.params.productId : null;
  console.log("ProductDetail.productId:", productId);
  console.log("typeof ProductDetail.productId:", typeof productId);
  const selectProductFound = productList.find(
    (product) => product.id.toString() === productId
  );
  console.log("selectProductFound: ", selectProductFound);
  if (productList.length === 0) {
    return <LoadingAmzn></LoadingAmzn>;
  }
  const handleAddToCart = (ev, productToBeAdded) => {
    ev.preventDefault();
    addProductToShoppingCart(productToBeAdded);
  };
  return selectProductFound ? (
    <>
      <div className="box">
        <Link className="box__link" to={"/products"}>
          <i className="fa-solid fa-angles-left"> Go back to products</i>
        </Link>
      </div>
      <div className="box">
        <Link className="box__link" to={"/shoppingCart"}>
          <i className="fa-solid fa-angles-right">
            {""} Return to cart <i class="fa-solid fa-cart-shopping"></i>
          </i>
        </Link>
      </div>
      <section className="productDetails">
        <article className="productDetails__article">
          <div>
            <img
              className="img"
              src={selectProductFound.image}
              alt={`Photography of ${selectProductFound.title}`}
            />
          </div>
          <article />
          <h2 className="productDetails__title">{selectProductFound.title}</h2>
          <ul className="productDetails__information">
            <li>
              Status:{" "}
              {selectProductFound.price
                ? "Available"
                : "Temporarily out of stock"}
            </li>
            <li>price: {selectProductFound.price + " " + "$"}</li>
          </ul>
          <button
            className="button"
            onClick={(ev) => handleAddToCart(ev, selectProductFound)}
          >
            Add to cart <i class="fa-solid fa-cart-shopping"></i>
          </button>
          <div>
            <form className="form" onSubmit={handleOnSubmit}>
              <label className="form__label">
                If you want to share with your Amazon's friends, here you have
                the link!
              </label>
              <input
                className="share"
                readOnly
                autoComplete="off"
                type="text"
                name="search"
                value={window.location}
              />
            </form>
          </div>
        </article>
      </section>
    </>
  ) : (
    <div className="divError">
      <p className="errorMsg">Product not found, please try again!</p>
      <Link className="linkErrorMsg" to={"/"}>
        <i className="fa-solid fa-angles-left"> Return home!</i>
      </Link>
    </div>
  );
};
export default ProductDetail;
