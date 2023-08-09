// import Table from "../components/Table/table";
// import Search from "../components/search/search";
// import { useEffect, useState } from "react";
// import axios from 'axios';


// function DatabasePage(){
//     const [data, setData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);

// useEffect(() => {
//     // Make an HTTP GET request to the backend server using Axios
//     axios.get('http://localhost:3001/data')
//       .then((response) => {
//         // Set the data state variable with the response data
//         setData(response.data);
//         //console.log(data)
//       })
//       .catch((error) => {
//         // Handle any errors that occur during the request
//         console.error(error);
//       });
//   }, []);

  

//   const handleFilter = (filtered) => {
//     setFilteredData(filtered);
//   };
  
//     return(
//         <div className="databaseBody">
//             <div className="top-content">
//                 {/* <Filter setFilteredData={setFilteredData}/> */}
//                 <Search data={data} setFilteredData={setFilteredData} handleFilter={handleFilter}/>
//             </div>
//             <div className="bottom-content">
//                 {/* <Table data={filteredData}/> */}
//                 <Table data={filteredData.length > 0 ? filteredData : data}/>
//             </div>
//       </div>
//     )
// }

// export default DatabasePage






import React, { useEffect, useState } from "react";
import "../styles/DatabasePage.css"
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';

import Table from "../components/Table/table";
import Search from "../components/search/search";

function DatabasePage() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to the backend server using Axios
    axios.get('http://localhost:3001/data')
      .then((response) => {
        // Set the data state variable with the response data
        setData(response.data);
        //console.log(data)
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
      });
  }, []);

  const handleFilter = (filtered) => {
    setFilteredData(filtered);
  };

  // Format data for Recharts
  const chartData = data.map((item) => {
    return {
      time_collected: item.time_collected,
      pressure_value: item.pressure_value
    };
  });

  return (
    <div className="databaseBody">
      <div className="top-content">
        <Search data={data} setFilteredData={setFilteredData} handleFilter={handleFilter}/>
      </div>
      <div className="bottom-content">
        <Table data={filteredData.length > 0 ? filteredData : data}/>
        <div className="analyze" style={{width: '100%', height: 300}}>
          <ResponsiveContainer>
              <LineChart width={800} height={400} data={chartData}>
              <XAxis dataKey="time_collected" />
              <YAxis />
              <CartesianGrid stroke="#000" strokeDasharray="5 5" />
              <Line type="monotone" dataKey="pressure_value" stroke="rgb(41, 91, 254)" />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        
        </div>
      </div>
    </div>
  );
}

export default DatabasePage;
