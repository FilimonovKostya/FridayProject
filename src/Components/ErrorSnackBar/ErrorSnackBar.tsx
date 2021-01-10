import React, {useState} from 'react';
import style from './ErrorSnackBar.module.css'

const ErrorSnackBar = () => {

    const [toggleActive, setToggleActive] = useState(style.active)
    const [closeModalWindow, setCloseModalWindow] = useState(style.notActive)
    const [toggleClass, setToggleClass] = useState(false)


    return <div>
        <div className={style.centered}>
            <button className={style.btn} onClick={() => setToggleClass(!toggleClass)}>
                toggle
            </button>
        </div>
        <div className={`${style.notification} ${toggleClass ? toggleActive : ''}`}>
            <div className={style.text}> Something Error</div>
            <div className={`${style.close} ${toggleClass ? closeModalWindow : ''}`}>
                <div className={style.text} onClick={() => setToggleClass(!toggleClass)}> X</div>
            </div>
        </div>
    </div>
};

export default ErrorSnackBar;