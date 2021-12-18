import './App.css';
import React, { useState } from 'react';
import Form from './Component/Form';
import Chart from './Component/Chart';
import Filter from './Component/Filter';
import List from './Component/List';

function App() {
  // main database
  const dataBase = [
    {id:1, amount: 1000, item: "Car Loan", date:new Date("25 dec 2021")},
    {id:2, amount: 2000, item: "House Loan", date:new Date("25 Jan 2020")},
    {id:3, amount: 3000, item: "Education Loan", date:new Date("25 Feb 2021")},
    {id:4, amount: 4000, item: "Bike Loan", date:new Date("20 dec 2020")}];

    const [newDataBase, setnewDataBase] = useState(dataBase);
    const [filterYear, setFilterYear] = useState('2021');

    const mergeData = (formValue) => {
      setnewDataBase( preDatas => {
        return [formValue, ...preDatas];
      });     
    }

    const filteredYear = (value) => {
        setFilterYear(value);
    }

    const FiltedData = newDataBase.filter(el => {
      return el.date.getFullYear().toString() === filterYear;
    })

    console.log(FiltedData);

  return (
    <React.Fragment>
        <Form getFormValues={mergeData}/>
        <Chart dataValuePass={FiltedData} />
        <Filter dataValuePass={newDataBase} getYearValue={filteredYear}/>
        <List dataValuePass={FiltedData}/>
    </React.Fragment>
  );
}

export default App;
