"use client";

import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

let newDate = "";
let searchDate = "";

//from chatgpt with some extra edits
function MyDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  
  useEffect(() => {
      newDate = selectedDate;

      try 
      {
        const dateObject = new Date(newDate);

        const year = dateObject.getFullYear();
        const month = (dateObject.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to month index to match the format
        const day = dateObject.getDate().toString().padStart(2, '0');

        searchDate = `${year}-${month}-${day}`;
        //console.log(searchDate);
      }
      catch (error) 
      {
        console.error('Error fetching player stats:', error);
      }
  }, [selectedDate]);

  return (
    <div>
      <h2>Select a Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="yyyy-MM-dd"
        placeholderText="Select a date"
      />
    </div>
  );
}
  
  export default MyDatePicker;