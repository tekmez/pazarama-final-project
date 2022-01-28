import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateForm from "./Pages/CreateFormPage";
import SuccessfulPage from "./Pages/SuccessfulPage";
import Welcome from "./Pages/Welcome";
import SearchFormPage from "./Pages/SearchFormPage";
import AdminPage from "./Pages/AdminPage";
import "./App.css";
import LoginPage from "./Pages/LoginPage";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/CreateForm" element={<CreateForm />} />
        <Route exact path="/SuccessfulPage" element={<SuccessfulPage />} />
        <Route exact path="/SearchFormPage" element={<SearchFormPage />} />
        <Route exact path="/LoginPage" element={<LoginPage />} />
        <Route
          path="/AdminPage"
          element={
            <PrivateRoute>
              <AdminPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
