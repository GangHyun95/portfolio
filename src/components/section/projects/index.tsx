import { ArrowRight } from 'lucide-react';

import ProjectCard from '@/components/section/projects/ProjectCard';

const projects = [
    {
        id: 1,
        title: 'X-Clone',
        description:
            'PostgreSQL, Node.js, Express, React를 사용해 X(Twitter) 클론을 구현했습니다. TanStack Query로 캐시된 데이터를 전역 상태처럼 효율적으로 관리했으며, 재사용 가능한 무한 스크롤 커스텀 훅을 작성해 여러 화면에 적용했습니다.',
        image: '/projects/x-clone.png',
        tags: ['PostgreSQL', 'Express', 'Node.js', 'React', 'TanStack Query'],
        demoUrl: '#',
        body: '',
        githubUrl: 'https://github.com/GangHyun95/x-clone',
    },
    {
        id: 2,
        title: 'X-Clone',
        description:
            'PostgreSQL, Node.js, Express, React를 사용해 X(Twitter) 클론을 구현했습니다. TanStack Query로 캐시된 데이터를 전역 상태처럼 효율적으로 관리했으며, 재사용 가능한 무한 스크롤 커스텀 훅을 작성해 여러 화면에 적용했습니다.',
        image: '/projects/x-clone.png',
        tags: ['PostgreSQL', 'Express', 'Node.js', 'React', 'TanStack Query'],
        demoUrl: '#',
        body: '',
        githubUrl: 'https://github.com/GangHyun95/x-clone',
    },

    {
        id: 3,
        title: 'X-Clone',
        description:
            'PostgreSQL, Node.js, Express, React를 사용해 X(Twitter) 클론을 구현했습니다. TanStack Query로 캐시된 데이터를 전역 상태처럼 효율적으로 관리했으며, 재사용 가능한 무한 스크롤 커스텀 훅을 작성해 여러 화면에 적용했습니다.',
        image: '/projects/x-clone.png',
        tags: ['PostgreSQL', 'Express', 'Node.js', 'React', 'TanStack Query'],
        demoUrl: '#',
        githubUrl: 'https://github.com/GangHyun95/x-clone',
    },
];


export default function ProjectsSection() {
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
