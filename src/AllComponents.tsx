import React from "react";
import Input from "./Components/SuperComponents/Input/Input";
import Button from "./Components/SuperComponents/Button/Button";
import Checkbox from "./Components/SuperComponents/CheckBox/Checkbox";

type AllComponentsPropsType = {}

const AllComponents: React.FC<AllComponentsPropsType> = () => {

    return <div className={'allComponents'}>
        <Input/>
        <Button />
        <Checkbox/>
    </div>
}

export default AllComponents