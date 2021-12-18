import React,{useState} from 'react';

const Filter = (props) => {

    const selectYear = (event) => {
        props.getYearValue(event.target.value);
    }   

    const gatherYears = props.dataValuePass.map(el=>{
        return el.date.getFullYear();
    });
    const filterYears = [...new Set(gatherYears)];
    
    return (
        <div className="col12 sm4 md8 c4b pa flexC">
            <div className="wrapper">
                <select onChange={selectYear}>
                    {filterYears.map(el=>{                       
                         return <option value={el}>{el}</option>
                    })}
                </select>
            </div>
        </div>
    )
}

export default Filter;