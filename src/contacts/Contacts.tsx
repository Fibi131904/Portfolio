
import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';
import { Form } from './Form';


export const Contacts = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contacts}`}>

                <h2 className={style.title}> Контакты</h2>
                <Form />
                <button>Отправить</button>

            </div>

        </div>
    );
}