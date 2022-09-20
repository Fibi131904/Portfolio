import React from 'react';
import style from './Project.module.css';

type ProjectPropsType = {
    title: string
    discription: string
}

export const Project = (props: ProjectPropsType) => {
    return (
        <div className={style.project}>
            <div className={style.projectImg}>
                <a href='' className={style.viewBtn}>view</a>
            </div>
            <div className={style.projectTitle}>
                <h3 >{props.title}</h3>
            </div>
            <span className={style.discription}>{props.discription}</span>

        </div >
    )
}