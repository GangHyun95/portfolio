import React, { useEffect, useRef, useState } from 'react';
import globals from '../../styles/Global.module.css';
import styles from './ProfileSidebar.module.css'
import { MdOpenInNew } from "react-icons/md";
import { SiNotion, SiKakaotalk, SiBlogger } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ProfileSidebar() {
    const location = useLocation();
    
    const navigationType = useNavigationType();
    const ref = useRef<HTMLDivElement>(null);
    const [paddingTop, setPaddingTop] = useState(0);

    useEffect(() => {
        const root = document.querySelector("#root");
        if (root) {
            setPaddingTop(parseInt(window.getComputedStyle(root).paddingTop, 10));
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 768 && navigationType === 'PUSH' && ref.current) {
            
            const bottom = ref.current.getBoundingClientRect().bottom + window.scrollY - paddingTop;
            window.scrollTo({
                top: bottom,
                behavior: 'smooth',
            });
        }
    }, [location.pathname, navigationType]);

    return (
        <section className={styles.profile} ref={ref}>
            <div className={styles['img-holder']}>
                <img className={styles.img} src={'/assets/images/tempprofile.png'} alt="profile"/>
            </div>
            <h1 className={styles.name}>허 강 현</h1>
            <p className={`${styles.nickname} ${globals['text-primary']}`}>GangHyun95</p>
            <p className={styles.intro}>안녕하세요, 프론트엔드 개발자 허강현입니다. <br/> 항상 새로운 기술을 배우고, 더 나은 코드를 작성하기 위해 끊임없이 노력하고 있습니다.</p>
            <a href="https://github.com/GangHyun95" className={styles.link} target="_blank" rel="noopener noreferrer">
                <MdOpenInNew className={globals.icon}/>
                <span>See on Github</span>
            </a>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <a className={styles.a} href="https://hy-un.tistory.com/" target='_blank'>
                        <span className={globals.icon}>
                            <SiBlogger />
                        </span>
                        <span className={styles.text}>hy-un blog</span>
                    </a>
                </li>
                {/* <li className={styles.item}>
                    <a className={styles.a} href="" target='_blank'>
                        <span className={globals.icon}>
                            <SiNotion />
                        </span>
                        <span className={styles.text}>notion</span>
                    </a>
                </li> */}
                <li className={styles.item}>
                    <a className={styles.a} href="https://open.kakao.com/o/shH7fUPg" target='_blank'>
                        <span className={globals.icon}>
                            <SiKakaotalk />
                        </span>
                        <span className={styles.text}>kakao open chat</span>
                    </a>
                </li>
                <li className={styles.item}>
                    <a className={styles.a} href="mailto:hgh6128@gmail.com">
                        <span className={globals.icon}>
                            <CiMail />
                        </span>
                        <span className={styles.text}>hgh6128@gmail.com</span>
                    </a>
                </li>
            </ul>
            <div className={styles.footer}>
                <p className={globals.copyright}>{`© ${new Date().getFullYear()}. hyun All rights reserved.`}</p>
            </div>
        </section>
    );
}
