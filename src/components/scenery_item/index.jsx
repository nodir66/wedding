import React from 'react';
import styles from './index.module.sass'
import decor from '../../assets/img/decor.png'

export const SceneryItem = () => {
    return (
        <div className={styles.table_item}>
            <div className={styles.img}>
                <img src={decor} alt="" />
            </div>

            <div className={styles.text}>
                <div className={styles.left_text}>
                    <h1>Diyor Decor</h1>
                    <p>эвропейский стиль</p>
                </div>

                <div className={styles.right_text}>
                    <h3>кв</h3>
                    <p>4$</p>
                </div>
            </div>
        </div>
    );
};

