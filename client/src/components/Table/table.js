import './table.css';
import React, { useState, useEffect } from 'react';
function Table({data}) {
       const formatDate = (dateString) => {
        if (!dateString) {
            return ''; // Return empty string if dateString is null or undefined
        }
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${month}-${day}-${year}`;
    }
    const formatTime = (timeString) => {
        if (!timeString) {
            return ''; // Return empty string if timeString is null or undefined
        }
        const time = new Date(`1970-01-01T${timeString}`);
        const hours = time.getHours();
        const minutes = String(time.getMinutes()).padStart(2, '0');
        const seconds = String(time.getSeconds()).padStart(2, '0');
        const amOrPm = hours >= 12 ? 'PM' : 'AM';
        const twelveHourClock = hours % 12 || 12;
        return `${twelveHourClock}:${minutes}:${seconds} ${amOrPm}`;
    }
     return (
        <div className='table-sec'>
            <table className='blueTable'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Pressure Value</th>
                        <th>Technician Name</th>
                        <th>Job Number</th>
                        <th>Serial Number</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 && data.map((row ) => (
                        <tr key={row.pressure_id}>
                            <td>{formatDate(row.date_collected)}</td>
                            <td>{formatTime(row.time_collected)}</td>
                            <td>{row.pressure_value} PSI</td>
                            <td>{row.tech_name}</td>
                            <td>{row.job_num}</td>
                            <td>{row.serial_num}</td>
                            <td>{row.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )}
export default Table;