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

const path = {
    login: '/login',
    reg: '/registration',
    password: '/newPassword',
    passRec: '/passwordRecovery',
    profile: '/profile',
    notFound: '/notFound',
    allComponents: '/allComponents',

}

function App() {
    return <div>
        <NavBar/>
        <Route path={path.login} exact component={() => <Login/>}/>
        <Route path={path.reg} exact component={() => <Registration/>}/>
        <Route path={path.password} exact component={() => <Password/>}/>
        <Route path={path.passRec} exact component={() => <PasswordRecovery/>}/>
        <Route path={path.profile} exact component={() => <Profile/>}/>
        <Route path={path.notFound} exact render={() => <NotFound/>}/>
        <Route path={path.allComponents} exact render={() => <AllComponents/>}/>
    </div>
}

export default App;
