import React from 'react';
import style from './Skills.module.scss';
import { Skill } from './skill/Skill';
import { Title } from '../common/title/Title';
import react from './../assets/image/react.webp';
import redux from './../assets/image/redux.webp';
import TypeScript from './../assets/image/TypeScript.webp';
import JS from './../assets/image/JS.webp';
import HTML from './../assets/image/HTML.webp';
import CSS from './../assets/image/CSS.webp';
import SCSS from './../assets/image/SCSS.webp';
import jest from './../assets/image/jest.webp';
import RestAPI from './../assets/image/RestAPI.webp';
import Axios from './../assets/image/Axios.webp';
import MUI from './../assets/image/MUI.webp';
import Storybook from './../assets/image/Storybook.webp';
import Git from './../assets/image/Git.webp';
import Formik from './../assets/image/Formik.webp';




export const skillData = [
    { id: 1, title: 'React', description: 'JavaScript-based UI development library.', backgroundImage: `url(${react})` },
    { id: 2, title: 'Redux', description: 'JavaScript library for managing and centralizing application state.', backgroundImage: `url(${redux})` },
    { id: 3, title: 'TypeScript', description: 'A syntactic superset of JavaScript which adds static typing.', backgroundImage: `url(${TypeScript})` },
    { id: 4, title: 'JS', description: 'The Programming Language for the Web that conforms to the ECMAScript specification', backgroundImage: `url(${JS})` },
    { id: 5, title: 'HTML', description: 'Hypertext Markup Language for describing the contents and appearance of Web pages.', backgroundImage: `url(${HTML})` },
    { id: 6, title: 'CSS', description: 'Stylesheet language used to describe the presentation of a document written in HTML.', backgroundImage: `url(${CSS})` },
    { id: 7, title: 'SASS', description: 'CSS preprocessor, which adds special features such as variables, nested rules and mixins into regular CSS.', backgroundImage: `url(${SCSS})` },
    { id: 8, title: 'Jest', description: 'JavaScript library for creating, running, and structuring tests.', backgroundImage: `url(${jest})` },
    { id: 9, title: 'Rest API', description: 'Architectural style for an application program interface (API) that uses HTTP requests to access and use data.', backgroundImage: `url(${RestAPI})` },
    { id: 10, title: 'Axios', description: 'Promise-based library used with Node.js and browser to make asynchronous JavaScript HTTP requests.', backgroundImage: `url(${Axios})` },
    { id: 11, title: 'MaterialUI', description: 'Library that allows import and use different components to create a user interface in React applications.', backgroundImage: `url(${MUI})` },
    { id: 12, title: 'Storybook', description: 'Tool for building UI components and pages in isolation.', backgroundImage: `url(${Storybook})` },
    { id: 13, title: 'Git', description: 'DevOps tool used for source code management.', backgroundImage: `url(${Git})` },
    { id: 14, title: 'Formik', description: 'Small group of React components and hooks for building forms in React and React Native.', backgroundImage: `url(${Formik})` },
]


export const Skills = () => {

    return (
        <div id='skills' className={style.skillsBlock}>
            <div className={style.skillsContainer} >
                <Title text={'Skills'} />
                <div className={style.skills}>
                    {skillData.map(s => <Skill key={s.id} id={s.id} title={s.title} description={s.description} backgroundImage={s.backgroundImage}/>)}
                </div>
            </div>
        </div >
    )
}