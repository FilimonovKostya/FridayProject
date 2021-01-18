import React from 'react';
import style from './Card.module.css'

type CardPropsType = {}

const Card:React.FC<CardPropsType> = (props) => {
    return <div className={style.card}>
        <div className={style.heading} style={{backgroundColor: "#4285f4"}}><h1>Hello</h1></div>
        <div className={style.content}><p>This is a text</p></div>
    </div>

};

export default Card;