import React, { DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from "./Checkbox.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type CheckboxPropsType = DefaultInputPropsType & {

};

const Checkbox: React.FC<CheckboxPropsType> = () => {

    return <div className={style.container}>
        <label className={style.pureMaterialCheckbox}>
            <input type={"checkbox"} className={style.input} checked={ true} />
            <span className={style.spanClassName}>  Checkbox  </span>
        </label>
    </div>
}

export default Checkbox;
