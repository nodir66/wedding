import React, { useState } from 'react';
import styles from './index.module.sass'
import axios from 'axios'
import logo from '../../assets/img/Mask group.png'
import place from '../../assets/img/mesto.png'
import date from '../../assets/img/date.png'
import { useFormik } from 'formik'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputMask from 'react-input-mask';
// import { Calendar } from '../calendar';

// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';









export const Form = ({ setOpen, tokenData }) => {

    // const [value, setValue] = React.useState(null);


    // const [age, setAge] = React.useState('');
    // const [open, setOpen] = React.useState(false);

    // const handleChange = (event) => {
    //     setAge(event.target.value);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // const handleOpen = () => {
    //     setOpen(true);
    // };





    const noerror = () => {

        // window.scrollBy(0, 1000);

        // setOpen(true)

    }


    const handleValidate = ({ name, place, number, date, password }) => {
        const errors = {}

        //    console.log(values)

        if (!name) {
            errors.nameError = 'Ismingizni kiriting'

        } else {
            noerror()
        }


        if (!place) {
            errors.placeError = 'Error'

        } else {
            noerror()
        }


        if (!number) {
            errors.numberError = 'Telefon raqamingizni kiriting'

        } else {
            noerror()
        }

        // if (!password) {
        //     errors.passwordError = 'Error'

        // } else {
        //     noerror()
        // }

        if (!date) {
            errors.dateError = 'Error'

        } else {
            noerror()
        }




        return errors
    }




    


    // FORMIK VALID
    const formik = useFormik({
        initialValues: {
            name: '',
            number: '',
            date: '',
            // password: '',
            place: '',
        },
        validateOnChange: false,
        validate: handleValidate,
        onSubmit: async values => {
            let myDate = (values.date.getUTCFullYear()) + "-" + (values.date.getMonth() + 1)+ "-" + (values.date.getUTCDate());
            // date format for push request '2022-02-15'
            console.log(myDate)
            const postData =  {
                "username": values.name,
                "number": values.number,
                // "event_date": values.date,
                "event_date": myDate,
                "city": values.place,
            }
            try {
                await axios.post("http://172.104.143.233:8000/accounts/register/", postData)
                setOpen(true)
                alert('You have success registrated')
                window.scrollBy(0, 1000);
                hanldeGetToken()

            } catch (error) {
                console.log('error', error)
                if (error.response.status === 400) {
                    if (error.response.data.number) {
                        alert(`bad request ${error.response.data.number[0]}`)
                    }
                }  else if (error.response.status === 500) {
                    alert('server is not working')
                }
            }



        }
    })


    const hanldeGetToken = async () => {
        const postData = {
            number: formik.values.number,
            password: 'jobir123'
        }
        try {
            const returnedData = await axios.post("http://172.104.143.233:8000/accounts/api/token/", postData)
            console.log('returnedData',returnedData)
            alert('You have success registrated')
            localStorage.setItem('token', JSON.stringify(returnedData.data));
            
        } catch (error) {
            console.log('error', error)
            if (error.response.status === 400) {
                alert(`bad request ${JSON.stringify(error.response.data)}`)
            }  else if (error.response.status === 500) {
                alert('server is not working')
            }
        }
    }




    

    


    return (
        <div className={styles.form}>
            <div className={styles.logo}>
                <p>The Wedding</p>
                <img src={logo} alt="" />
            </div>

            <div className={styles.input}>
                <input id='name' className={styles.name} type="text" onChange={formik.handleChange} name="name" value={formik.values.name} placeholder='Имя Фамилия' />
                <p>{formik.errors.nameError}</p>

                <input id='number' className={styles.number} type="number" onChange={formik.handleChange} name="number" value={formik.values.number} placeholder='(99)123-45-67' />
                <p>{formik.errors.numberError}</p>

                {/* <input id='password' className={styles.number} type="password" onChange={formik.handleChange} name="password" value={formik.values.password} placeholder='Пароль' />
                <p>{formik.errors.passwordError}</p> */}



                {/* <div className={styles.date}>
                    <input type="text" onChange={(e) => {
                        console.log(e)
                        formik.handleChange(e)
                    }} name="date" value={formik.values.date} placeholder='Дата мероприятия' />
                    <p>{formik.errors.dateError}</p>

                    <img src={date} alt="" />
                </div> */}

                {/* <input type="date" name='date' value={formik.values.date}
                        id='date'
                        format="yyyy/mm/dd" 
                        onChange={value => {
                            console.log(value)
                            formik.handleChange({
                                target:
                                {
                                    value: value,
                                    name: 'date'
                                }
                            })
                        }}
                    /> */}
                                            
                <LocalizationProvider
                    className={styles.calendar}
                    dateAdapter={AdapterDateFns}

                >
                    
                    <DatePicker
                        id='date'
                        className={styles.calendar_item}
                        name='date'
                        label="Дата мероприятия"
                        value={formik.values.date}
                        inputFormat="yyyy/MM/dd"
                        // valueFormat="yyyy/mm/dd"

                        onChange={value => {
                            console.log(value)
                            formik.handleChange({
                                target:
                                {
                                    value: value,
                                    name: 'date'
                                }
                            })
                        }
                        }
                        // onChange={(newValue) => {
                        //     setValue(newValue);
                        //     // formik.handleChange()
                        // }}
                        renderInput={(params) => <TextField {...params}

                        />}
                    />
                </LocalizationProvider>

                <p>{formik.errors.dateError}</p>

                <div className={styles.plasee}>
                    <input id='place' type="text" onChange={formik.handleChange} name="place" value={formik.values.place} placeholder='Место мероприятия' />
                    <p>{formik.errors.placeError}</p>

                    <img src={place} alt="" />
                </div>


                {/* <div className={styles.plase}>
                    <select name="place" id="" onChange={formik.handleChange} value={formik.values.place} >
                        <option value={formik.values.place} >Toshkent</option >
                        <option value={formik.values.place}>Andijon</option>
                        <option value={formik.values.place }>Samarqand</option>
                    </select>
                    <p>{formik.errors.placeError}</p>

                    <img src={place} alt="" />
                </div> */}

                <button className={styles.btn} type='button' onClick={formik.handleSubmit}>Далее</button>
                {/* <button className={styles.btn} type='button' onClick={hanldeGetToken}>get token</button> */}
            </div>




        </div>
    );
};

