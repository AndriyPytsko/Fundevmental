import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../services/api.service";

export const getPersons = createAsyncThunk("persons/getPersons", async () => {
  return ApiService.getPersons();
});

export const updatePerson = createAsyncThunk(
  "persons/updatePerson",
  async (person) => {
    return ApiService.updatePerson(person);
  }
);

export const deletePerson = createAsyncThunk(
  "persons/deletePerson",
  async (id) => {
    return ApiService.deletePerson(id);
  }
);

export const saveNewPerson = createAsyncThunk(
  "persons/createPerson",
  async (person) => {
    return ApiService.createPerson(person);
  }
);
