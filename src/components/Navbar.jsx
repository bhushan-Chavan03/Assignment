import React from "react";

const Navbar = ({ filterId, setFilterId, handleFilter }) => {
  const handleChange = (e) => {
    setFilterId(e.target.value);
  };

  const handleClick = () => {
    handleFilter();
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-200">
        <div className="font-bold text-lg">Employee Dashboard</div>
      <div>
        <input
          type="text"
          placeholder="Enter ID"
          value={filterId}
          onChange={handleChange}
          className="px-2 py-1 border border-gray-400 rounded"
        />
        <button
          onClick={handleClick}
          className="ml-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Filter
        </button>
      </div>
       
    </div>
  );
};

export default Navbar;
