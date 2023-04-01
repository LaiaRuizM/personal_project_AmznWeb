import "../styles/layouts/FilterName.scss";
const FilterName = ({ handleNameFilter, nameFilter }) => {
  const handleChange = (ev) => {
    const value = ev.target.value;
    handleNameFilter(value);
  };
  return (
    <>
      <label htmlFor="search">Search by product's name:</label>
      <input
        className="form__input-text"
        type="search"
        name="search"
        autoComplete="on"
        placeholder="Echo Dot"
        value={nameFilter}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterName;
