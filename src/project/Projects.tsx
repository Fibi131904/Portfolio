import React from 'react';
import { Project } from './Project';
import style from './Projects.module.scss';
import { Title } from '../common/title/Title';
import todoImage from './../assets/image/todo-list.webp'
import socialImage from './../assets/image/social-network.webp'





export const Projects = () => {
   const socialNetwork = {
       backgroundImage: `url(${socialImage})`,
   }
   const todoList = {
       backgroundImage: `url(${todoImage})`,
   }

    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title text={'Projects'}/>
                <div className={style.projects} >
                    <Project style={socialNetwork} title={'Social network'} discription={'description of your project. Brief and clea.'} />
                    <Project style={todoList} title={'Todo list'} discription={'description of your project. Brief and clea'} />
                </div>
            </div>
        </div>

    )
}
