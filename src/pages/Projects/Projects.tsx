import React, { useState } from 'react';
import styles from './Projects.module.css';
import globals from '../../styles/Global.module.css';
import { HiArrowRight } from 'react-icons/hi';
import Modal from '../../components/Modal/Modal';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import ModalContent from '../../components/ModalContent/ModalContent';
import { ProjectType } from '../../types';
import Loading from '../../components/Loading/Loading';

export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('All');
    const defaultProject: ProjectType = {
        type: "",
        title: "",
        description: "",
        blogLink: "",
        skills: "",
        demoLink: "",
        image: "",
        githubLink: "",
        youtubeLink: "",
        period: "",
    };
    const [selectedProject, setSelectedProject] = useState<ProjectType>(defaultProject);
    const {isLoading, data:projects} = useQuery<ProjectType[]>({
        queryKey: ['projects'],
        queryFn: async () => {
            const response = await axios.get("/data/projects.json");
            return response.data;
        }
    })

    const openModal = (project: ProjectType) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        console.log(selectedProject);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(defaultProject);
    };

    const filters = ['All', 'Personal', "Team"];
    const handleFilterClick = (filter: string) => {
        setSelectedFilter(filter);
    };

    const filteredProjects = selectedFilter === "All" 
        ? projects 
        : projects?.filter(project => project.type === selectedFilter);

    return (
        <section className={globals['tab-panel']}>
            {isLoading && <Loading />}
            {!isLoading && (
                <>
                    <ul className={styles.filter}>
                        {filters.map(filter => (
                            <li
                                key={filter}
                                className={`${styles['filter-item']} ${selectedFilter === filter ? styles.active : ''}`}
                                onClick={() => handleFilterClick(filter)}
                            >
                                {filter}
                            </li>
                        ))}
                    </ul>
                    <ul className={styles['card-list']}>
                        {filteredProjects?.map((project, index) => {
                            const skills = project.skills.split(', ').map(skill => skill.trim());

                            return (
                                <li 
                                    key={project.title + index} 
                                    className={styles['card-item']} 
                                    onClick={() => openModal(project)}
                                >
                                    <div className={styles['img-holder']}>
                                        <img 
                                            className={globals['absolute-img']} 
                                            src={`/assets/images/${project.image}`} 
                                            alt={project.title} 
                                        />
                                    </div>
                                    <h2 className={styles.title}>{project.title}</h2>
                                    <div className={styles['badge-container']}>
                                        {skills.map((skill, i) => (
                                            <span key={i} className={styles['badge']}>
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <div className={styles.spacer}></div>
                                    <button className={styles['demo-btn']}>
                                        <span>More Info </span>
                                        <HiArrowRight className={styles['demo-icon']} />
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </>
            )}
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ModalContent project={selectedProject} />
            </Modal>
        </section>
    );
}
