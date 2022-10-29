import React from 'react';
import style from './Skill.module.scss';
import { Fade } from 'react-awesome-reveal';





type SkillPropsType = {
    id: number
    title: string
    description: string
    backgroundImage: string
}


export const Skill: React.FC<SkillPropsType> = ({title, description, backgroundImage}) => {
    return (
        <div  className={style.skill} >
            <Fade cascade >
            <div className={style.icon} style={{backgroundImage}}></div>
            <h3>{title}</h3>
            <span className={style.discription}>{description}</span>
            </Fade>
        </div >
    )
}