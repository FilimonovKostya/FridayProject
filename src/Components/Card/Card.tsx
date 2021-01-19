import React, {useEffect} from 'react';
import style from './Card.module.css'
import {useDispatch, useSelector} from "react-redux";
import {cardAPI, CardsResponseType, setCardTC} from "../../Redux/reducers/cardReducer";
import {RootStateType} from "../../Redux/store";

type CardPropsType = {}

const Card: React.FC<CardPropsType> = (props) => {
    const cards = useSelector<RootStateType, CardsResponseType[]>(state => state.card.cardPacks)

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(setCardTC())
    }

    return <div>
        <button onClick={onClickHandler}>Get Data and check console</button>
        {
            cards.map(el => {
                return <div className={style.card}>
                    <div className={style.heading} style={{backgroundColor: "#4285f4"}}><h1>{el.user_name}</h1></div>
                    <div className={style.content}><p>{el.name}</p></div>

                </div>
            })
        }
    </div>

};

export default Card;