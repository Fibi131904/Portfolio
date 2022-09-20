import React from 'react';
import { Project } from './Project';
import styleContainer from '../common/styles/Container.module.css';
import style from './Projects.module.css';
import { Title } from '../common/title/Title';





export const Projects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={style.projects} >
                    <Project title={'Social network'} discription={'description of your project. Brief and clea.'} />
                    <Project title={'Todo list'} discription={'description of your project. Brief and clea'} />
                </div>
            </div>
        </div>

    )
}
