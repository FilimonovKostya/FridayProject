import React from "react";
import Input from "./Components/SuperComponents/Input/Input";
import Button from "./Components/SuperComponents/Button/Button";
import Checkbox from "./Components/SuperComponents/CheckBox/Checkbox";
import RadioInput from "./Components/SuperComponents/RadioInput/RadioInput";
import SelectInput from "./Components/SuperComponents/SelectInput/SelectInput";
import ProgressBar from "./Components/SuperComponents/ProgressBar/ProgressBar";
import {cartsPackAPI} from './Api/api-cart';

type AllComponentsPropsType = {}

export type CartUpdateType = {
    _id: string,
    name?:string
}

const AllComponents: React.FC<AllComponentsPropsType> = () => {
//data for requests
    const cartObj = {
        name: "Denchik rulit pack!",
        path: "/def",
        private: false,
        type: "Main"
    }

    const packId = '6005ce5f2e64f31a90f12e29'

    const cardUpdateObj:CartUpdateType = {
        _id: packId,
        name:'UPDATE NAME NOW!!!'
    }

    const getRequest = () => {
        cartsPackAPI.getCards()
    }
   //have to transfer object
    const createRequest = () => {
        cartsPackAPI.createCardsPack(cartObj)
    }

    //have to get actual id! and name if you want...you can see if after create Pack
    const updateRequest = () => {
        cartsPackAPI.updateCartsPack(cardUpdateObj)
    }
   //have to get actual id! you can see if after create Pack
    const deleteRequest = () => {
        cartsPackAPI.deleteCardsPack(packId)
    }


    return <div className={'allComponents'}>
        <Input/>
        <Button> Click me </Button>
        <Checkbox title={'Checkbox'}/>
        <RadioInput/>
        <RadioInput/>
        <SelectInput/>
        <ProgressBar/>
        <Button onClick={getRequest}>get Pack</Button>
        <Button onClick={createRequest}>create Pack</Button>
        <Button onClick={updateRequest}>update Pack</Button>
        <Button onClick={deleteRequest}>delete Pack</Button>
    </div>
}

export default AllComponents