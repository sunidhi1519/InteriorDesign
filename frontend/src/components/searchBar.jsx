const SearchBar = ({ searchTerm, handleSearch }) => {
  return (
    <div className="flex justify-center mb-8">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        value={searchTerm}
        className="input border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent p-2"
      />
    </div>
  );
};

export default SearchBar;
