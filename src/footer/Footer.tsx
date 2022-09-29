
import React from 'react';
import style from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faFacebook, faGithub, faVk } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';




export const Footer = () => {
    return (
        <div className={style.footerBlock} >

            <div className={style.container}>
                <h2>Ksenia Smirnova</h2>
                <div className={style.icons}>
                    <div className={style.icon}><FontAwesomeIcon icon={faFacebook}/></div>
                    <div className={style.icon}><FontAwesomeIcon icon={faPhone}/></div>
                    <div className={style.icon}><FontAwesomeIcon icon={faVk}/></div>
                    <div className={style.icon}><FontAwesomeIcon icon={faGithub}/></div>
                </div>
                <span className={style.copyright}> &#169; 2022 beingeorge, All Rights Reserved.</span>
            </div>

        </div >
    )
}