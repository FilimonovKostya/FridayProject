import React, {useState} from 'react';
import style from './ErrorSnackBar.module.css'

type ErrorSnackBarPropsType = {
    errorMessage: string
}

const ErrorSnackBar = (props:ErrorSnackBarPropsType) => {

    const [classActive, setClassActive] = useState(style.active)
    const [classNotActive, setClassNotActive] = useState(style.notActive)
    const [isActiveClass, setIsActiveClass] = useState(false)


    return <div>
        <div className={style.centered}>
            <button className={style.btn} onClick={() => setIsActiveClass(!isActiveClass)}> Show Error</button>
        </div>
        <div className={`${style.notification} ${isActiveClass ? classActive : ''}`}>
            <div className={style.text}> {props.errorMessage} </div>
            <div className={`${style.close} ${isActiveClass ? classNotActive : ''}`}>
                <div className={style.text} onClick={() => setIsActiveClass(!isActiveClass)}>X</div>
            </div>
        </div>
    </div>
};

export default ErrorSnackBar;