import React from 'react';
import { Fade } from 'react-awesome-reveal';
import castom from '../common/components/button/Button.module.scss';
import style from './Project.module.scss';

type ProjectPropsType = {
    title: string
    description: string
    backgroundImage: string
   link:string
    id:string
  
}

export const Project: React.FC<ProjectPropsType> = ({title, description, backgroundImage, link}) => {
    return (
        <div className={style.project}>
            <Fade cascade >
                <div className={style.projectImg} style={{backgroundImage}}>
                    <div className={style.viewBtn}>
                        <a href={link} className={castom.btn} target={'_blank'} rel='noopener noreferrer'>View code</a>
                    </div>
                </div>
                <div className={style.projectInfo}>
                    <h3 className={style.projectTitle}>{title}</h3>
                    <span className={style.discription}>{description}</span>
                </div>
            </Fade>
        </div >
    )
}