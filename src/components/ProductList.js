import ProductCard from "./ProductCard";
import "../styles/layouts/ProductList.scss";

const ProductList = ({ productList, nameFilter }) => {
  const characterHtml = productList.map((eachProduct) => {
    return (
      <ProductCard eachProduct={eachProduct} key={eachProduct.id}></ProductCard>
    );
  });
  return (
    <section>
      <ul className="list">{characterHtml}</ul>
    </section>
  );
};

export default ProductList;
