import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/layouts/LoginAccount.scss";

// const LoginAccount = () => {
//   return (
//     <div className="">
//       <Link to={"/products"} className="">
//         Enter to your Login:
//       </Link>
//       <p className=""> Enjoy it!</p>
//     </div>
//   );
// };

const LoginAccount = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsError("");
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
            onChange={(event) => setUsername(event.target.value)}
            className="share"
          />
        </label>
        <br />
        <label className="form__label">
          Password: {}
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="share"
          />
        </label>
        <br />
        <button type="submit" className="login">
          Sign In
        </button>
        {isError && (
          <div>The username or password provider were incorrect.</div>
        )}
      </form>
    </>
  );
};

export default LoginAccount;
