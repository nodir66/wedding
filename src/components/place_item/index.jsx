import React from 'react';
import styles from './index.module.sass'
import place1 from '../../assets/img/place1.png'
import place2 from '../../assets/img/place2.png'
import place3 from '../../assets/img/place3.png'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 400,
    bgcolor: 'white',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const PlaceItem = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <div className={styles.place_item}>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    <h1>YAKKASAROY</h1>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <h2>Вместимость:</h2> 
                    <br />
                    <p>c 50 чел до 200 чел</p>
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <h2>Возможности::</h2> 
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis in sit amet</p>
                </Typography>
                </Box>
            </Modal>


            <div className={styles.left_content}>

                <img className={styles.img_top} src={place1} alt="" />
                <img className={styles.img_bottom} src={place2} alt="" />
                <img className={styles.img_bottom} src={place3} alt="" />

            </div>

            <div className={styles.right_content}>

                <div className={styles.name}>
                    <h1>YAKKASAROY</h1>
                    <p>wedding restaurant</p>
                </div>

                <div className={styles.together}>
                    <h1>Вместимость:</h1>
                    <p>c 50 чел до 200 чел</p>
                </div>

                <div className={styles.info}>
                    <h1>Возможности:</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla felis in sit amet</p>

                </div>

                <div className={styles.price}>
                    <h1>Цена</h1>
                    <p>50.000 сум</p>
                </div>

                <div className={styles.lokation}>
                    <h1>Локация:</h1>
                    <p>Lorem ipsum dolor sit amet,</p>
                </div>

                <button onClick={handleOpen} type='button'>Подробнее</button>
            </div>
        </div>
    );
};

