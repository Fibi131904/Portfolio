import React, { useState } from 'react';
import { Title } from '../common/title/Title';
import style from './Contacts.module.scss';
import { Fade } from 'react-awesome-reveal';
import emailjs from "emailjs-com"




export const Contacts = () => {
    const [modalActive, setModalActive] = useState(false)
   

    const sendEmail = (e: any) => {
        e.preventDefault()
        emailjs.sendForm("service_31zlg1i", "template_kq7q42n", e.target, 'huEV8y9gRa_tJtXUn')
            .then((responce) => {
                if (responce.text === "OK") {
                    setModalActive(true)
                    setTimeout(() => {
                        setModalActive(false);
                    }, 3000);                   
                }
            }, (error) => {
                console.log(error.message)
            })
        e.target.reset()
    }



    return (
        <div id={'contacts'} className={style.contactBlock}>
            <Fade>
                <div className={style.contacts}>
                    <Title text={'Contacts'} />
                        <form onSubmit={sendEmail} id={'contact-form'} className={style.formBlock}>
                        <input required placeholder={"Your name"} className={style.formArea} type={"text"}
                            name={"from_name"} />
                        <input required placeholder={"Your email"} className={style.formArea} type={"text"}
                            name={"user-email"} />
                        <textarea required placeholder={"Your message"} className={style.messageArea}
                            name={"message"} />
                        <button type={'submit'} value={"Send"} className={style.button}>Send</button>
                        {modalActive && <div className={style.sendMessagecontainer}><div className={style.sendMessageInner}>Send message!</div></div>}
                    </form>                   
                </div>
            </Fade>         
        </div >
    );
};


  