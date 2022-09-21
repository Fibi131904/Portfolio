
import React from 'react';
import style from './Contacts.module.scss';
import { Form } from './Form';


export const Contacts = () => {
    return (
        <div className={style.contactBlock}>
            <div className={style.contacts}>

                <h2 className={style.title}> Contacts</h2>
                <Form />
                <button>Send</button>

            </div>

        </div>
    );
}