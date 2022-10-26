import React from 'react';
import { useFormik } from 'formik';
import { Title } from '../common/title/Title';
import style from './Contacts.module.scss';
import { Fade } from 'react-awesome-reveal';



type FormikErrorType = {
    name?: string
    email?: string
    message?: string
}


export const Contacts = () => {
    const formik= useFormik ({
        initialValues: {
            name: '',
            email: '',
            message: ''
          },
            validate: (values) => {
                const errors: FormikErrorType = {};
                if (!values.name) {
                    errors.name = 'Name is required';
                } else if (!values.email) {
                    errors.email = 'E-mail is required';
                } if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {// проверка email
                    errors.email = 'Invalid email address';
                } else if (!values.message) {
                    errors.message = 'Message is required'
                }
                return errors;
        },
        
          onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            formik.resetForm();
          },
        })
    return (
        <div id = 'contacts' className={style.contactBlock}>
            <Fade >
            <div className={style.contacts}>
                <Title text={'Contacts'} />
              
                <form className={style.formBlock} onSubmit={formik.handleSubmit}>
                    <input type='text' placeholder='name' className={style.formArea} name='name' onChange={formik.handleChange} value={formik.values.name}/>
                    {formik.touched.name && formik.errors.name ? <div style={{ color: 'red' }}>{formik.errors.name}</div> : null} 
                    <input type='text' placeholder='e-mail' className={style.formArea} name='email' onChange={formik.handleChange} value={formik.values.email}/>
                    {formik.touched.email && formik.errors.email ? <div style={{ color: 'red' }}>{formik.errors.email}</div> : null}
                    <textarea placeholder='message' className={style.messageArea}  name='message' onChange={formik.handleChange} value={formik.values.message} />
                    {formik.touched.message && formik.errors.message ? <div style={{ color: 'red' }}>{formik.errors.message}</div> : null}
                    <button type='submit'>Send</button>
                </form>
              
            </div>
            </Fade>
        </div>
    );
}