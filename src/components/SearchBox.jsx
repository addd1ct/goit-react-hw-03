const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div>
      <label>
        Search:
        <input type="text" value={filter} onChange={onFilterChange} />
      </label>
    </div>
  );
};

export default SearchBox;
