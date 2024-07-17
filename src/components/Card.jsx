import React from "react";
import { useDispatch } from "react-redux";
import { deleteEmployee } from "../redux/slice/employee"; 
import { Link } from "react-router-dom";

const Card = ({ employee }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    if (confirmDelete) {
      dispatch(deleteEmployee(employee.id)); 
    }
  };

  return (
    <Link to={`/employee/${employee.id}`} className="bg-white shadow-md rounded-lg p-6 m-4 relative flex flex-col gap-9 w-60 hover:scale-105 duration-75">
      {/* Employee Details */}
      <h2 className="text-lg font-bold mb-2">{employee.employee_name}</h2>
      <p className="text-gray-700">Salary: ${employee.employee_salary}</p>
      <p className="text-gray-700">Age: {employee.employee_age}</p>

      <div className="mt-5">
        {/* Edit Button (Bottom Left) */}
      <button className="absolute left-4 bottom-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Edit
      </button>

      {/* Delete Button (Bottom Right) */}
      <button
        onClick={handleDelete}
        className="absolute right-4 bottom-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Delete
      </button>
      </div>
    </Link>
  );
};

export default Card;
