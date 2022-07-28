import React, { useState} from 'react';
import styles from './index.module.sass'
import events1 from '../../assets/img/events1.png'
import events2 from '../../assets/img/events2.png'
import events3 from '../../assets/img/events3.png'
import $ from 'jquery';


export const Events = ({image, name, definition, active, setResid}) => {

    const left =()=>{
        setResid(1)

    }

    const center =()=>{
        setResid(2)

    }

    const right =()=>{
        setResid(3)

    }

    // console.log(setResid)


    
    return (
        <div className={styles.events}>
            <div className={styles.container}>

                

                <div className={styles.events_content}>

                


                    <div onClick={()=> {
                            window.scrollBy(0, 500)
                            left()
                        }}  
                        className={styles.img_left}>
                        <img src={events1}  alt="" />
                        <h2>Свадьба</h2>
                        <p>Свадебные мероприятия и так далее лорем ипсум</p>
                    </div>
                    

                    <div onClick={()=> {window.scrollBy(0, 500)
                         center() }} className={styles.img_center}>
                        <img src={events2}  alt="" />
                        <h2>Утренний плов</h2>
                        <p>Свадебные мероприятия и так далее лорем ипсум</p>
                    </div>

                    <div onClick={()=> {window.scrollBy(0, 500)
                         right() }} className={styles.img_right}>
                        <img src={events3}  alt="" />
                        <h2>Банкет</h2>
                        <p>Свадебные мероприятия и так далее лорем ипсум</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

