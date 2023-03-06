import { createSlice } from "@reduxjs/toolkit";
import {
  deletePerson,
  getPersons,
  saveNewPerson,
  updatePerson,
} from "../actions/actions";

const initialState = {
  data: [],
  loading: true,
};

export const personsSlice = createSlice({
  name: "persons",
  initialState,
  reducers: {
    addNewPerson: (state, action) => {
      state.data.push(action.payload);
    },
    deleteNewPerson: (state) => {
      state.data = state.data.filter((item) => item.id);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPersons.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPersons.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      });

    builder.addCase(deletePerson.fulfilled, (state, action) => {
      state.data = state.data.filter(
        (person) => person.id !== action.payload.id
      );
    });

    builder.addCase(updatePerson.fulfilled, (state, action) => {
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data = [
        ...state.data.slice(0, index),
        action.payload,
        ...state.data.slice(index + 1),
      ];
    });

    builder.addCase(saveNewPerson.fulfilled, (state, action) => {
      state.data = [
        ...state.data.slice(0, state.data.length - 1),
        action.payload,
      ];
    });
  },
});

export const { addNewPerson, deleteNewPerson } = personsSlice.actions;

export const selectPersons = (state) => state.persons;

export default personsSlice.reducer;
