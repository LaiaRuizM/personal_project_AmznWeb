import { Link } from "react-router-dom";
import "../styles/layouts/Welcome.scss";
const Welcome = ({ username, handleUsername, errorMsg }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleUsername(value);
  };

  return (
    <section>
      <Link to={"/products"} className="link">
        <button type="submit" className="login" onClick={handleChange}>
          Sign out
        </button>
        <p className="parragraph">Welcome back {username}</p>
      </Link>
      {errorMsg && (
        <>
          <p>The username {username} or password provider were incorrect </p>
        </>
      )}
    </section>
  );
};

export default Welcome;
