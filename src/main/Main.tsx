import React from 'react';
import style from './Main.module.scss';


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.greeting }>
                    <span> Hi There </span>
                    <span>I am Kseniya <span>Smirnova</span></span>
                    <h1> Frontend Developer.</h1>
                </div>

                <div className={style.photo}>
                    <div className={style.image}>
                    </div>
                </div>
            </div>
        </div >

    );
}