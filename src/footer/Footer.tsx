
import React from 'react';
import { Title } from '../common/title/Title';
import style from './Footer.module.scss';





export const Footer = () => {
    return (
        <div className={style.footerBlock} >

            <div className={style.container}>
                <Title text={'Ksenia Smirnova'}/>
                <div className={style.icons}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <span className={style.copyright}> &#169; 2022 beingeorge, All Rights Reserved.</span>
            </div>

        </div >
    )
}