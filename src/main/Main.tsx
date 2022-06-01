
import React from 'react';
import style from'./Main.module.css';
import styleContainer from '../common/styles/Container.module.css';


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span> Привет, Меня зовут </span>
                    <h1> Ксения</h1>
                    <p> Я фронтенд разработчик</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    );
}