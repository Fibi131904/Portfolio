import React from 'react';
import style from './Main.module.scss';
 import Particles from "react-tsparticles";


 const particlesOptions = {
  particles: {
      color: {
          value: 'yelloy',
      },
      links: {
          color: '#e4aa48',
          distance: 200,
          enable: true,
          opacity: 0.5,
          width: 1,
      },
      collisions: {
          enable: true,
      },
      move: {
          enable: true,
          random: false,
          speed: 2,
          straight: false,
      },
      number: {
          density: {
              enable: true,
              value_area: 1000,
          },
          value: 150,
      },
      opacity: {
          value: 0.7,
      },
      shape: {
          type: 'circle',
      },
  },
  fullScreen: {
      enable: false
  }
}


export const Main = () => {
  
  return (
        <div className={style.mainBlock}>
        <Particles className={style.particles} params={particlesOptions}/>
           
            <div className={style.container}>
                <div className={style.greeting }>
                    <span> Hi There </span>
                    <span>I am Kseniya <span>Smirnova</span></span>
                    <h1> Frontend Developer.</h1>
                </div>

                <div className={style.photo}>
                    <div className={style.image}>
                    </div>
                </div>
            </div>
        </div >

    );
}