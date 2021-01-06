import React from "react";
import style from "./Checkbox.module.css";


type CheckboxPropsType = {};

const Checkbox: React.FC<CheckboxPropsType> = () => {

    const [checked, setChecked] = React.useState<boolean>(false)
    const onChangeHandler = () => setChecked(!checked)

    console.log(checked)

    return <div className={style.container}>
        <label className={style.pureMaterialCheckbox}>
            <input type={"checkbox"} className={style.input} checked={checked} onChange={onChangeHandler}/>
            <span className={style.spanClassName}>  Checkbox  </span>
        </label>


    </div>
}

export default Checkbox;
