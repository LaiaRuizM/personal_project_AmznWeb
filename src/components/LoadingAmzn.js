import loaderAmzn from "../images/loader.gif";
import "../styles/layouts/AmznLoader.scss";

const LoadingAmzn = () => {
  return (
    <div className="loader__container">
      <div className="load__ellipsis">
        <img
          src={loaderAmzn}
          className="animation"
          alt="Loader with animation"
          title="Loader with animation"
        />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingAmzn;
