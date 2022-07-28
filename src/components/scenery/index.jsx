import React, {useRef, useState, useEffect} from 'react';
import axios from 'axios'
import { SceneryItem } from '../scenery_item';
import styles from './index.module.sass'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import right from '../../assets/img/Arrow 5.png'
import left from '../../assets/img/Arrow 6.png'

export const Scenery = ({setDecorvalue, setDecorid}) => {




    const swiperRef = useRef(null)

    const handlePrev = () =>{
        swiperRef.current.swiper.slidePrev()
    }

    const handleNext = () =>{
        swiperRef.current.swiper.slideNext()
    }

    const [decor, setDecor] = useState([]);

    useEffect(() => {
        axios
          .get('http://172.104.143.233:8000/services/services/')
          .then(function(response) {
              console.log(response)
              setDecor(response.data)
          })
          .catch(error => console.log(error));
        
      }, []);

    return (
        <div className={styles.container}>
            <h1>Декорации</h1>
            <div className={styles.slider_container}>
            <Swiper
                    ref={swiperRef}
                    spaceBetween={50}
                    slidesPerView={3}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >

                    {decor.map((item)=>{
                        return(
                            <SwiperSlide onClick={()=>{setDecorvalue(item.name)
                                setDecorid(item.id)}}
                                className={styles.scslide}>
                                <SceneryItem
                                    name={item.name}
                                    type={item.type}
                                    price={item.price}
                                    image={item.image}
                                    description={item.description}
                                />
                            </SwiperSlide>
                        )
                    })}


                    {/* <SwiperSlide className={styles.scslide}>
                        <SceneryItem/>
                    </SwiperSlide>


                    <SwiperSlide className={styles.scslide}>
                        <SceneryItem/>

                    </SwiperSlide>

                    <SwiperSlide className={styles.scslide}>
                        <SceneryItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.scslide}>
                        <SceneryItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.scslide}> 
                        <SceneryItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.scslide}>
                        <SceneryItem/>

                    </SwiperSlide>

                    <SwiperSlide className={styles.scslide}>
                        <SceneryItem/>
                    </SwiperSlide> */}

                    
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

