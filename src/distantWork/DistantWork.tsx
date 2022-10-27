
import React from 'react';
import style from './DistantWork.module.scss';
import button from '../common/components/button/Button.module.scss';
import { Title } from '../common/title/Title';


export const DistantWork = () => {
    return (
        <div id='distantWork' className={style.distantWorkBlock} >

            <div className={style.contant}>
              
                <Title text={'Ready to work remotely'} />
                
                <div className={style.send} >
                <a href={'#contacts'} className={button.btn}>Hire me</a>
                </div>
            </div>
        </div >
    )
}