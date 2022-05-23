import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';






export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My skills</h2>
                <div className={style.skills}>
                    {/* <Skill title={'JS'} discription={'HTML5, CSS (SASS, SCSS, LESS) + responsive, JavaScript (ES6+), React.js + Redux, AntD, JQuery, Bootstrap, NPM, Gulp, Webpack, GitLab, GitHub'}/>
                    <Skill title={'CSS'} discription={'HTML, CSS + SCSS, Js + Reactjs + Redux, REST API, Git + GitHub, Typescript. Мои Проекты'} />
                    <Skill title={'React'} discription={'Вёрстка: HTML, CSS/SASS/PostCSS, БЭМ. Frontend: React/Redux (3 года), Vue'} /> */}
             
                </div>
            </div>
        </div >
    )
}