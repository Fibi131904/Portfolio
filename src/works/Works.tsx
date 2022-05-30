import React from 'react';
import { Work } from './Work';
import style from './Works.module.css';
import styleContainer from '../common/styles/Container.module.css';








export const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>

                <h2 className={style.title}>Мои работы</h2>
                <div className={style.works} >
                    <Work title={'Название проекта 1'} discription={'Краткое описание'} />
                    <Work title={'Название проекта 2'} discription={'Краткое описание'} />
                </div>
            </div>
        </div>

    )
}
