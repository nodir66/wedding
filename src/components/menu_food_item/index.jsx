import React from 'react';
import styles from './index.module.sass'
import food from '../../assets/img/food.png'

export const MenuFoodItem = () => {
    return (
        <div className={styles.menu_item}>
            <div className={styles.img}>
                <img src={food} alt="" />
            </div>

            <div className={styles.text}>
                <div className={styles.left_text}>
                    <h1>Лосось</h1>
                    <p>осетинский</p>
                </div>

                <div className={styles.right_text}>
                    <h3>45.000 сум</h3>
                </div>
            </div>
        </div>
    );
};

