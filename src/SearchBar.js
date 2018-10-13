import React from 'react';

const SearchBar = ({ input, onInputChange}) => {
  return (
    <div>
      <input 
        placeholder="Search by name"
        className="form-control"
        value={input}
        onChange={onInputChange} />
    </div>
  );
}

export default SearchBar;