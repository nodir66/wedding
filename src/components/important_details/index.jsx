import React from 'react';
import styles from './index.module.sass'
import imgform from '../../assets/img/Group92.png'
import { Form } from '../form';

export const ImportantDetails = ({setOpen}) => {
    return (
        <div className={styles.form_block}>
            <div className={styles.container}>
                <div className={styles.form_content}>
                    <div className={styles.left_content}>

                        <h1>Важные детали</h1>
                        <div className={styles.img}>
                            <img src={imgform} alt="" />
                        </div>
                    </div>

                    <div className={styles.right_content}>
                        <Form setOpen ={setOpen}/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

