import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import style from "./Button.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type ButtonPropsType = DefaultButtonPropsType & {

}

export const Button: React.FC<ButtonPropsType> = (props) => {

    return <div className={style.container}>
        <button className={style.button}>{props.children}</button>
    </div>
}

export default Button;
