import React from 'react';

const Chart = (props) => {
    const chartdata = [
        {label:"jan", value:0},
        {label:"feb", value:0},
        {label:"mar", value:0},
        {label:"apl", value:0},
        {label:"may", value:0},
        {label:"jun", value:0},
        {label:"jul", value:0},
        {label:"aug", value:0},
        {label:"sep", value:0},
        {label:"oct", value:0},
        {label:"nov", value:0},
        {label:"dec", value:0}
    ];

    props.dataValuePass.map (el => {
        const getMonth = el.date.getMonth(); 
        return chartdata[getMonth].value += el.amount;
    });
    const filterTopValue = chartdata.map(el=>{return el.value});
    const topValue = Math.max(...filterTopValue);

    const getPercent = (value) => {
        return (value/topValue)*100;        
    }

    return (
        <div className="col12 sm4 md8 pa flexC c6b">
           <div className="wrapper">
               <ul className="ChartBox flexC">
                    {chartdata.map(el => {
                    return <li className="flexDCC ma" key={el.label}>
                        <div className="chartBar">                    
                                <div className="chartBarFill" style={{height:Math.round(getPercent(el.value))+"%"}}></div>
                        </div>
                        <label className="c7t">{el.label}</label>
                    </li>
                    })}                               
               </ul>
           </div>
        </div>
    )
}
export default Chart;