import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from './NavContainer.module.css';

const NavContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    return (
        <div
            className={styles.navContainer}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {isOpen ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon />}
            <div className={`${styles.dropdown} ${isOpen ? styles.dropdownOpen : ''}`}>
                {/* Содержимое выпадающего дива */}
                <button className='btn-1'>На главную</button>
                <button className='btn-2'>К проектам</button>
            </div>
        </div>
    );
};

export default NavContainer;

