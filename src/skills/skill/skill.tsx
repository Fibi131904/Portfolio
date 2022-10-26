import React from 'react';
import style from './Skill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Fade } from 'react-awesome-reveal';





type SkillPropsType = {
    title: string
    discription: string
    icon: IconProp
}


export const Skill = (props: SkillPropsType) => {
    return (
        <div  className={style.skill} >
            <Fade cascade >
            <div className={style.icon}>  <FontAwesomeIcon icon={props.icon} /> </div>
            <h3>{props.title}</h3>
            <span className={style.discription}>{props.discription}</span>
            </Fade>
        </div >
    )
}