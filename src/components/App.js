import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import callToApi from "../services/api";
import Landing from "./Landing";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import "../styles/App.scss";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log("callToApi()", callToApi());
    callToApi().then((product) => {
      setProductList(product);
    });
  }, []);

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <div>
      <main className="main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/products"
            element={
              <>
                <Header />
                <ProductList productList={productList}></ProductList>
              </>
            }
          ></Route>
          <Route
            path="/product/:productId"
            element={
              <ProductDetail
                productList={productList}
                selectProductFound
                handleOnSubmit={handleOnSubmit}
              ></ProductDetail>
            }
          ></Route>
        </Routes>
      </main>
      {<Footer></Footer>}
    </div>
  );
}

export default App;
