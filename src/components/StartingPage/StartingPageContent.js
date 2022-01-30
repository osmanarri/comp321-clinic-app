// import  './StartingPageContent.module.css';
import './home.css'
import { Link } from 'react-router-dom';
import { PhoneFilled } from '@ant-design/icons';





const StartingPageContent = () => {
  return (

    <div className='container'>

       <div className="content">
              <h1>Patient Portal</h1>
              <p>Allow you to securely quickly share important medical information electonically with us.</p>
              <p className="res__phone">
              <PhoneFilled /> 416-123-4567
               </p>
               <Link to="/appointments">
                 <button className="aptBtn">Book an Appointment</button> 
              </Link>
       </div>      
    </div>
  );
};

export default StartingPageContent;