import React, { useState } from "react";
import FilterAndTools from "../components/FilterAndTools";
import CardHolder from "../components/CardHolder";
import Loader from "components/Loader";
import Error from "components/Error";
import IEmployee from "types/Employee";
import "./styles.css";

interface IError {
  errorType: string;
  errorText: string;
}

const EmployeeContainer = () => {
  const [employeesData, setEmployeesData] = useState<IEmployee[]>([]);
  const [isListView, setIslistView] = useState<boolean>(false);
  const [error, setError] = useState<IError>({ errorType: "", errorText: "" });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div className="container">
      <FilterAndTools
        setEmployeesData={setEmployeesData}
        employeesData={employeesData}
        isListView={isListView}
        setIslistView={setIslistView}
        setIsLoading={setIsLoading}
        setError={setError}
        error={error}
      />

      {isLoading ? (
        <Loader />
      ) : error.errorText ? (
        <Error errorMsg={error.errorText} />
      ) : (
        <CardHolder employeesData={employeesData} isListView={isListView} />
      )}
    </div>
  );
};

export default EmployeeContainer;
