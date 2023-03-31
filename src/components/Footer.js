import "../styles/layouts/Footer.scss";
import logo from "../images/logo2.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">Made with 🧡 by &copy;Laia Ruiz Martínez</p>
        <a
          href="https://github.com/LaiaRuizM"
          title="GitHub de Laia Ruiz Martínez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/laia-ruiz-martínez"
          target="_blank"
          title="Linkedin de Laia Ruiz Martínez"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
      <img
        src={logo}
        alt="logo Amazon"
        title="Amazon's logo"
        className="footer__logo"
      />
    </footer>
  );
}
export default Footer;
