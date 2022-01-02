import React, { useState } from "react";
import FilterAndTools from "../components/FilterAndTools";
import CardHolder from "../components/CardHolder";
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
      <CardHolder employeesData={employeesData} isListView={isListView} />
    </div>
  );
};

export default EmployeeContainer;
