import React from "react";
import Input from "./Components/SuperComponents/Input/Input";
import Button from "./Components/SuperComponents/Button/Button";
import Checkbox from "./Components/SuperComponents/CheckBox/Checkbox";
import RadioInput from "./Components/SuperComponents/RadioInput/RadioInput";
import SelectInput from "./Components/SuperComponents/SelectInput/SelectInput";
import ProgressBar from "./Components/SuperComponents/ProgressBar/ProgressBar";
import {cardsPackAPI} from './Api/api-cart';
import SearchForm from './Components/SuperComponents/SearchForm/SearchForm';
import Card from "./Components/Card/Card";

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
        cardsPackAPI.getCardsPack()
    }
   //have to transfer object
    const createRequest = () => {
        cardsPackAPI.createCardsPack(cartObj)
    }

    //have to get actual id! and name if you want...you can see if after create Pack
    const updateRequest = () => {
        cardsPackAPI.updateCardsPack(cardUpdateObj)
    }
   //have to get actual id! you can see if after create Pack
    const deleteRequest = () => {
        cardsPackAPI.deleteCardsPack(packId)
    }


    //this will be thunk, this is test request
    const onSendRequest = (value:string) => {
        cardsPackAPI.getCardsPack(value)
    }


    return <div className={'allComponents'}>
        <SearchForm formName='Search'
                    placeholder='write something'
                    callback={onSendRequest}
                    buttonName='Search'
                    btnDisabled={false}
        />
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
        <Card />
    </div>
}

export default AllComponents