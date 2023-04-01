import { Link } from "react-router-dom";
import "../styles/layouts/Landing.scss";
const Landing = () => {
  return (
    <div className="landing">
      <Link to={"/products"} className="landing__title">
        Press here to enter:
      </Link>
      <p className="landing__p"> Enjoy it!</p>
    </div>
  );
};

export default Landing;
