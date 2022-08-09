import React from "react";
import FancyList from "../UI/FancyList";
import Sidebar from "../UI/Sidebar";
import classes from "./PageContent.module.css";

const PageContent = () => {
  return (
    <div className={`${classes.contentMainBody} pt-2 w-11/12 lg:w-9/12 m-auto flex flex-col gap-y-3`}>
      <h2 className="title">Browse All Rooms</h2>
      <div className = {`${classes.content} w-full flex gap-x-5`}>
        <Sidebar />
        <FancyList />
      </div>
    </div>
  );
};

export default PageContent;
