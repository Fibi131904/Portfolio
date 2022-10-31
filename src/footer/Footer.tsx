
import React from 'react';
import style from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const iconsData=[
    {id:'1', icon: faEnvelope, link : 'malto:fanni@bk.ru' },
    {id:'2', icon: faPhone , link:'tel:+79032963833'},
    {id:'3', icon: faTelegram, link: 'https://t.me/KseniyaFibi' },
    {id:'4', icon: faGithub, link:'https://github.com/Fibi131904'}
]


export const Footer = () => {
    return (
        <div className={style.footerBlock} >

            <div className={style.container}>
                <h2>Ksenia Smirnova</h2>
                <div className={style.icons}>
                    {iconsData.map(i =>
                        <a id={i.id} key={i.id} href={i.link} target={'_blank'} rel="noopener noreferrer">
                            <div className={style.icon}><FontAwesomeIcon icon={i.icon} /></div>
                        </a>)}
                </div>
                <span className={style.copyright}> &#169; 2022 beingeorge, All Rights Reserved.</span>
            </div>

        </div >
    )
}