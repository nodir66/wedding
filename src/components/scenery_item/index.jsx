import React from 'react';
import styles from './index.module.sass'
import decor from '../../assets/img/decor.png'

export const SceneryItem = ({name, type, price, image, description}) => {
    return (
        <div className={styles.table_item}>
            <div className={styles.img}>
                <img src={image} alt="" />
            </div>

            <div className={styles.text}>
                <div className={styles.left_text}>
                    <h1>{name}</h1>
                    <p>{type}</p>
                </div>

                <div className={styles.right_text}>
                    <h3>кв</h3>
                    <p>{price}$</p>
                </div>
            </div>
        </div>
    );
};

