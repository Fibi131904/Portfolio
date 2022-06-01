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
                <a href='' className={style.project_button}>Смотреть</a>
            </div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.discription}>{props.discription}</span>

        </div >
    )
}