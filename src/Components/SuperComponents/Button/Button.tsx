import React from "react";
import style from "./Button.module.css";


type ButtonPropsType = {}

const Button: React.FC<ButtonPropsType> = (props) => {

    return <div className={style.container}>
        <button onClick={() => alert('asdasdf')} className={style.button}>{props.children}</button>
    </div>
}

export default Button


