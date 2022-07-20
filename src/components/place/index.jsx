import React, {useRef, useEffect, useState} from 'react';
import axios from 'axios'
import styles from './index.module.sass'
import { PlaceItem } from '../place_item';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import right from '../../assets/img/Arrow 5.png'
import left from '../../assets/img/Arrow 6.png'


export const Place = () => {

    const [data, setData] = useState();


    const swiperRef = useRef(null)

    const handlePrev = () =>{
        swiperRef.current.swiper.slidePrev()
    }

    const handleNext = () =>{
        swiperRef.current.swiper.slideNext()
    }

    // useEffect(() => {
    //     fetch(`http://172.104.143.233:8000/services/restorans/?id=2`)
    //      .then((response) => console.log(response));
    //    }, []);



    const [place, setPlace] = useState([]);
    
    // useEffect(() => {
    //     axios
    //       .get('http://172.104.143.233:8000/services/restorans/?id=1')
    //       .then(function(response) {
    //           console.log(response)
    //         setPlace(response.data)
    //       })
    //       .catch(error => console.log(error));
        
    //     }, []);
    
    return (
        <div className={styles.container}>
                <h1>Места</h1>

            <div className={styles.swiper_container}>
                <Swiper
                    className={styles.swiper}
                    ref={swiperRef}
                    spaceBetween={60}
                    slidesPerView={2}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >

                    {place.map((item)=>{
                        return(
                            <SwiperSlide className={styles.place_slide}>
                                <PlaceItem

                                />
                            </SwiperSlide>
                        )
                    })}

                    <SwiperSlide className={styles.place_slide}>
                        <PlaceItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.place_slide}>
                        <PlaceItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.place_slide}>
                        <PlaceItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.place_slide}>
                        <PlaceItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.place_slide}>
                        <PlaceItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.place_slide}>
                        <PlaceItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.place_slide}>
                        <PlaceItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.place_slide}>
                        <PlaceItem/>
                    </SwiperSlide>

                    
                    <div className={styles.buttonCont}>
                        <button className='' onClick={handlePrev}>
                            <img src={left} alt="" />
                        </button>
                        <button className='' onClick={handleNext}>
                            <img src={right} alt="" />
                        </button>
                    </div>    
                </Swiper>

            
            
            </div>

            
        </div>
    );
};

