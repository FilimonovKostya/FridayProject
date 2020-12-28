import React, { DetailedHTMLProps, InputHTMLAttributes} from "react";
import style from "./Checkbox.module.css";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type CheckboxPropsType = DefaultInputPropsType & {

};

const Checkbox: React.FC<CheckboxPropsType> = () => {

    const [checked,setCheked] = React.useState<boolean>(false)
    const onChangeHandler = () => setCheked(!checked)

    return <div className={style.container}>
        <label className={style.pureMaterialCheckbox}>
            <input type={"checkbox"} className={style.input} checked={checked} onChange={onChangeHandler} />
            <span className={style.spanClassName}>  Checkbox  </span>
        </label>
    </div>
}

export default Checkbox;
