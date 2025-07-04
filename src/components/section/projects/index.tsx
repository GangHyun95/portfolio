import { ArrowRight } from 'lucide-react';

import ProjectCard from '@/components/section/projects/ProjectCard';
import { getAllProjects } from '@/service/projects';

export default async function ProjectsSection() {
    const projects = await getAllProjects();
    return (
        <section id='projects' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Recent<span className='text-primary'>&nbsp;Projects</span></h2>
                <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                    최근에 작업한 프로젝트들입니다.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project}/>
                    ))}
                </div>

                <div className='text-center mt-12'>
                    <a
                        className='cosmic-button w-fit flex items-center mx-auto gap-2'
                        target='_blank'
                        rel='noopener noreferrer'
                        href='https://github.com/GangHyun95'
                    >
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
