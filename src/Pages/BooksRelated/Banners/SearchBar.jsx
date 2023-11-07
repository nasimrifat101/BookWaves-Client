import PropTypes from "prop-types";


const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
  <div className="my-10 flex justify-center space-x-5">
      <input
      type="text"
      placeholder="Search by book name..."
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      className="border-2 rounded-2xl p-2 w-1/2"
    />
    <button className="btn btn-accent hover:bg-black hover:text-white">
        Filter
    </button>
  </div>
  );
};

SearchBar.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired
  };

export default SearchBar;
