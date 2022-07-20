import React from 'react';
import styles from './index.module.sass'
import table from '../../assets/img/table.png'


export const TableItem = ({type, price, name}) => {
    return (
        <div className={styles.table_item}>
            <div className={styles.img}>
                <img src={table} alt="" />
            </div>

            <div className={styles.text}>
                <div className={styles.left_text}>
                    <h1>{name}</h1>
                    <p>{type}</p>
                </div>

                <div className={styles.right_text}>
                    <h3>кв</h3>
                    <p>{price} сум</p>
                </div>
            </div>
        </div>
    );
};

