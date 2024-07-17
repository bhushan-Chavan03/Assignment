import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EmployeeDetails = () => {
  const { id } = useParams(); 
  const employeesData = useSelector((state) => state.employee.data?.data); 

  
  const employee = employeesData.find(emp => emp.id === parseInt(id));

  if (!employee) {
    return <div className="container mx-auto mt-8">Loading...</div>; 
  }

  
  return (
    <>
    <div className="w-full bg-gray-100 text-center font-bold text-4xl h-14"> Employee Information </div>
    <div className="container mx-auto mt-12 rounded-lg flex justify-center ">
      <div className="w-72 hover:scale-105 duration-75 "  >
      <h1 className="text-3xl font-bold mb-4">Employee Details</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
        <div className="mb-4">
          <p className="text-lg"><strong>Employee ID:</strong> {employee.id}</p>
          <p className="text-lg"><strong>Name:</strong> {employee.employee_name}</p>
          <p className="text-lg"><strong>Salary:</strong> ${employee.employee_salary}</p>
          <p className="text-lg"><strong>Age:</strong> {employee.employee_age}</p>
         
        </div>
      </div>

      </div>
    </div>
    </>
  );
};

export default EmployeeDetails;
