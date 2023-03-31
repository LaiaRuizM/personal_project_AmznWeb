import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import callToApi from "../services/api";
import Landing from "./Landing";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./ProductList";
import "../styles/App.scss";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    console.log("callToApi()", callToApi());
    callToApi().then((product) => {
      setProductList(product);
    });
  }, []);

  return (
    <div>
      <main className="main">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Header />
        <ProductList productList={productList}></ProductList>
      </main>
      {<Footer></Footer>}
    </div>
  );
}

export default App;
