import React from 'react';
import styles from './index.module.sass'
import place1 from '../../assets/img/place1.png'
import place2 from '../../assets/img/place2.png'
import place3 from '../../assets/img/place3.png'



export const PlaceItem = () => {
    return (
        <div className={styles.place_item}>
            <div className={styles.left_content}>

                <img className={styles.img_top} src={place1} alt="" />
                <img className={styles.img_bottom} src={place2} alt="" />
                <img className={styles.img_bottom} src={place3} alt="" />

            </div>

            <div className={styles.right_content}>

                <div className={styles.name}>
                    <h1>YAKKASAROY</h1>
                    <p>wedding restaurant</p>
                </div>

                <div className={styles.together}>
                    <h1>Вместимость:</h1>
                    <p>c 50 чел до 200 чел</p>
                </div>

                <div className={styles.info}>
                    <h1>Возможности:</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis in sit amet</p>

                </div>

                <div className={styles.price}>
                    <h1>Цена</h1>
                    <p>50.000 сум</p>
                </div>

                <div className={styles.lokation}>
                    <h1>Локация:</h1>
                    <p>Lorem ipsum dolor sit amet,</p>
                </div>

                <button type='button'>Подробнее</button>
            </div>
        </div>
    );
};

