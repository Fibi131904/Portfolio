import React from 'react';
import style from './Project.module.scss';

type ProjectPropsType = {
    title: string
    discription: string
    style: any
}

export const Project = (props: ProjectPropsType) => {

    return (
        <div className={style.project}>
            <div className={style.projectImg} style={props.style}>
                <a href='' className={style.viewBtn}>view</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle} >{props.title}</h3>
                <span className={style.discription}>{props.discription}</span>
            </div>
        </div >
    )
}