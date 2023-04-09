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
  return (
    <>
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
            onChange={() => {}}
            className="share"
          />
        </label>
        <Link to={"/welcome"} className="link">
          <input type="submit" value="Sign in"></input>
        </Link>
        {errorMsg && (
          <>
            <p>The username {username} or password provider were incorrect </p>
          </>
        )}
      </form>
    </>
  );
};

export default LoginAccount;
