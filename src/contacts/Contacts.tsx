
import React from 'react';


import { Title } from '../common/title/Title';
import style from './Contacts.module.scss';



export const Contacts = () => {
    return (
        <div className={style.contactBlock}>
            <div className={style.contacts}>
                <Title text={'Contacts'} />
                <form className={style.formBlock}>
                    <input type='text' placeholder='Name' className={style.formArea} />
                    <input type='text' placeholder='e-mail' className={style.formArea} />
                    <textarea placeholder='message' className={style.messageArea} />
                    <button type='submit'>Send</button>
                </form>


            </div>

        </div>
    );
}