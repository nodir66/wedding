import React, {useState} from 'react';
import {useEffect} from 'react'
import axios from 'axios'
import logo from '../../assets/img/Mask group.png'
import styles from './index.module.sass'
import bgimg from '../../assets/img/Rectangle 187.png'
import wedimg from '../../assets/img/img2ta.png'
import bgimg2 from '../../assets/img/Group 59.png'
import bgimg3 from '../../assets/img/Rectangle 188.png'
import { Link } from "react-router-dom";
import { MenuModal } from '../menu_modal';



export const Header = ({title, description, image}) => {
    // const [data, setData] = useState([]);
    // const [error, setError] = useState("");
    // const [loaded, setLoaded] = useState(false);


    
    

    
    
    return (
        <div className={styles.header}>
            <img className={styles.bgimg} src={bgimg} alt="" />
            <img className={styles.bgimg2} src={bgimg2} alt="" />

            <div className={styles.container}>
                <div className={styles.header_content}>
                    <div className={styles.logo}>
                        <p>{title}</p>
                        <img className={styles.logo_img} src={logo} alt="" />
                    </div>

                    <div className={styles.bars_cont}>
                        <MenuModal/>
                    </div>


                    <div className={styles.menu}>
                        <ul>
                            <li onClick={()=> {window.scrollBy(0, 10)}}>Главная страница</li>
                            <li onClick={()=> {window.scrollBy(0, 900)}}>Галерея</li>
                            <li onClick={()=> {window.scrollBy(0, 6000)}}>Контакты</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.header_info}>
                    <div className={styles.left_content}>
                        <h1>{description} 
                            
                        </h1>
                        
                        <button onClick={()=> {window.scrollBy(0, 1700)}}>Узнать больше</button>

                        <img src={bgimg3} alt="" />

                    </div>

                    <div className={styles.right_content}>
                        <img src={wedimg} alt="" />
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

