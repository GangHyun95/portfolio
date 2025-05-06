import React from 'react';
import styles from './ModalContent.module.css'
import globals from '../../styles/Global.module.css'
import { ProjectType } from '../../types';

export default function ModalContent({ project }: {project: ProjectType}) {
    return (
        <>
            <div className={styles['img-holder']}>
                <img className={globals['absolute-img']} src={`/assets/images/${project.image}`} alt="" />
            </div>
            <div className={styles.right}>
                <h2 className={styles['modal-title']}>
                    {project.title}
                    {project.period && (
                        <span className={`${globals['text-primary']} ${styles.label}`}>{project.period}</span>
                    )}
                </h2>
                <div className={styles['modal-desc']}>
                    {project.description.split('\n').map((line, index) => (
                        <p key={index}>
                            {line}
                            <br />
                        </p>
                    ))}
                    {project.blogLink && (
                        <p>
                            이 웹을 개발한 과정은{' '}
                            <a
                                href={project.blogLink}
                                target="_blank"
                                className={`${globals['text-primary']} ${styles.link}`}
                            >
                                개발 일지 블로그
                            </a>
                            {' '}에서 확인하실 수 있습니다.
                        </p>
                    )}
                </div>
                <div className={styles.btns}>
                    <a href={project.githubLink} target='_blank' className={styles.btn}>
                        <p>Github</p>
                    </a>
                    {project.demoLink && (
                        <a href={project.demoLink} target="_blank" className={styles.btn}>
                            <p>View Demo</p>
                        </a>
                    )}
                    {project.youtubeLink && (
                        <a href={project.youtubeLink} target="_blank" className={styles.btn}>
                            <p>시연 영상 보기</p>
                        </a>
                    )}
                </div>
            </div>
        </>
    );
}

