import React from 'react';
import './App.css';
import NotFound from "./Components/NotFound/NotFound";
import NavBar from "./Components/NavBar/NavBar";
import {Redirect, Route, Switch} from 'react-router-dom';
import AllComponents from "./AllComponents";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Profile from "./Components/Profile/Profile";
import Password from "./Components/Passwords/Password";
import PasswordRecovery from "./Components/Passwords/PasswordRecovery/PasswordRecovery";
import {useSelector} from "react-redux";
import {RootStateType} from "./Redux/store";
import ProgressBar from "./Components/SuperComponents/ProgressBar/ProgressBar";

export const path = {
    LOGIN: '/login',
    REG: '/registration',
    PASSWORD: '/newPassword',
    PASS_REC: '/passwordRecovery',
    PROFILE: '/profile',
}

function App() {

    const statusRegistration = useSelector<RootStateType, boolean>(state => state.registration.isLoading)

    return <div>
        <NavBar/>
        {statusRegistration ? <ProgressBar/> : null}
        {/* Switch нужен чтобы в url адрессе отображалось только то что нужно(＾▽＾)*/}
        <Switch>
            <Route path={'/'} exact render={() => <AllComponents/>}/>
            <Route path={path.LOGIN} exact render={() => <Login/>}/>
            <Route path={path.REG} exact render={() => <Registration/>}/>
            <Route path={path.PASSWORD} exact render={() => <Password/>}/>
            <Route path={path.PASS_REC} exact render={() => <PasswordRecovery/>}/>
            <Route path={path.PROFILE} exact render={() => <Profile/>}/>
            {/*Отрисуется в случае если не один url не подойдет (´｡• ᵕ •｡)*/}
            <Route path={'/404'} render={() => <NotFound/>}/>
            <Redirect from={'*'} to={'/404'}/>
        </Switch>
    </div>
}

export default App;

// Создал ветку - тест