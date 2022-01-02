import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import IEmployee from "types/Employee";
import "./styles.css";

const FilterAndTools = ({
  employeesData,
  setEmployeesData,
  setIslistView,
  isListView,
}: {
  employeesData: IEmployee[];
  setEmployeesData: Function;
  setIslistView: Function;
  isListView: boolean;
}) => {
  const [sortBy, setSortBy] = useState("");
  // const [fetchCount, setFetchCount] = useState(0);
  const [tempArr, setTempArr] = useState<IEmployee[]>([]);
  const [filterSort, setFilterSort] = useState(0);
  const inputRef: any = useRef(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://api.1337co.de/v3/employees");
        const temp: IEmployee[] = res.data;
        setEmployeesData(temp);
        setTempArr(temp);
        const filterInput = inputRef?.current?.value || "";
        if (filterInput.length > 0) {
          setFilteredData(filterInput);
        }
      } catch (error) {
        console.log("Error=", error);
      }
    };
    getData();
  }, [setEmployeesData]);

  const selectSortBy = (e: any) => {
    if (e.target.value) {
      setSortBy(e.target.value);
    }
    // else {
    //   setFetchCount((prev) => prev + 1);
    // }
  };
  const sortCompareName = (obj1: IEmployee, obj2: IEmployee) => {
    return obj1.name.localeCompare(obj2.name);
  };
  const sortCompareLocation = (obj1: IEmployee, obj2: IEmployee) => {
    return obj1.office.localeCompare(obj2.office);
  };
  useEffect(() => {
    if (sortBy.length > 0) {
      const tempSortedArr = [...employeesData];
      if (sortBy === "name") {
        tempSortedArr.sort(sortCompareName);
      } else if (sortBy === "location") {
        tempSortedArr.sort(sortCompareLocation);
      }
      const tempArrr = [...tempSortedArr];
      setEmployeesData(tempArrr);
    }
  }, [sortBy, filterSort]);
  const setFilteredData = (str: string) => {
    setEmployeesData(
      tempArr.filter(
        (employee: IEmployee) =>
          employee.name.toLocaleLowerCase().includes(str.toLocaleLowerCase()) ||
          employee.office.toLocaleLowerCase().includes(str.toLocaleLowerCase())
      )
    );
    if (sortBy.length > 0) {
      setFilterSort((prev) => prev + 1);
    }
  };
  const handelFilter = (e: any) => {
    setFilteredData(e.target.value);
  };
  const handelToggle = () => {
    setIslistView(!isListView);
  };
  return (
    <>
      <section className="filter-area">
        <select name="sort" id="sort" onChange={(e) => selectSortBy(e)}>
          <option value="" defaultValue="" disabled selected>
            Sort By
          </option>
          <option value="name">Name</option>
          <option value="location">Location</option>
        </select>
        <input
          ref={inputRef}
          type="text"
          placeholder="Filter by Name or Office"
          onChange={(e) => handelFilter(e)}
        ></input>
        <div className="switch-container">
          Grid view
          <label className="switch">
            <input
              type="checkbox"
              value="toggle-grid"
              checked={isListView}
              onChange={handelToggle}
            />
            <div></div>
          </label>
          List view
        </div>
      </section>
    </>
  );
};

export default FilterAndTools;
