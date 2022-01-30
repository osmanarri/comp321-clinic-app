import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';
import DoctorsPage from './pages/DoctorsPage';
import Footer from './components/Footer/Footer';
import Appointments from './pages/Appointments';




function App() {
  const authCtx = useContext(AuthContext);

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
          {authCtx.isLoggedIn && <Appointments />}
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