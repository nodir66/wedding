import React, {useRef} from 'react';
import { SceneryItem } from '../scenery_item';
import styles from './index.module.sass'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import right from '../../assets/img/Arrow 5.png'
import left from '../../assets/img/Arrow 6.png'

export const Scenery = () => {

    const swiperRef = useRef(null)

    const handlePrev = () =>{
        swiperRef.current.swiper.slidePrev()
    }

    const handleNext = () =>{
        swiperRef.current.swiper.slideNext()
    }

    return (
        <div className={styles.container}>
            <h1>Декорации</h1>
            <div className={styles.slider_container}>
            <Swiper
                    ref={swiperRef}
                    spaceBetween={50}
                    slidesPerView={5}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >

                    <SwiperSlide>
                        <SceneryItem/>
                    </SwiperSlide>


                    <SwiperSlide>
                        {/* <SceneryItem/> */}
                    </SwiperSlide>


                    <SwiperSlide>
                        <SceneryItem/>

                    </SwiperSlide>

                    <SwiperSlide>
                        {/* <SceneryItem/> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <SceneryItem/>
                    </SwiperSlide>

                    <SwiperSlide>
                        {/* <SceneryItem/> */}
                    </SwiperSlide>

                    <SwiperSlide>
                        <SceneryItem/>

                    </SwiperSlide>

                    <SwiperSlide>
                        {/* <SceneryItem/> */}
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

