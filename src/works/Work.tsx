import React from 'react';
import style from './Work.module.css';

type WorkPropsType = {
    title: string
    discription: string
}

export const Work = (props: WorkPropsType) => {
    return (
        <div className={style.work}>
            <div className={style.buttonBlock}>
                <button onClick={()=>{}} >Смотреть</button>
            </div>
            <h3>{props.title}</h3>
            <span className={style.discription}>{props.discription}</span>

        </div >
    )
}