import React from "react";
import DetailCard from "../DetailCard";
import IEmployee from "../../types/Employee";
import "./styles.css";

const CardHolder = ({
  employeesData,
  isListView,
}: {
  employeesData: IEmployee[];
  isListView: boolean;
}) => {
  return (
    <div className={`card-holder ${isListView ? "list" : ""}`}>
      {employeesData?.length > 0 &&
        employeesData.map((employee: IEmployee) => {
          return (
            <DetailCard
              employee={employee}
              key={employee.email}
              isListView={isListView}
            />
          );
        })}
    </div>
  );
};

export default CardHolder;
