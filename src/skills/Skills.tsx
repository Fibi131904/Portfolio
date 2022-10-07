import React from 'react';
import style from './Skills.module.scss';
import { Skill } from './skill/Skill';
import { Title } from '../common/title/Title';
import { faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';









export const Skills = () => {
  
    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer} >
                <Title text={'Skills'} />
                <div className={style.skills}>
                    <Skill title={'React'} discription={'JavaScript-based UI development library.'}icon={faReact}/>
                    <Skill title={'Redux'} discription={'JavaScript library for managing and centralizing application state.'}icon={faJs} />
                    <Skill title={'TypeScript'} discription={'A syntactic superset of JavaScript which adds static typing.'} icon={faCss3}/>
                    <Skill title={'JS'} discription={'The Programming Language for the Web that conforms to the ECMAScript specification'}icon={faJs} />
                    <Skill title={'HTML'} discription={'Hypertext Markup Language for describing the contents and appearance of Web pages.'} icon={faCss3}/>
                    <Skill title={'CSS'} discription={'Stylesheet language used to describe the presentation of a document written in HTML.'} icon={faCss3}/>
                    <Skill title={'SASS'} discription={'CSS preprocessor, which adds special features such as variables, nested rules and mixins into regular CSS.'}icon={faReact}/>
                    <Skill title={'Jest'} discription={'JavaScript library for creating, running, and structuring tests.'}icon={faReact}/>
                    <Skill title={'Rest API'} discription={'Architectural style for an application program interface (API) that uses HTTP requests to access and use data.'}icon={faJs} />
                    <Skill title={'Axios'} discription={'Promise-based library used with Node.js and browser to make asynchronous JavaScript HTTP requests.'} icon={faCss3}/>
                    <Skill title={'Postman'} discription={'API platform for building and using APIs'}icon={faJs} />
                    <Skill title={'Material UI'} discription={'Library that allows import and use different components to create a user interface in React applications.'} icon={faCss3}/>
                    <Skill title={'Storybook'} discription={'Tool for building UI components and pages in isolation.'} icon={faCss3}/>
                    <Skill title={'Git'} discription={'DevOps tool used for source code management.'}icon={faReact}/>
                    <Skill title={'Formik'} discription={'Small group of React components and hooks for building forms in React and React Native.'}icon={faReact}/>
               
                </div>
            </div>
        </div >
    )
}