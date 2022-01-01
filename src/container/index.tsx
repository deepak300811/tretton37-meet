import React, { useState } from "react";
import FilterAndTools from "../components/FilterAndTools";
import CardHolder from "../components/CardHolder";
import "./styles.css";
const EmployeeContainer = () => {
  const [employeesData, setEmployeesData] = useState([]);
  return (
    <div className="container">
      <FilterAndTools
        setEmployeesData={setEmployeesData}
        employeesData={employeesData}
      />
      <CardHolder employeesData={employeesData} />
    </div>
  );
};

export default EmployeeContainer;
