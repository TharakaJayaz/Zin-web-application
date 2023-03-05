import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import classes from "./AdminPage.module.css";
import TemparyPage from "./TemparyPage";

const AdminPage = () => {
  return (
    <div className={classes.admin_main_div}>
      <h1> this is admin page</h1>
      <Link to="/tempPage">
        <button>Go to temp page</button>
      </Link>
      <Routes>
        <Route to="/admin/tempPage" element={<TemparyPage />} />
      </Routes>
    </div>
  );
};

export default AdminPage;
