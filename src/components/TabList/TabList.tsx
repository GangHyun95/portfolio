import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './TabList.module.css';

export default function TabList() {
    const location = useLocation();

    const isRoot = location.pathname === '/';

    return (
        <nav className={styles.list}>
            <NavLink
                to="/home"
                className={({ isActive }) => `${styles.item} ${(isActive || isRoot) ? styles.active : ''}`}
            >
                <span>Home</span>
            </NavLink>
            <NavLink
                to="/profile"
                className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
            >
                <span>Profile</span>
            </NavLink>
            <NavLink
                to="/projects"
                className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
            >
                <span>Projects</span>
            </NavLink>
            <NavLink
                to="/blog"
                className={({ isActive }) => `${styles.item} ${isActive ? styles.active : ''}`}
            >
                <span>Blog</span>
            </NavLink>
        </nav>
    );
}
