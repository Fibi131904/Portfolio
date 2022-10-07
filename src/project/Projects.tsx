import React from 'react';
import { Project } from './Project';
import style from './Projects.module.scss';
import { Title } from '../common/title/Title';
import todoImage from './../assets/image/todo-list.webp'
import socialImage from './../assets/image/social-network.webp'
import counter2 from './../assets/image/counter2.png'





export const Projects = () => {
   const socialNetwork = {
       backgroundImage: `url(${socialImage})`,
   }
   const todoList = {
       backgroundImage: `url(${todoImage})`,
   }
   const counter = {
       backgroundImage: `url(${counter2})`,
   }

    return (
        <div className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                <Title text={'Projects'}/>
                <div className={style.projects} >
                    <Project style={socialNetwork} title={'Social network'} discription={'Technology stack: ReactJS, TypeScript, Redux, RestAPI, Axios, Redux-Thunk, React-Router-Dom, Redux-Form, Formik, Ant Design'} />
                    <Project style={todoList} title={'Todo list'} discription={'Technology stack: ReactJS, TypeScript, Redux Toolkit, RestAPI, Axios, Redux-Thunk, Material UI, Unit testing, Storybook'} />
                    <Project style={counter} title={'Counter with settings in a separate block'} discription={'Technology stack: ReactJS, TypeScript, Redux, Unit testing, CSS'} />
                    <Project style={todoList} title={'Counter with settings in one block'} discription={'Technology stack: ReactJS, TypeScript, Redux, CSS'} />
                </div>
            </div>
        </div>

    )
}
