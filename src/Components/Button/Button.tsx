import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import style from "./Button.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

export const Button: React.FC<SuperButtonPropsType> = (
    {
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    // const finalClassName = red ? style.red : style.default;

    // return (
    //     <button
    //         className={finalClassName}
    //         {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
    //     />
    // );

    return <div className={style.container}>
        <button className={style.button}>Button</button>
    </div>
}

export default Button;
