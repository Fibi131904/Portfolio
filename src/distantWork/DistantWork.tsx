
import React from 'react';
import style from './DistantWork.module.scss';
import styleContainer from '../common/styles/Container.module.css';


export const DistantWork = () => {
    return (
        <div className={style.distantWorkBlock} >

            <div className={`${styleContainer.container} ${style.contant}`}>
                <h2 className={style.title}>Ready to work remotely</h2>
                <button onClick={() => { }} >Write me</button>
            </div>

        </div >
    )
}