import React from "react";
import style from "./Button.module.css";


type ButtonPropsType = {}

export const Button: React.FC<ButtonPropsType> = (props) => {

    return <div className={style.container}>
        <button className={style.button}>Button</button>
    </div>
}

export default Button;
