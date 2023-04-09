import { Link } from "react-router-dom";
import logoAmzn from "../images/removebckgr.png";
import "../styles/layouts/Header.scss";
const Header = () => {
  return (
    <>
      <header className="header">
        <Link to={"/"}>
          {/* <i className="fa-solid fa-angles-left arrow"> Back Home</i> */}
          <img
            className="header__img"
            src={logoAmzn}
            alt="Amazon's logo"
            title="Amazon's logo"
          />
        </Link>
      </header>
      <nav className="nav">
        <ul className="nav__lists">
          {/* <img
            className="header__img"
            src={logoAmzn}
            alt="Amazon's logo"
            title="Amazon's logo"
          /> */}
          <li>
            <Link className="nav__link" to={"/products"}>
              <i class="fa-solid fa-list"></i> Products
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={"/loginAccount"}>
              <i class="fa-regular fa-user"></i> Login account
            </Link>
          </li>
          <li>
            <Link className="nav__link" to={"/shoppingCart"}>
              <i class="fa-solid fa-cart-shopping"></i> Shopping cart
            </Link>
          </li>
        </ul>
      </nav>
      <p className="header__text">
        Discover amazing deals, unbeatable prices and exclusive offers on
        Amazon!
      </p>
    </>
  );
};
export default Header;
