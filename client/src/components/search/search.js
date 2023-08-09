import React, { useState } from "react";
import './search.css'

function Search(props) {
  const { data, setFilteredData, handleFilter } = props;
  const [filters, setFilters] = useState({
    tech_name: "",
    pressure_value: "",
    date_collected: "",
    job_num: "",
    serial_num: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const filtered = data.filter((item) => {
      return (
        item.tech_name.toLowerCase().includes(filters.tech_name.toLowerCase()) &&
        item.pressure_value.toString().includes(filters.pressure_value) &&
        item.date_collected.includes(filters.date_collected) &&
        item.job_num.toString().includes(filters.job_num) &&
        item.serial_num.toString().includes(filters.serial_num)
      );
    });
    setFilteredData(filtered);
    handleFilter(filtered);
  };
  const handleReset = () => {
    setFilteredData([]);
    setFilters({
      tech_name: "",
      pressure_value: "",
      date_collected: "",
      job_num: "",
      serial_num: "",
    });
  };
  return (
    <form onSubmit={handleSubmit} className="filterSection">
      <div className="search-inputs">
        <input type="text" placeholder="Technician Name" name="tech_name" value={filters.tech_name} onChange={handleInputChange}/>
        <input type="text" placeholder="Pressure Value" name="pressure_value" value={filters.pressure_value} onChange={handleInputChange}/>
        <input type="text" placeholder="Date Collected" name="date_collected" value={filters.date_collected} onChange={handleInputChange}/>
        <input type="text" placeholder="Job Number" name="job_num" value={filters.job_num} onChange={handleInputChange}/>
        <input  type="text" placeholder="Serial Number" name="serial_num" value={filters.serial_num}onChange={handleInputChange}/>
      </div>
      <div className="search-buttons">
        <button type="submit">Filter</button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </form>
  );
}

export default Search;
