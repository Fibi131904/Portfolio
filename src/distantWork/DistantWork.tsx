
import React from 'react';
import style from './DistantWork.module.scss';
import Button from '../common/components/button/Button';
import { Title } from '../common/title/Title';


export const DistantWork = () => {
    return (
        <div className={style.distantWorkBlock} >
            <div className={style.contacts}>
                <Title text={'Ready to work remotely'} />
                <div className={style.contant}>
                    <Button text={'Write me'} />
                </div>
            </div>
        </div >
    )
}