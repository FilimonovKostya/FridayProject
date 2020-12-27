import React, { DetailedHTMLProps, InputHTMLAttributes, } from "react";
import style from "./Input.module.css";


// тип пропсов обычного инпута
export type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type InputTextPropsType = DefaultInputPropsType & {

};

export const Input: React.FC<InputTextPropsType> = () => {

    return <div className={style.inputContainer}>
        <input className={style.input} type="text" placeholder={'Write'}/>
        <span className={style.focusBorder}/>
    </div>
}

export default Input;
