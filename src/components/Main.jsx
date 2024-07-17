import React, { useEffect, useState } from "react";
import Card from './Card';
import Navbar from './Navbar';
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "../redux/slice/employee";

const Main = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.employee);
  const [filterId, setFilterId] = useState("");

  useEffect(() => {
    if (!state.data) { 
      dispatch(fetchEmployees());
    }
  }, [dispatch, state.data]);

  console.log("State", state);

  const handleFilter = () => {
    if (state.data && state.data.data) {
      if (filterId.trim() !== "") {
        return state.data.data.filter(employee => employee.id === parseInt(filterId));
      } else {
        return state.data.data;
      }
    }
    return [];
  };

  if (state.isLoading && !state.data) { 
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <Navbar
        filterId={filterId}
        setFilterId={setFilterId}
        handleFilter={handleFilter}
      />

      <div className="flex flex-wrap gap-7 justify-evenly bg-gray-100">
        {handleFilter().map((employee) => (
          <Card key={employee.id} employee={employee} />
        ))}
      </div>
    </div>
  );
};

export default Main;
