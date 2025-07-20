import { createSlice } from "@reduxjs/toolkit";

const connections = createSlice({
  name: "Connections",
  initialState: null,
  reducers: {
    addConnections: (state, action) => action.payload,
    removeCOnnections: () => null,
  },
});
export const { addConnections, removeCOnnections } = connections.actions;

export default connections.reducer;
