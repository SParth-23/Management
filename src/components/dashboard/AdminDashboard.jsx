import React from "react";
import Header from "../elements/Header";
import CreateTask from "../elements/CreateTask";
import AllTasks from "../elements/AllTasks";

const AdminDashboard = () => {
  return (
    <>
      <Header />
      <br></br>
      <CreateTask />
      <br></br>
      <AllTasks />
    </>
  );
};

export default AdminDashboard;
