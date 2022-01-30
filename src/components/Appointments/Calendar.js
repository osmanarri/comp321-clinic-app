import React, {useState} from 'react';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import json from './clinicData.json';
import './style.css';
import docImg from './appointment.png'
import { Button, message } from 'antd';

export default function Calendar(){

    // const [name, setName] = useState();
    // const [gender, setGender] = useState();
    // const [clinic, setClinic] = useState();
    // const [time, setTime] = useState();
    // const [date, pickDate] = useState();



    function getClinic (arr, comp){
        const unique = arr
        .map(e => e[comp])
        .map((e,i, final) => final.indexOf(e) === i && i)
        .filter(e=>arr[e])
        .map(e=>arr[e]);

        return unique
    }
    function getTime (arr, comp){
        const unique = arr
        .map(e => e[comp])
        .map((e,i, final) => final.indexOf(e) === i && i)
        .filter(e=>arr[e])
        .map(e=>arr[e]);

        return unique
    }
    function getGender (arr, comp){
        const unique = arr
        .map(e => e[comp])
        .map((e,i, final) => final.indexOf(e) === i && i)
        .filter(e=>arr[e])
        .map(e=>arr[e]);

        return unique
    }

    const uniqueClinic = getClinic(json.clinics, "clinic")
    const uniqueTime = getTime(json.times, "time")
    const uniqueGender = getGender(json.genders, "gender")

    return (

        

        <div className="form">
        
            <h1>Book an Appointment</h1>
            <form>
            <label>Patient name</label><br />
            <input type="text"  placeholder='Your first name'/><br />

            <label>Patient gender</label><br />
            <select>
                {uniqueGender.map(item => (
                    <option key={item.id} value={item.gender}> {item.gender}</option>
                ))}
            </select><br />        

            <label>Clinic</label><br />
            <select>
                {uniqueClinic.map(item => (
                    <option key={item.id} value={item.clinic}> {item.clinic}</option>
                ))}
            </select><br />

            <label>Pick date</label><br />
            <DatePicker picker='day' /><br></br>


            <label>Pick time</label><br />
            <select>
                {uniqueTime.map(item => (
                    <option key={item.id} value={item.time}> {item.time}</option>
                ))}
            </select><br />

            <button    
            >Submit</button>

            <div>
                <img className="appointment__img" src={docImg} />
            </div>
            </form>
        </div>
    )
}