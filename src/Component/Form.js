import React, { useState } from 'react';

const Form = (props) => {

    // declare state for form field
    const [DateValue, setDateValue] = useState('');
    const [ItemValue, setItemValue] = useState('');
    const [AmountValues, setAmountValues] = useState('');
    // validation state
    const [dateValidate,setDateValidate] = useState(true);
    const [itemValidate,setItemValidate] = useState(true);
    const [amountValidate,setAmountValidate] = useState(true);

    const DateTimeValue = (event)=>{
        setDateValue(event.target.value);
        setDateValidate(true);
    };
    const ItemNameValue = (event)=>{
        setItemValue(event.target.value);       
        setItemValidate(true)
    };
    const AmountValue = (event)=>{
        setAmountValues(event.target.value);
        setAmountValidate(true);
    };    
    // form submit action zone
    const formSubmition= (event)=>{
        event.preventDefault();

        if(DateValue.trim().length === 0){
             setDateValidate(false);            
        } ; 
        if(ItemValue.trim().length === 0){
             setItemValidate(false);
        };
        if(AmountValues.trim().length === 0){
            return setAmountValidate(false);
        };

        // storeValues from Form
        const tempValueStore = {
            id:Math.random(),
            item:ItemValue,
            amount: +AmountValues,
            date: new Date(DateValue)
        }
        console.log(tempValueStore);
        props.getFormValues(tempValueStore);

        setDateValue('');
        setItemValue('');
        setAmountValues('');
    }

    return(
        <div className="col12 sm4 md8 flexCC c1b pa">
            <div className="wrapper">
                <form id="ExpenseForm" onSubmit={formSubmition}>
                    <div className="col3 sm4 md8 mrl">
                        <input type="date" placeholder="Date" value={DateValue} onChange={DateTimeValue} style={{backgroundColor: !dateValidate? "red" : "white"}} />
                    </div>

                    <div className="col3 sm4 md8 mrl">
                        <input type="text" placeholder="Item Name" value={ItemValue} onChange={ItemNameValue} style={{backgroundColor: !itemValidate? "red" : "white"}} />
                    </div>

                    <div className="col3 sm4 md8 mrl">                      
                        <input type="number" placeholder="Amount" value={AmountValues} onChange={AmountValue} style={{backgroundColor: !amountValidate? "red" : "white"}}/>
                    </div> 
                    <div className="col3 sm4 md8 mrl">
                        <input type="submit" value="Add" className="c6b c7t submitBtn" />
                    </div>                                       
                </form>
            </div>
        </div>
    )
}

export default Form;