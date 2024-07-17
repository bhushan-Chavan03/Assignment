

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchEmployees = createAsyncThunk("fetchEmployees", async () => {
  const response = await fetch("https://dummy.restapiexample.com/api/v1/employees");
  return response.json();
});


export const deleteEmployee = createAsyncThunk("deleteEmployee", async (employeeId) => {
  await fetch(`https://dummy.restapiexample.com/api/v1/delete/${employeeId}`, {
    method: 'DELETE',
  });
  return employeeId;
});

const employeeSlice = createSlice({
  name: "employee",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {
    deleteEmployeeLocally: (state, action) => {
      state.data.data = state.data.data.filter(employee => employee.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEmployees.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchEmployees.rejected, (state, action) => {
        console.log("Error", action.error);
        state.isError = true;
      })
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.data.data = state.data.data.filter(employee => employee.id !== action.payload);
      });
  },
});

export const { deleteEmployeeLocally } = employeeSlice.actions; 
export default employeeSlice.reducer;
