import React from 'react'
import style from './Button.module.scss'


type ButtonPropsType = {
    type?: 'button' | 'submit' | 'reset' | undefined
    buttonTitle: string
   }

export const Button: React.FC<ButtonPropsType> = ({type, buttonTitle}) => {
    return <button type={type} className={style.button}>{buttonTitle}</button>
}
export default Button