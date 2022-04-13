import React from 'react';
import Calendar from '../components/Appointments/Calendar';


export default function Appointments(props){

    const x = (y) =>{
        const formData = {
            ...y,
            id: Math.random().toString()
        }
        props.onAddAppointment(formData)
        console.log(formData)
    }

    return (

       <Calendar onXiomara={x}/>
    )
}