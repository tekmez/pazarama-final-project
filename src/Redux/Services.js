import { createAsyncThunk } from "@reduxjs/toolkit";
import regenerator from "regenerator-runtime";
import axios from "axios";

export const getUser = createAsyncThunk(
  "user/getUser",
  async (ticketNumber) => {
    const response = await axios.get(process.env.REACT_APP_API_URL, {
      params: {
        ticketNumber: ticketNumber,
      },
    });
    return response.data;
  }
);

export const postUser = createAsyncThunk("user/postUser", async (info) => {
  const response = await axios.post(process.env.REACT_APP_API_URL, {
    firstName: info.firstName,
    lastName: info.lastName,
    age: info.age,
    tc: info.tc,
    reason: info.reason,
    address: info.address,
    date: info.date,
  });
  return response.data;
});

export const editUser = async (status, answer, id) => {
  const response = await axios.put(`${process.env.REACT_APP_API_URL}/${id}`, {
    status: status,
    answer: answer,
  });
  return response.data;
};
