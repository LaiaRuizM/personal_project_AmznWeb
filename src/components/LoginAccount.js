import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/layouts/LoginAccount.scss";

const LoginAccount = ({ username, handleUsername, errorMsg }) => {
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputNameChange = (ev) => {
    const value = ev.target.value;
    handleUsername(value);
  };
  const handleInputPasswordChange = (ev) => {
    const value = ev.target.value;
    setPassword(value);
  };
  return (
    <>
      <section className="section">
        <div className="">
          <Link to={"/products"} className="link">
            <i className="fa-solid fa-angles-left arrow"> Back products</i>
          </Link>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__label">
            Username: {}
            <input
              type="text"
              value={username}
              onChange={handleInputNameChange}
              className="share"
            />
          </label>
          <br />
          <label className="form__label">
            Password: {}
            <input
              type="password"
              value={password}
              onChange={handleInputPasswordChange}
              className="share"
            />
          </label>
          <Link to={"/welcome"} className="link">
            <input type="submit" value="Sign in" className="login"></input>
          </Link>
          {errorMsg && (
            <>
              <p>
                The username or password provided were incorrect or are empty
              </p>
            </>
          )}
        </form>
      </section>
    </>
  );
};

export default LoginAccount;
