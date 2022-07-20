import React, {useRef,useState, useEffect   } from 'react';
import axios from 'axios'
import styles from './index.module.sass'
import { MenuFoodItem } from '../menu_food_item';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import right from '../../assets/img/Arrow 5.png'
import left from '../../assets/img/Arrow 6.png'

export const MenuFood = () => {

    const swiperRef = useRef(null)

    const handlePrev = () =>{
        swiperRef.current.swiper.slidePrev()
    }

    const handleNext = () =>{
        swiperRef.current.swiper.slideNext()
    }


    const [food, setFood] = useState([]);

    useEffect(() => {
        axios
          .get('http://172.104.143.233:8000/services/menus/?id=1')
          .then(function(response) {
              console.log(response)
            setFood(response.data)
          })
          .catch(error => console.log(error));
        
        }, []);


    return (
        <div className={styles.container}>
            <h1>Меню</h1>
            <div className={styles.slider_container}>
            <Swiper
                    ref={swiperRef}
                    spaceBetween={50}
                    slidesPerView={3}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >

                    {food.map((item)=>{
                        return(
                            <SwiperSlide className={styles.food_slide}>
                                <MenuFoodItem
                                    name={item.name}
                                    type={item.type}
                                    price={item.price}
                                    image={item.image}
                                />
                                <MenuFoodItem
                                    name={item.name}
                                    type={item.type}
                                    price={item.price}
                                    image={item.image}
                                />
                            </SwiperSlide>
                        )
                    })}


                    {/* <SwiperSlide className={styles.food_slide}>
                        <MenuFoodItem/>
                        <MenuFoodItem/>

                    </SwiperSlide>


                    <SwiperSlide className={styles.food_slide}>
                        <MenuFoodItem/>
                        <MenuFoodItem/>

                    </SwiperSlide>

                    <SwiperSlide className={styles.food_slide}>
                        <MenuFoodItem/>
                        <MenuFoodItem/>

                    </SwiperSlide>

                    <SwiperSlide className={styles.food_slide}>
                        <MenuFoodItem/>
                        <MenuFoodItem/>

                    </SwiperSlide>

                    <SwiperSlide className={styles.food_slide}>
                        <MenuFoodItem/>
                        <MenuFoodItem/>

                    </SwiperSlide>

                    <SwiperSlide className={styles.food_slide}>
                        <MenuFoodItem/>
                        <MenuFoodItem/>

                    </SwiperSlide>

                    <SwiperSlide className={styles.food_slide}>
                        <MenuFoodItem/>
                        <MenuFoodItem/>

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

