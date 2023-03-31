import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Landing";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/App.scss";

function App() {
  const [productList, setProductList] = useState([]);

  return (
    <div>
      <main className="main">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
        <Header />
      </main>
      {<Footer></Footer>}
    </div>
  );
}

export default App;
