
import React from 'react';
import style from './DistantWork.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Button from '../common/components/button/Button';
import { Title } from '../common/title/Title';


export const DistantWork = () => {
    return (
        <div className={style.distantWorkBlock} >
            <div>
                <Title text={'Ready to work remotely'} />
                <div  className={style.contant}>
                    <Button onClick={() => { }} >Write me</Button>
                </div>
            </div>
        </div >
    )
}