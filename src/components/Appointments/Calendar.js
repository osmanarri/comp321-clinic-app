// import React, {useState, useEffect} from 'react';
// import { DatePicker } from 'antd';
// import 'antd/dist/antd.css';
// import json from './clinicData.json';
// import './style.css';
// import docImg from './appointment.png'


// export default function Calendar(props){

//     // initial empty states for the form input
// const initialValues = {name: "", gender: "", clinic: "", date: "", time: ""}
// // track the state of the input
// const [formValues, setFormValues] = useState(initialValues);
// const [formErrors, setFormErrors] = useState({});
// const [isSubmit, setIsSubmit] = useState(false);

// // function handle the change in the inputs
// const handleChange = (event) => {    
//     // store the name and the value of each input
//     const {name, value} = event.target;
//     // set the value 
//     setFormValues({...formValues, [name]: value})
// }   

// const handleSubmit = (event) => {
//     // prevent the page to refresh
//     event.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
// }
// const clearState = (e) => {
//     e.preventDefault();
//     setFormValues('');
//   };

// useEffect(() => {
//     console.log(formErrors);
//     if(Object.keys(formErrors).length === 0 && isSubmit){
//         console.log(formValues);
//     }
// }, [formErrors])

// const validate = (values) => {
//     const errors = {}
    
//     if (!values.name){
//         errors.name = "Name is required"
//     }
//     if (!values.gender){
//         errors.gender = "Gender is required"
//     }
//     if (!values.clinic){
//         errors.clinic = "Clinic is required"
//     }
//     // if (!values.date){
//     //     errors.date = "Date is required"
//     // }
//     if (!values.time){
//         errors.time = "Time is required"
//     }

//     return errors
// }

//     function getClinic (arr, comp){
//         const unique = arr
//         .map(e => e[comp])
//         .map((e,i, final) => final.indexOf(e) === i && i)
//         .filter(e=>arr[e])
//         .map(e=>arr[e]);

//         return unique
//     }
//     function getTime (arr, comp){
//         const unique = arr
//         .map(e => e[comp])
//         .map((e,i, final) => final.indexOf(e) === i && i)
//         .filter(e=>arr[e])
//         .map(e=>arr[e]);

//         return unique
//     }
//     function getGender (arr, comp){
//         const unique = arr
//         .map(e => e[comp])
//         .map((e,i, final) => final.indexOf(e) === i && i)
//         .filter(e=>arr[e])
//         .map(e=>arr[e]);

//         return unique
//     }

//     const uniqueClinic = getClinic(json.clinics, "clinic")
//     const uniqueTime = getTime(json.times, "time")
//     const uniqueGender = getGender(json.genders, "gender")
    

//     return (        

//         <div className="form">
//             {Object.keys(formErrors).length === 0 && isSubmit ? (
//                 <div className="success">Appointment added successfully</div>
//             ) : ( 
//                ""
//             )}
//             <h1>Book an Appointment</h1>
//             <form>
//             {/* <label>Patient name</label><br /> */}
//             <input type="text" name="name" value={formValues.name} onChange={handleChange}/><br />
//             <p style={{color: "red"}}>{formErrors.name}</p>
//             <label>Patient gender</label><br />
//             <select name="gender" value={formValues.gender} onChange={handleChange}>
//                 {uniqueGender.map(item => (
//                     <option key={item.id} value={item.gender}> {item.gender}</option>
//                 ))}
//             </select><br />        
//             <p style={{color: "red"}}>{formErrors.gender}</p>  

//             <label>Clinic</label><br />
//             <select name="clinic" value={formValues.clinic} onChange={handleChange}>
//                 {uniqueClinic.map(item => (
//                     <option key={item.id} value={item.clinic}> {item.clinic}</option>
//                 ))}
//             </select><br />
//             <p style={{color: "red"}}>{formErrors.clinic}</p>   

//             <label>Pick date</label><br />
//             <DatePicker picker='day' /><br></br>
//             {/* <DatePicker picker='day' name="date" value={formValues.date} onChange={handleChange}/><br></br> */}
//             {/* <p style={{color: "red"}}>{formErrors.date}</p>       */}

//             <label>Pick time</label><br />
//             <select name="time" value={formValues.time} onChange={handleChange}>
//                 {uniqueTime.map(item => (
//                     <option key={item.id} value={item.time}> {item.time}</option>
//                 ))}
//             </select><br />
//             <p style={{color: "red"}}>{formErrors.time}</p>      
//             <button onClick={handleSubmit}>Submit</button>
//             <button className="book__reset" onClick={() => clearState()}>
//           Reset
//         </button>
           
//             <div>
//                 <img className="appointment__img" src={docImg} />
//             </div>
//             </form>
//         </div>
//     )
// }

// import React, {useState} from 'react';
// import './style.css';
// import './Test.css';

// const Calendar = (props) => {

