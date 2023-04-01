import FilterName from "./FilterName";
import "../styles/layouts/Filters.scss";

const Filters = ({ nameFilter, handleNameFilter, handleResetData }) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <section>
      <form className="form__filters" onSubmit={handleSubmit}>
        <FilterName
          nameFilter={nameFilter}
          handleNameFilter={handleNameFilter}
        ></FilterName>
        <input
          className="reset__btn"
          type="button"
          value="Reset"
          title="Press here to delete and re-start your information!"
          onClick={handleResetData}
        />
      </form>
    </section>
  );
};
export default Filters;
