import React from 'react';

const TimeDate = (props) => {
    const TimeDate = props.dateValues;
    return(        
        <div className="col12 sm4 md8 flex">
            <span>{TimeDate.toLocaleString("en-US",{day:"numeric"})}</span>
            <span>{TimeDate.toLocaleString("en-US",{month:"long"})}</span>
            <span>{TimeDate.toLocaleString("en-US",{year:"numeric"})}</span>
        </div>
    )
}

export default TimeDate;