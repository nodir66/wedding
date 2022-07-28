import React, {useRef, useState, useEffect} from 'react';
import axios from 'axios'
import styles from './index.module.sass'
import { TableItem } from '../table_item';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import right from '../../assets/img/Arrow 5.png'
import left from '../../assets/img/Arrow 6.png'

export const Table = ({setTablevalue, setTableid}) => {


    const [activeIndex, setActiveIndex] = React.useState(0);

    const handleOnClick = index => {
        setActiveIndex(index); // remove the curly braces
    };





    const swiperRef = useRef(null)

    const handlePrev = () =>{
        swiperRef.current.swiper.slidePrev()
    }

    const handleNext = () =>{
        swiperRef.current.swiper.slideNext()
    }



    const [data, setData] = useState([]);
    useEffect(() => {
        axios
          .get('http://172.104.143.233:8000/services/tables/')
          .then(function(response) {
              console.log(response)
            setData(response.data)
          })
          .catch(error => console.log(error));
        
      }, []);


    


    return (
        <div className={styles.container}>
            <h1>Столы</h1>
            <div className={styles.slider_container}>
            <Swiper
                    
                    

                    ref={swiperRef}
                    spaceBetween={50}
                    slidesPerView={2}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >


                    {data.map((item, index) =>{
                        return(
                            <SwiperSlide onClick={()=>{
                                setTablevalue(item.name)
                                setTableid(item.id)
                                }} 
                                className={styles.swslide}>
                                <TableItem 
                                    name={item.name}
                                    type={item.type}
                                    price={item.price}
                                />
                            </SwiperSlide>
                            

                        )
                    })}

                    


                    {/* <SwiperSlide className={styles.swslide}>
                        <TableItem/>
                    </SwiperSlide>


                    <SwiperSlide className={styles.swslide}>
                        <TableItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swslide}>
                        <TableItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swslide}>
                        <TableItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swslide}>
                        <TableItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swslide}>
                        <TableItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swslide}>
                        <TableItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swslide}>
                        <TableItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swslide}>
                        <TableItem/>
                    </SwiperSlide>

                    <SwiperSlide className={styles.swslide}>
                        <TableItem/>
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

