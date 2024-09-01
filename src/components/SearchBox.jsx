import React from 'react';

const SearchBox = ({ placeholder, handleSearchChange }) => {
  return (
    <input
      type="search"
      placeholder={placeholder}
      onChange={handleSearchChange}
      className="bg-gray-300 border shadow-md border-b-0 rounded-t-none border-yellow-500 w-full text-center placeholder:text-black/30 rounded-md py-1 px-2"
    />
  );
};

export default SearchBox;
