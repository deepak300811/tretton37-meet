import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useRef } from "react";
import IEmployee from "types/Employee";
import "./styles.css";

const FilterAndTools = ({
  employeesData,
  setEmployeesData,
  setIslistView,
  isListView,
  setIsLoading,
  setError,
  error,
}: {
  employeesData: IEmployee[];
  setEmployeesData: Function;
  setIslistView: Function;
  isListView: boolean;
  setIsLoading: Function;
  setError: Function;
  error: any;
}) => {
  const [sortBy, setSortBy] = useState<string>("");
  const [tempArr, setTempArr] = useState<IEmployee[]>([]);
  const [filterSort, setFilterSort] = useState<number>(0);
  const inputRef = useRef(null) as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("https://api.1337co.de/v3/employees");
        const temp: IEmployee[] = res.data;
        setIsLoading(false);
        setEmployeesData(temp);
        setTempArr(temp);
        const filterInput = inputRef?.current?.value || "";
        if (filterInput.length > 0) {
          setFilteredData(filterInput);
        }
      } catch (error) {
        setIsLoading(false);
        setError({ errorText: `${error.message} !`, errorType: "FETCH" });
        console.log("Error=", error);
      }
    };
    getData();
  }, [setEmployeesData, setError, setIsLoading]);

  useEffect(() => {
    if (
      employeesData.length < 1 &&
      error.errorType !== "FETCH" &&
      inputRef?.current?.value.length > 0
    ) {
      setError({
        errorText: "No employee matched with the searched Criterion !",
        errorType: "FILTER",
      });
    }
  }, [employeesData]);

  const selectSortBy = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value) {
      setSortBy(e.target.value);
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
    if (error.errorType === "FILTER") {
      setError({});
    }
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
  const handelFilter = (e: ChangeEvent<HTMLInputElement>) => {
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
