import axios from "axios";
import React, { useEffect, useState } from "react";
import IEmployee from "types/Employee";
import "./styles.css";

const FilterAndTools = ({
  employeesData,
  setEmployeesData,
}: {
  employeesData: IEmployee[];
  setEmployeesData: Function;
}) => {
  const [sortBy, setSortBy] = useState("");
  const [fetchCount, setFetchCount] = useState(0);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://api.1337co.de/v3/employees");
        const temp: IEmployee[] = res.data;
        setEmployeesData(temp);
      } catch (error) {
        console.log("Error=", error);
      }
    };
    getData();
  }, [setEmployeesData, fetchCount]);

  const selectSortBy = (e: any) => {
    if (e.target.value) {
      setSortBy(e.target.value);
    } else {
      setFetchCount((prev) => prev + 1);
    }
  };
  const sortCompareName = (obj1: IEmployee, obj2: IEmployee) => {
    return obj1.name.localeCompare(obj2.name);
  };
  const sortCompareLocation = (obj1: IEmployee, obj2: IEmployee) => {
    return obj1.office.localeCompare(obj2.office);
  };
  useEffect(() => {
    if (sortBy.length > 0) {
      if (sortBy === "name") {
        employeesData.sort(sortCompareName);
      } else if (sortBy === "location") {
        employeesData.sort(sortCompareLocation);
      }
      const tempArr = [...employeesData];
      setEmployeesData(tempArr);
    }
  }, [sortBy]);
  return (
    <>
      <section className="filter-area">
        <select name="sort" id="sort" onChange={(e) => selectSortBy(e)}>
          <option value="" defaultValue="">
            Sort By
          </option>
          <option value="name">Name</option>
          <option value="location">Location</option>
        </select>
        <input type="text" placeholder="Filter by Name or Office"></input>
      </section>
    </>
  );
};

export default FilterAndTools;
