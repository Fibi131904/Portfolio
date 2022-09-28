import React from 'react';
import style from './Skill.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 





type SkillPropsType = {
    title: string
    discription: string
 icon: any
}


export const Skill = (props: SkillPropsType) => {
    return (
        <div className={style.skill} >
            <div className={style.icon}>  <FontAwesomeIcon icon={props.icon} /> </div>
          
            <h3>{props.title}</h3>
            <span className={style.discription}>{props.discription}</span>
        </div >
    )
}