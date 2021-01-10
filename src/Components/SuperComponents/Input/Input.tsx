import React, { DetailedHTMLProps, InputHTMLAttributes, } from "react";
import style from "./Input.module.css";

export type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputTextPropsType = DefaultInputPropsType & {

};

export const Input: React.FC<InputTextPropsType> = ({placeholder,type,onChange,value}) => {

    return <div className={style.inputContainer}>
        <input className={style.input} type={type} value={value} onChange={onChange} placeholder={placeholder}/>
        <span className={style.focusBorder}/>
    </div>
}

export default Input;
