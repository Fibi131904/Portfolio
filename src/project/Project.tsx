import React from 'react';
import { Fade } from 'react-awesome-reveal';
import castom from '../common/components/button/Button.module.scss';
import style from './Project.module.scss';

type ProjectPropsType = {
    title: string
    discription: string
    style: any
}

export const Project = (props: ProjectPropsType) => {

    return (
        <div className={style.project}>
            <Fade cascade >
            <div className={style.projectImg} style={props.style}>
                <div className={style.viewBtn}>
                <a href= ''className={castom.btn}>View code</a>
            </div>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.discription}>{props.discription}</span>
            </div>
            </Fade>
        </div >
    )
}