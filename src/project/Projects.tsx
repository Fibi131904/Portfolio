import React from 'react';
import { Project } from './Project';
import style from './Projects.module.scss';
import { Title } from '../common/title/Title';
import todoImage from './../assets/image/todo-list.webp'
import socialImage from './../assets/image/social-network.webp'
import counterRedux from './../assets/image/counter2.webp'
import counter from './../assets/image/counter1.webp'






export const Projects = () => {
   const socialNetwork = {
       backgroundImage: `url(${socialImage})`,
   }
   const todoList = {
       backgroundImage: `url(${todoImage})`,
   }
   const counterImage1 = {
       backgroundImage: `url(${counterRedux})`,
   }
   const counterImage2 = {
       backgroundImage: `url(${counter})`,
   }

    return (
        <div id= 'projects' className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                
                     <Title text={'Projects'} />
                
                <div className={style.projects} >
                    <Project style={socialNetwork} title={'Social network'} discription={'Technology stack: ReactJS, TypeScript, Redux, RestAPI, Axios, Redux-Thunk, React-Router-Dom, Redux-Form, Formik, Ant Design'} />
                    <Project style={todoList} title={'Todo list'} discription={'Technology stack: ReactJS, TypeScript, Redux Toolkit, RestAPI, Axios, Redux-Thunk, Material UI, Unit testing, Storybook'} />
                    <Project style={counterImage1} title={'Counter with settings in a separate block'} discription={'Technology stack: ReactJS, TypeScript, Redux, MaterialUI, CSS'} />
                    <Project style={counterImage2} title={'Counter with settings in one block'} discription={'Technology stack: ReactJS, TypeScript, CSS'} />
                </div>
            </div>
        </div>

    )
}
