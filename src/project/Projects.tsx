import React from 'react';
import { Project } from './Project';
import style from './Projects.module.scss';
import { Title } from '../common/title/Title';
import todoImage from './../assets/image/todo-list.webp'
import socialImage from './../assets/image/social-network.webp'
import counterReduxImage from './../assets/image/counter2.webp'
import counterImage from './../assets/image/counter1.webp'






export const Projects = () => {
   
    const projectsData = [
        {
            id: '1',
            title: 'Social network',
            description: 'Technology stack: ReactJS, TypeScript, Redux, RestAPI, Axios, Redux-Thunk, React-Router-Dom, Redux-Form, Formik, Ant Design',
            backgroundImage: `url(${socialImage})`,
            link: 'https://github.com/Fibi131904/Social-Network'
        },
        {
            id: '2',
            title: 'Todo List',
            description: 'Technology stack: ReactJS, TypeScript, Redux Toolkit, RestAPI, Axios, Redux-Thunk, Material UI, Unit testing, Storybook',
            backgroundImage: `url(${todoImage})`,
            link: 'https://github.com/Fibi131904/TodoList'
        },
        {
            id: '3',
            title: 'Counter with settings in a separate block',
            description: 'Technology stack: ReactJS, TypeScript, Redux, MaterialUI, CSS',
            backgroundImage: `url(${counterReduxImage})`,
            link: 'https://github.com/Fibi131904/Counter_Redux'
        },
        {
            id: '4',
            title: 'Counter with settings in a separate block',
            description: 'Technology stack: ReactJS, TypeScript, CSS',
            backgroundImage: `url(${counterImage})`,
            link: 'https://github.com/Fibi131904/Counter'
        },

]
    return (
        <div id= 'projects' className={style.projectsBlock}>
            <div className={style.projectsContainer}>
                
                <Title text={'Projects'} />

                <div className={style.projects} >
                    {projectsData.map(p =>
                        <Project key={p.id}
                            id={p.id}
                            title={p.title}
                            description={p.description}
                            backgroundImage={p.backgroundImage}
                            link={p.link}
                           
                        />)}

                </div>
            </div>
        </div>

    )
}
