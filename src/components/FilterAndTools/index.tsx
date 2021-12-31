import axios from "axios";
import React, { useEffect } from "react";
import IEmployee from "types/Employee";

const FilterAndTools = ({
  setEmployeesData,
}: {
  setEmployeesData: Function;
}) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://api.1337co.de/v3/employees");
        const temp: IEmployee[] = res.data;
        setEmployeesData(temp);
        console.log(temp);
      } catch (error) {
        console.log("Error=", error);
      }
    };
    getData();
  }, []);

  return <div>Filter</div>;
};

export default FilterAndTools;
