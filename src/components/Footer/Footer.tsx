import React, { useEffect, useState } from 'react';
import globals from '../../styles/Global.module.css';
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className={`${globals.container} ${styles.footer}`}>
            <p className={globals.copyright}>{`© ${new Date().getFullYear()}. hyun All rights reserved.`}</p>
        </footer>
    );
}

