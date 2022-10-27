import React from 'react';
import style from './Skills.module.scss';
import { Skill } from './skill/Skill';
import { Title } from '../common/title/Title';
import { faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { Zoom } from 'react-awesome-reveal';


export const skillData = [
    { id: 1, title: 'React', discription: 'JavaScript-based UI development library.', icon: faReact },
    { id: 2, title: 'Redux', discription: 'JavaScript library for managing and centralizing application state.', icon: faJs },
    { id: 3, title: 'TypeScript', discription: 'A syntactic superset of JavaScript which adds static typing.', icon: faCss3 },
    { id: 4, title: 'JS', discription: 'The Programming Language for the Web that conforms to the ECMAScript specification', icon: faJs },
    { id: 5, title: 'HTML', discription: 'Hypertext Markup Language for describing the contents and appearance of Web pages.', icon: faCss3 },
    { id: 6, title: 'CSS', discription: 'Stylesheet language used to describe the presentation of a document written in HTML.', icon: faCss3 },
    { id: 7, title: 'SASS', discription: 'CSS preprocessor, which adds special features such as variables, nested rules and mixins into regular CSS.', icon: faReact },
    { id: 8, title: 'Jest', discription: 'JavaScript library for creating, running, and structuring tests.', icon: faReact },
    { id: 9, title: 'Rest API', discription: 'Architectural style for an application program interface (API) that uses HTTP requests to access and use data.', icon: faJs },
    { id: 10, title: 'Axios', discription: 'Promise-based library used with Node.js and browser to make asynchronous JavaScript HTTP requests.', icon: faCss3 },
    { id: 11, title: 'Postman', discription: 'API platform for building and using APIs', icon: faJs },
    { id: 12, title: 'Material UI', discription: 'Library that allows import and use different components to create a user interface in React applications.', icon: faCss3 },
    { id: 13, title: 'Storybook', discription: 'Tool for building UI components and pages in isolation.', icon: faCss3 },
    { id: 14, title: 'Git', discription: 'DevOps tool used for source code management.', icon: faReact },
    { id: 15, title: 'Formik', discription: 'Small group of React components and hooks for building forms in React and React Native.', icon: faReact }
]


export const Skills = () => {

    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={style.skillsContainer} >
                <Title text={'Skills'} />
                <div className={style.skills}>
                    {skillData.map(s => <Skill key={s.id} title={s.title} discription={s.discription} icon={s.icon} />)}
                </div>
            </div>
        </div >
    )
}