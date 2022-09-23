
import React from 'react';


import { Title } from '../common/title/Title';
import style from './Contacts.module.scss';
import { Form } from './Form';


export const Contacts = () => {
    return (
        <div className={style.contactBlock}>
            <div >
                <Title text={'Contacts'} />
                <div className={style.contacts}>
                    <Form />
                    <button type='submit'>Send</button>
                </div>
            </div>

        </div>
    );
}