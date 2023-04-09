import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import callToApi from "../services/api";
import Landing from "./Landing";
import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Filters from "./Filters";
import LoginAccount from "./LoginAccount";
import ShoppingCart from "./ShoppingCart";
import "../styles/App.scss";

function App() {
  const [productList, setProductList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(false);
  const [nameFilter, setNameFilter] = useState("");
  const addedToCart = [];
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("callToApi()", callToApi());
    callToApi().then((product) => {
      setProductList(product);
    });
  }, []);

  const handleOnSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleNameFilter = (value) => {
    setNameFilter(value);
  };

  const handleResetData = () => {
    setNameFilter("");
  };

  const amazonFiltered = productList
    .filter((eachProduct) => {
      return eachProduct.title
        .toLocaleLowerCase()
        .includes(nameFilter.toLocaleLowerCase());
    })
    .sort((x, y) => x.title.localeCompare(y.title));
  if (amazonFiltered.length > 0 && errorMsg) {
    setErrorMsg(false);
  } else if (amazonFiltered.length === 0 && !errorMsg) {
    setErrorMsg(true);
  }

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
                <Filters
                  nameFilter={nameFilter}
                  handleNameFilter={handleNameFilter}
                  handleResetData={handleResetData}
                ></Filters>
                <ProductList
                  productsToDisplay={amazonFiltered}
                  errorMsg={errorMsg}
                  nameFilter={nameFilter}
                  handleNameFilter={handleNameFilter}
                  addedToCart={addedToCart}
                ></ProductList>
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
          <Route path="/loginAccount" element={<LoginAccount />}></Route>
          <Route
            path="/shoppingCart"
            element={
              <ShoppingCart
                productList={productList}
                handleOnSubmit={handleOnSubmit}
                addedToCart={addedToCart}
              />
            }
          ></Route>
        </Routes>
      </main>
      {<Footer></Footer>}
    </div>
  );
}

export default App;
