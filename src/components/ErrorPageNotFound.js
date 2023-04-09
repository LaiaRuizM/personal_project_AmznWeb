import { Link } from "react-router-dom";
import "../styles/layouts/ErrorPageNotFound.scss";
const ErrorPageNotFound = () => {
  return (
    <>
      <Link to={"/products"}>
        <i className="fa-solid fa-angles-left arrow"> Return back products </i>
      </Link>
      <section className="section__warning">
        <p>
          <span className="section__warning--span">UPS!</span>
        </p>
      </section>
    </>
  );
};

export default ErrorPageNotFound;
