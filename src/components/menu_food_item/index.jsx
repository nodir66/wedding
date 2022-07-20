import React from 'react';
import styles from './index.module.sass'
import food from '../../assets/img/food.png'

export const MenuFoodItem = ({name, type, price, image}) => {
    return (
        <div className={styles.menu_item}>
            <div className={styles.img}>
                <img src={image} alt="" />
            </div>

            <div className={styles.text}>
                <div className={styles.left_text}>
                    <h1>{name}</h1>
                    <p>{type}</p>
                </div>

                <div className={styles.right_text}>
                    <h3>{price} сум</h3>
                </div>
            </div>
        </div>
    );
};

