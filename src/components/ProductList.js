import ProductCard from "./ProductCard";
import "../styles/layouts/ProductList.scss";

const ProductList = ({
  productsToDisplay,
  errorMsg,
  nameFilter,
  handleNameFilter,
  addedToCart,
  showButtonCart,
}) => {
  const handleReset = (event) => {
    event.preventDefault();
    const value = event.target.value;
    handleNameFilter(value);
  };

  const prodHtml = productsToDisplay.map((eachProduct) => {
    return (
      <ProductCard
        eachProduct={eachProduct}
        key={eachProduct.id}
        addedToCart={addedToCart}
        showButtonCart={showButtonCart}
      ></ProductCard>
    );
  });
  return (
    <section>
      <ul className="list">{prodHtml}</ul>
      {errorMsg && (
        <>
          <p>
            There is not any product which has any coincidence with the
            following word {nameFilter}
          </p>
          <button className="btn" id="reset" onClick={handleReset}>
            Wow, maybe you should try again!
          </button>
        </>
      )}
    </section>
  );
};

export default ProductList;
