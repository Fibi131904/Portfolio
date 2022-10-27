import React from 'react';
import { Zoom } from 'react-awesome-reveal';

import style from './Title.module.scss';


type TitlePropsType={
    text:string
}


export const Title = (props: TitlePropsType) => {
    return (

        <div className={style.title}>
            <Zoom>
                <h2>{props.text}</h2>
            </Zoom>
        </div>

    )
}
