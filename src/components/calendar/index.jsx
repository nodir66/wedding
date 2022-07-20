import React, {useState} from 'react';
import styles from './index.module.sass'
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const Calendar = ({onChange}) => {

    const [value, setValue] = React.useState(null);

    return (
        <div>
            <LocalizationProvider 
                className={styles.calendar}
                dateAdapter={AdapterDateFns}
            >
                <DatePicker
                    className={styles.calendar_item}
                    
                    label="Basic example"
                    value={value}
                    // onChange={(e) => {
                    //     console.log(e)
                    // }}
                    onChange={(newValue) => {
                        setValue(newValue);
                      }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            
        </div>
    );
};

