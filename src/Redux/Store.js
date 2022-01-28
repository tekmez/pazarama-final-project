import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Users";

const store = configureStore({ reducer });

export default store;
