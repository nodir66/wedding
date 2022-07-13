import React, {useState} from 'react';
import styles from './index.module.sass'
import logo from '../../assets/img/Mask group.png'
import place from '../../assets/img/mesto.png'
import date from '../../assets/img/date.png'
import { useFormik } from 'formik'









export const Form = ({setOpen}) => {




    const noerror = () =>{

        // window.scrollBy(0, 1000);

        // setOpen(true)
        
    }

    
    const handleValidate  = ({name, place, number, date }) => {
        const errors = {}
    
    //    console.log(values)
    
        if(!name){
            errors.nameError = 'Ismingizni kiriting'
            
        }else{
            noerror()
        }
    
    
        if(!place){
            errors.placeError = 'Error'
            
        }else{
            noerror()
        }
    
    
        if(!number){
            errors.numberError = 'Telefon raqamingizni kiriting'
            
        }else{
            noerror()
        }
    
        if(!date){
            errors.dateError = 'Error'
            
        }else{
            noerror()
        }
    
    
    
        return errors
    }



    const formik = useFormik({
        initialValues:{
            name: '',
            number: '',
            date: '',
            place: '',
        },
        validateOnChange: false,
        validate: handleValidate,
        onSubmit: values => {

            console.log('message')

            window.scrollBy(0, 1000);

            setOpen(true)
            
        }    
    })


    return (
        <div className={styles.form}>
            <div className={styles.logo}>
                <p>The Wedding</p>
                <img src={logo} alt="" />
            </div>

            <div className={styles.input}>
                <input className={styles.name} type="text" onChange={formik.handleChange} name="name" value={formik.values.name} placeholder='Имя Фамилия' />
                <p>{formik.errors.nameError}</p>

                <input className={styles.number} type="number" onChange={formik.handleChange} name="number" value={formik.values.number} placeholder='+998' />
                <p>{formik.errors.numberError}</p>

                <div className={styles.date}>
                    <input type="text" onChange={formik.handleChange} name="date" value={formik.values.date} placeholder='Дата мероприятия' />
                    <p>{formik.errors.dateError}</p>

                    <img src={date} alt="" />
                </div>

                <div className={styles.plase}>
                    <input type="text" onChange={formik.handleChange} name="place" value={formik.values.place} placeholder='Место мероприятия' />
                    <p>{formik.errors.placeError}</p>

                    <img src={place} alt="" />
                </div>
                
                <button type='button' onClick = {formik.handleSubmit}>Далее</button>
            </div>

            
        </div>
    );
};

