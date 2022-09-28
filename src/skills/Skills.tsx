import React from 'react';
import style from './Skills.module.scss';
import { Skill } from './skill/Skill';
import { Title } from '../common/title/Title';
import { faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';








export const Skills = () => {
  
    return (
        <div className={style.skillsBlock}>
            <div className={style.skillsContainer} >
                <Title text={'Skills'} />
                <div className={style.skills}>
                    <Skill title={'JS'} discription={'HTML5, CSS (SASS, SCSS, LESS) + responsive, JavaScript (ES6+), React.js + Redux, AntD, JQuery, Bootstrap, NPM, Gulp, Webpack, GitLab, GitHub'}icon={faJs} />
                    <Skill title={'CSS'} discription={'HTML, CSS + SCSS, Js + Reactjs + Redux, REST API, Git + GitHub, Typescript'} icon={faCss3}/>
                    <Skill title={'React'} discription={'HTML, CSS/SASS/PostCSS, БЭМ. Frontend: React/Redux (3 года), Vue'}icon={faReact}/>
                </div>
            </div>
        </div >
    )
}