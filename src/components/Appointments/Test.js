import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Test.css';



export default function Test(props){

    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    const [x, setName] = useState(props.name)  
    // const [clinic, setClinic] = useState(props.clinic)  

    function clickHandler(){
        setName("another name");
    }

    return(
        <div className='expense-item'>

            <div className='date'> 
                 <div className='month'>{month}</div>
                <div className='year'>{year}</div>
                <div className='day'>{day}</div>
            </div>

                 
            <div className='patient-info'>
                <h2>{x}</h2>          
            </div>

            <div className='patient-info'>
                {props.gender}          
             </div>

             <div className='patient-info'>
                {props.clinic}          
             </div>

            <Link to="/appointments">
            <button onClick={clickHandler}>Update</button>
            </Link>
        </div>
    )
}