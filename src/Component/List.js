import React from 'react';
import TimeDate from './TimeDate';

const List = (props) => {
    return (
        <div className="col12 sm4 md8 flexCC mt">
            <ul className="itemList wrapper">
                {props.dataValuePass.map((el,index) => {
                    return<li key={el.id} className="pa">
                        <span className="col12 sm4 md8">{index+1}</span>
                        <span className="col12 sm4 md8">{el.item}</span>
                        <span className="col12 sm4 md8">{el.amount}</span>
                        <TimeDate dateValues={el.date}/>
                    </li>
                })}                     
            </ul>
        </div>
    )
}

export default List;