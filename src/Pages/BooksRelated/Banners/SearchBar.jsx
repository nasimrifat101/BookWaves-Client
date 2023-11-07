import PropTypes from "prop-types";

const SearchBar = ({ searchTerm, onSearchChange, onFilterAvailableBooks }) => {
  return (
    <div className="my-10 flex justify-center space-x-5">
      <input
        type="text"
        placeholder="Search by book name..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="border-2 rounded-2xl p-2 w-1/2"
      />
      <div className="tooltip" data-tip="Available Books">
        <button
          onClick={onFilterAvailableBooks}
          className="btn btn-accent hover:bg-black hover:text-white border-none"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onFilterAvailableBooks: PropTypes.func.isRequired,
};

export default SearchBar;
