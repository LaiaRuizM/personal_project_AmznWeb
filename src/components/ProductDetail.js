import { Link, useLocation, matchPath } from "react-router-dom";
// import gryffindor from "../images/gryffindor.png";
// import hufflepuff from "../images/hufflepuff.png";
import "../styles/layouts/ProductDetail.scss";
import LoadingAmzn from "./LoadingAmzn";

const ProductDetail = ({ productList, handleOnSubmit }) => {
  console.log("ProductDetail.productList: ", JSON.stringify(productList));

  // const imgEachProd = {
  //   gryffindor: gryffindor,
  //   hufflepuff: hufflepuff,
  // };
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
  return selectProductFound ? (
    <>
      <div className="box">
        <Link className="box__link" to={"/products"}>
          <i className="fa-solid fa-angles-left"> Go back </i>
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
            {/* <li>
              Alternate title:{" "}
              {selectProductFound.title.join(" or ")
                ? selectProductFound.title.join(" or ")
                : " Amazing... This product does not have any alternate title"}
            </li> */}
            <li>
              Status:{" "}
              {selectProductFound.price ? (
                <i class="fa-solid fa-heart-pulse"></i>
              ) : (
                <i class="fa-solid fa-skull"></i>
              )}
            </li>
            <li>price: {selectProductFound.price}</li>
            <li>title: {selectProductFound.title}</li>
            {/* <li>price: {selectProductFound.price}</li> */}
            {/* <img
              className="product"
              src={imgEachProd[selectProductFound.image.toLocaleLowerCase()]}
              alt={selectProductFound.image}
            /> */}
          </ul>
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
