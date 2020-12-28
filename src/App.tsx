import React from 'react';
import './App.css';
import NotFound from "./Components/NotFound/NotFound";
import NavBar from "./Components/NavBar/NavBar";
import {Route} from 'react-router-dom';
import AllComponents from "./AllComponents";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Profile from "./Components/Profile/Profile";
import Password from "./Components/Passwords/Password";
import PasswordRecovery from "./Components/Passwords/PasswordRecovery/PasswordRecovery";

function App() {
    return <div>
        <NavBar/>
        <Route path={'/login'} exact component={() => <Login/>}/>
        <Route path={'/registration'} exact component={() => <Registration/>}/>
        <Route path={'/newPassword'} exact component={() => <Password/>}/>
        <Route path={'/passwordRecovery'} exact component={() => <PasswordRecovery/>}/>
        <Route path={'/profile'} exact component={() => <Profile/>}/>
        <Route path={'/notFound'} exact render={() => <NotFound/>}/>
        <Route path={'/allComponents'} exact render={() => <AllComponents/>}/>
    </div>
}

export default App;
