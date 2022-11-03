import React, { useState } from 'react';
import style from './BurgerNav.module.scss';
import { Link } from 'react-scroll'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const BurgerNav = () => {

  let [menyIsOpen, SetMenyIsOpen] = useState(false)

  let onBurgerBtnHandler = () => {
    SetMenyIsOpen(current => !current)
     }


  return (
    <div className={style.burgerNav}>
      <div className={menyIsOpen ? `${style.burgerNavItems} ${style.show}` : style.burgerNavItems}>
        <Link
          activeClass={style.active}
          to="main"
          spy={true}
          smooth={true}
          offset={1}
          duration={500}
        >Home</Link>
        <Link
          activeClass={style.active}
          to="skills"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Skills</Link>
        <Link
          activeClass={style.active}
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Projects</Link>
        <Link
          activeClass={style.active}
          to="contacts"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >Contacts</Link>
      </div >
      <div className={style.burgerBtn}
        onClick={onBurgerBtnHandler}><FontAwesomeIcon icon={faBars}/></div>
    </div>
  );
}



