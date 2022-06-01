import React from 'react';
import { Project } from './Project';
import style from './Projects.module.css';




export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <h2 className={style.title}>Мои работы</h2>
                <div className={style.projects} >
                    <Project title={'Название проекта 1'} discription={'Краткое описание. Кратко расскажите суть своего проекта так, чтобы, прочитав вступление, спонсор уже был готов поддержать вашу идею.'} />
                    <Project title={'Название проекта 2'} discription={'Краткое описание. Кратко расскажите суть своего проекта так, чтобы, прочитав вступление, спонсор уже был готов поддержать вашу идею.'} />
                </div>
            </div>
        </div>

    )
}
