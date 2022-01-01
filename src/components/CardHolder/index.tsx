import React from "react";
import DetailCard from "../DetailCard";
import IEmployee from "../../types/Employee";
import "./styles.css";

const CardHolder = ({ employeesData }: { employeesData: IEmployee[] }) => {
  return (
    <div className="card-holder">
      {console.log(employeesData)}
      {employeesData?.length > 0 &&
        employeesData.map((employee: IEmployee) => {
          return <DetailCard employee={employee} key={employee.email} />;
        })}
    </div>
  );
};

export default CardHolder;
