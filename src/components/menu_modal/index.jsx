import React from 'react';
import styles from './index.module.sass'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import bars from '../../assets/img/images.png'

export const MenuModal = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };

    return (
        <div className={styles.modal}>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <img className={styles.icon} src={bars} alt="" />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={()=> {window.scrollBy(0, 10); handleClose()}}>
                    Главная страница
                </MenuItem>
                <MenuItem onClick={()=> {window.scrollBy(0, 800); handleClose()}}>
                    Галерея
                </MenuItem>
                <MenuItem onClick={()=> {window.scrollBy(0, 6000); handleClose()}}>
                    Контакты
                </MenuItem>
            </Menu>
    </div>
    );
};

