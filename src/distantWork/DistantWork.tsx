
import React from 'react';
import style from './DistantWork.module.css';
import styleContainer from '../common/styles/Container.module.css';


export const DistantWork = () => {
    return (
        <div className={style.distantWorkBlock} >

            <div className={`${styleContainer.container} ${style.contant}`}>
                <h2 className={style.title}>Рассматриваю варианты удаленной работы</h2>
                <button onClick={() => { }} >Нанять меня</button>
            </div>

        </div >
    )
}