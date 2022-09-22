
import React from 'react';
import style from './DistantWork.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Button from '../common/components/button/Button';
import { Title } from '../common/title/Title';


export const DistantWork = () => {
    return (
        <div className={style.distantWorkBlock} >

            <div className={style.contant}>
                <Title text={'Ready to work remotely'} />

            </div>
            <Button className={style.distantBtn} onClick={() => { }} >Write me</Button>

        </div >
    )
}