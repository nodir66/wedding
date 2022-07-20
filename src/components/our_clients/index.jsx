import React from 'react';
import styles from './index.module.sass'
import wedding1 from '../../assets/img/wedding1.png'
import wedding2 from '../../assets/img/wedding2.png'
import wedding3 from '../../assets/img/wedding3.png'
import wedding4 from '../../assets/img/wedding4.png'
import wedding5 from '../../assets/img/wedding5.png'
import wedding6 from '../../assets/img/wedding6.png'


export const OurClients = ({img,index}) => {
    return (
        <div className={styles.ourclients}>
            <div className={styles.container}>
                <div className={styles.ourclients_content}>
                    <div className={styles.title}>
                        <h1>Нашие счастливые клиенты</h1>
                    </div>

                    <div className={styles.content}>
                        <div className={styles.block_left}>
                            <div className={styles.item_top}>
                                <img  src={wedding1} alt="" />
                            </div>

                            <div className={styles.item_bottom}>
                                <img  src={wedding2} alt="" />
                            </div>
                        </div>


                        <div className={styles.block_center}>
                            <div className={styles.item_top}>
                                <img src={wedding3} alt="" />
                            </div>
                            <div className={styles.item_bottom}>
                                <img src={wedding4} alt="" />
                            </div>
                        </div>


                        <div className={styles.block_right}>
                            <div className={styles.item_top}>
                                <img src={wedding5} alt="" />
                            </div>
                            <div className={styles.item_bottom}>
                                <img src={wedding6} alt="" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

