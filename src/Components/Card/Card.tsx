import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CardsPackType, setCardTC} from '../../Redux/reducers/cardsPackReducer';
import {RootStateType} from '../../Redux/store';

import style from './Card.module.css'

type CardPropsType = {}

const Card: React.FC<CardPropsType> = (props) => {
    const cards = useSelector<RootStateType, CardsPackType[]>(state => state.cardsPack.cardPacks)

    const dispatch = useDispatch()

    const onClickHandler = () => {
        dispatch(setCardTC())
    }

    return <div>
        <button onClick={onClickHandler}>Get Data and check console</button>
        {
            cards && cards.map((cardsPack: CardsPackType) => {
                return <div key={cardsPack._id} className={style.card}>
                    <div className={style.heading} style={{backgroundColor: '#4285f4'}}>
                        <h1>{cardsPack.name}</h1>
                    </div>
                    <div className={style.content}>
                        <p>{cardsPack.name}</p>
                    </div>
                </div>
            })
        }
    </div>

};

export default Card;