
import React from 'react';
import style from './Footer.module.scss';





export const Footer = () => {
    return (
        <div className={style.footerBlock} >

            <div className={style.container}>
                <h3 className={style.title}>Ksenia Smirnova</h3>
                <div className={style.icons}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <div className={style.copyright}> &#169; 2022 beingeorge, All Rights Reserved.</div>
            </div>

        </div >
    )
}