//     const [enteredName, setEnteredName] = useState('');
//     const [enteredGender, setEnteredGender] = useState('');
//     const [enteredDate, setEnteredDate] = useState('');

    

//     const nameChangeHandler = (event) =>{

//         setEnteredName(event.target.value);
//         console.log("Name changed")
        
//     }
//     const genderChangeHandler = (event) =>{

//         setEnteredGender(event.target.value);
//         console.log("Gender changed")
        
//     }
//     const dateChangeHandler = (event) =>{

//         setEnteredDate(event.target.value);
//         console.log("Date changed")
       
//     };

//     const submitHandler = (event) => {
//         event.preventDefault();
        
//         const expenseData = {
//             name: enteredName,
//             gender: enteredGender,
//             date: new Date(enteredDate)

//         }
//         props.onXiomara(expenseData);
//         // clear the inputs when form is submitted
//         setEnteredName('');
//         setEnteredGender('');
//         setEnteredDate('');
//         // console.log(expenseData)
//     }

//     return (

//         <div className="form">
//             <form onSubmit={submitHandler}>
//                 <div className='new-expense__controls'>
//                     <div className='new-expense__controls'>
//                         <label>Name</label>
//                         <input type="text"
//                          value={enteredName} 
//                          onChange={nameChangeHandler}/>
//                     </div>
//                     <div className='new-expense__controls'>
//                         <label>Gender</label>
//                         <input type="number" min="0.01" step="0.01"
//                          value={enteredGender}
//                         onChange={genderChangeHandler}/>
//                     </div>
//                     <div className='new-expense__controls'>
//                         <label>Date</label>
//                         <input type="date" min="2019-01-01" max="2022-12-31"
//                          value={enteredDate} 
//                          onChange={dateChangeHandler}/>
//                     </div>
//                 </div>
//                 <div className='new-expenss__actions'>
//                      {/* <button type='button' onClick={props.onCancel}>Cancel</button> */}
//                     <button type='submit'>Add Appointment</button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default Calendar;

// third copy

// import React, {useState} from 'react';
// import './style.css';

import React, {useState} from 'react';
// import { DatePicker } from 'antd';
// import 'antd/dist/antd.css';
// import json from './clinicData.json';
import './style.css';
// import docImg from './appointment.png'





const Calendar = (props) => {

    const [enteredName, setEnteredName] = useState('');
    const [enteredGender, setEnteredGender] = useState('');
    const [enteredClinic, setEnteredClinic] = useState('');
    const [enteredDate, setEnteredDate] = useState('');    
    // const [formErrors, setFormErrors] = useState({});   

    const nameChangeHandler = (event) =>{

        setEnteredName(event.target.value);
        console.log("Name changed")
        
    }
    const genderChangeHandler = (event) =>{

        setEnteredGender(event.target.value);
        console.log("Gender changed")
        
    }

    const clinicChangeHandler = (event) =>{

        setEnteredClinic(event.target.value);
        console.log("Clinic changed")
        
    }

    const dateChangeHandler = (event) =>{

        setEnteredDate(event.target.value);
        console.log("Date changed")
       
    };

    const submitHandler = (event) => {
        event.preventDefault();
        
        const expenseData = {
            name: enteredName,
            gender: enteredGender,
            clinic: enteredClinic,
            date: new Date(enteredDate)

        }
        props.onXiomara(expenseData);
        // clear the inputs when form is submitted
        setEnteredName('');
        setEnteredGender('');
        setEnteredDate('');
        setEnteredClinic('');
        console.log(expenseData)
    } 

               

    return (

        <div className='form'>
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__controls'>
                        <label>Name</label>
                        <input type="text"
                         value={enteredName} 
                         onChange={nameChangeHandler}
                       
                         />
                    </div>
                    
                    <div className='new-expense__controls'>

                        <label>Gender</label>
                        <select value={enteredGender}
                        onChange={genderChangeHandler}>
                            <option value="" disabled selected>Select your option</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                        
                    </div>

                    <div className='new-expense__controls'>

                        <label>Clinic</label>
                       
                        <select value={enteredClinic}
                        onChange={clinicChangeHandler}>
                            <option value="" disabled selected>Select your option</option>
                            <option value="allergy">Allergy</option>
                            <option value="cardiology">Cardiology</option>
                            <option value="dermatology">Dermatology</option>
                            <option value="family Doctor">Family Doctor</option>
                            <option value="pediatrician">Pediatrician</option>
                        </select>
                        
                        
                    </div>

                    <div className='new-expense__controls'>
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31"
                         value={enteredDate} 
                         onChange={dateChangeHandler}/>
                    </div>

                    <div>
                    
               


                    </div>
                </div>
                <div className='new-expenss__actions'>
                     {/* <button type='button' onClick={props.onCancel}>Cancel</button> */}
                    <button type='submit'>Add Appointment</button>
                </div>
            </form>
        </div>
    )
}

export default Calendar;
