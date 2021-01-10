import React, {useState} from 'react';

import {path} from "../../../App";
import {NavLink} from 'react-router-dom';
import {RootStateType} from "../../../Redux/store";
import {useDispatch, useSelector} from "react-redux";
import {sendRecoveryEmail} from "../../../Redux/reducers/passwordRecovery-reducer";

import s from "./PasswordRecovery.module.css";

const PasswordRecovery: React.FC = () => {

    const [value, setValue] = useState<string>('')

    //get current status
    const status = useSelector<RootStateType, string>((state) => state.passwordRecovery.status)
    //get progress state
    const isFetching = useSelector<RootStateType, boolean>((state) => state.passwordRecovery.isFetching)

    const dispatch = useDispatch()

    const sendEmail = () => {
        dispatch(sendRecoveryEmail(value))
        //clear local state field
        setValue('')
    }

    return (
        <div className={s.recoveryPage}>
            <div className={s.formWrapper}>
                <h1 className={s.pageName}>Recovery Password</h1>
                <div className={s.inner}>
                    <h3 className={s.title}>Welcome to App</h3>
                    <div className={s.recoveryForm}>
                        {
                            status && <span className={s.statusMessage}>{status}</span>
                        }
                        <div className={s.fieldBlock}>
                            <input type="email"
                                   value={value}
                                   className={s.input}
                                   onChange={(e) => setValue(e.currentTarget.value)}/>
                            <button onClick={sendEmail}
                                    disabled={isFetching}
                                    className={s.btn}>Send
                            </button>
                            <NavLink to={path.LOGIN} className={s.loginLink}>Login</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PasswordRecovery;