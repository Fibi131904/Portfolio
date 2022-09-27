
import React from 'react';
import style from './Footer.module.scss';





export const Footer = () => {
    return (
        <div className={style.footerBlock} >

            <div className={style.container}>
                <h2>Ksenia Smirnova</h2>
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