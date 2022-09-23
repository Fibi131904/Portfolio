
import React from 'react';
import style from'./Form.module.scss';



export const Form = () => {
    return (
        <form className={style.formBlock}>
        <input type='text' placeholder='Name' className={style.formArea}/>
        <input type='text' placeholder='e-mail' className={style.formArea}/>
        <textarea placeholder='message' className={style.messageArea}/>
        </form>
    );
}