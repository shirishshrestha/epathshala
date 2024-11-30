// features/lecturesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const lecturesSlice = createSlice({
  name: "lectures",
  initialState: [],
  reducers: {
    addLecture: (state) => {
      state.push({
        id: Date.now(),
        title: "",
        description: "",
        file: null,
      });
    },
    updateLecture: (state, action) => {
      const { id, key, value } = action.payload;
      const lecture = state.find((l) => l.id === id);
      if (lecture) {
        lecture[key] = value;
      }
    },
    removeLecture: (state, action) => {
      return state.filter((lecture) => lecture.id !== action.payload);
    },
  },
});

export const { addLecture, updateLecture, removeLecture } =
  lecturesSlice.actions;
export default lecturesSlice.reducer;
