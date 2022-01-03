import React, { useState } from "react";
import FilterAndTools from "../components/FilterAndTools";
import CardHolder from "../components/CardHolder";
import Loader from "components/Loader";
import "./styles.css";
const EmployeeContainer = () => {
  const [employeesData, setEmployeesData] = useState([]);
  const [isListView, setIslistView] = useState(false);
  return (
    <div className="container">
      <FilterAndTools
        setEmployeesData={setEmployeesData}
        employeesData={employeesData}
        isListView={isListView}
        setIslistView={setIslistView}
      />
      {employeesData.length > 0 ? (
        <CardHolder employeesData={employeesData} isListView={isListView} />
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default EmployeeContainer;
