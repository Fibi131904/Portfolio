import React from 'react';
import style from './Main.module.scss';
import Particles from "react-tsparticles";
import { Fade } from "react-awesome-reveal";
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt'






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
              value_area: 1500,
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
      enable: false,

  }
}


export const Main = () => {

    return (
        <div id='main' className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOptions} />
            <div className={style.container}>
                <Fade direction="left">
                    <div className={style.greeting}>
                        <span> Hi There </span>
                        <span>I am Kseniya <span>Smirnova</span></span>
                        <ReactTypingEffect
                            text={["Frontend Developer."]}
                        />
                    </div>
                </Fade>
                <Fade direction="right">
                    <Tilt className="Tilt" >
                    <div className={style.photo}>
                        <div className={style.image}></div>
                    </div>
                    </Tilt>
                    
                </Fade>
            </div>
        </div >

    );
}