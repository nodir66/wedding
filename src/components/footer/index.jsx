import React from 'react';
import styles from './index.module.sass'
import logoimg from '../../assets/img/Mask group.png'
import telegram from '../../assets/img/Vector.png'
import instagram from '../../assets/img/Vector (1).png'
import facebook from '../../assets/img/Vector (2).png'
export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer_content}>
                    <div className={styles.logo_block}>
                        <div className={styles.logo_site}>
                            <p>The Wedding</p>
                            <img src={logoimg} alt="" />
                        </div>

                        <div className={styles.network_logo}>
                            <img src={telegram} alt="" />
                            <img src={instagram} alt="" />
                            <img src={facebook} alt="" />
                        </div>
                    </div>

                    <div className={styles.text_block}>
                        <div className={styles.text}>
                            <p>+998 90 123 45 67</p>
                            <p>+998 90 123 45 67</p>
                            <p>+998 90 123 45 67</p>
                        </div>

                        <div className={styles.text}>
                            <p>raqamlidunyo@gmail.com</p>
                            <p>raqamlidunyo@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

