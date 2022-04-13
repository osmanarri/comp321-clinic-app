import React, {useState} from 'react';
import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Admin, Resource ,fetchUtils} from "react-admin";

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';
import DoctorsPage from './pages/DoctorsPage';
import Footer from './components/Footer/Footer';
import Appointments from './pages/Appointments';
import Test from './components/Appointments/Test';
import Calendar from './components/Appointments/Calendar';


const APPOINTMENTS = [ 
  {
    id: 'e1',
    name:'Patient Name',
    gender: "Gender",
    clinic: "clinic",
    date: new Date(2020, 7, 14),
    time: 'Time'
  },
  { id: 'e2',
    name: 'Osman',
    gender: "Male",
    clinic: "clinic",
    date: new Date(2020, 7, 14),
    time: '10:30 am'
  },
  {
    id: 'e3',
    name: 'Osman',
    gender: "Male",
    clinic: "clinic",
    date: new Date(2020, 7, 14),
    time: '10:30 am'
  },
  {
    id: 'e4',
    name: 'Osman',
    gender: "Male",
    clinic: "clinic",
    date: new Date(2020, 7, 14),
    time: '10:30 am'
  },
];





function App() {
  const authCtx = useContext(AuthContext);
  const [appointments, setAppointments] = useState(APPOINTMENTS);

  const addAppointmmentHandler = (wena) => {
    setAppointments((prevAppointment) => {
      return [wena, ...prevAppointment]
    })
   }

  return (

    
    <Layout>
      <Switch>
      
        <Route path='/' exact>
          <HomePage />
          <Footer />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path='/auth'>
            <AuthPage />
            <Footer />
          </Route>
        )}
        <Route path='/profile'>
          {authCtx.isLoggedIn && <UserProfile />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
          <Footer />
        </Route>
        <Route path='/doctors'>
          {authCtx.isLoggedIn && <DoctorsPage />}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
          <Footer />
        </Route>      

        <Route path='/appointments'>
          {authCtx.isLoggedIn && <Appointments onAddAppointment={addAppointmmentHandler}/>}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
          <Footer />
        </Route>

        <Route path='/test'>
          {authCtx.isLoggedIn && <Test
             name={appointments[0].name}
              date={appointments[0].date}
              clinic={appointments[0].clinic}
               gender={appointments[0].gender}/>}
          {!authCtx.isLoggedIn && <Redirect to='/auth' />}
          <Footer />
        </Route>

      

        <Route path='*'>
          <Redirect to='/' />
          <Footer />
        </Route>
        
      </Switch>
    </Layout>
  );
}

export default App;