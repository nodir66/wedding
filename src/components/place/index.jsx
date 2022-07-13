import React, {useRef} from 'react';
import styles from './index.module.sass'
import { PlaceItem } from '../place_item';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import right from '../../assets/img/Arrow 5.png'
import left from '../../assets/img/Arrow 6.png'


export const Place = () => {
    const swiperRef = useRef(null)

    const handlePrev = () =>{
        swiperRef.current.swiper.slidePrev()
    }

    const handleNext = () =>{
        swiperRef.current.swiper.slideNext()
    }
    
    return (
        <div className={styles.container}>
                <h1>Места</h1>

            <div className={styles.swiper_container}>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={50}
                    slidesPerView={3}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >

                    <SwiperSlide>
                        <PlaceItem/>
                    </SwiperSlide>

                    <SwiperSlide>
                        {/* <PlaceItem/> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <PlaceItem/>
                    </SwiperSlide>

                    <SwiperSlide>
                        {/* <PlaceItem/> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <PlaceItem/>
                    </SwiperSlide>

                    <SwiperSlide>
                        {/* <PlaceItem/> */}
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

