import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import GithubSvg from '@/components/icons/GithubSvg';
import { cn } from '@/lib/utils';

type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    demoUrl: string;
    githubUrl: string;
}

type Props = {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    return (
        <div 
            className={cn(
                'bg-card rounded-lg overflow-hidden group transition-all duration-300',
                'shadow-[0_2px_8px_rgba(0,0,0,0.05)]',
                'hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]'
            )}
        >
            <div className='relative w-full'>
                <div className='pb-[56.25%]' />
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className='object-cover transition-transform duration-500'
                />
                <Link
                    href='/'
                    className='absolute inset-0 flex items-center justify-center bg-black/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                >
                    <button
                        type="button"
                        className={cn(
                            "px-8 py-3 rounded-sm text-sm border border-white cursor-pointer",
                            "text-white hover:bg-white hover:text-black",
                            "transition-colors"
                        )}
                    >
                        자세히 보기
                    </button>
                </Link>
            </div>

            <div className='px-5 py-4'>
                <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
                <p className='text-muted-foreground text-sm mb-4'>{project.description}</p>

                <div className='flex space-x-3'>
                    <a
                        href={project.demoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-foreground/80 hover:text-primary transition-colors duration-300'
                    >
                        <ExternalLink size={20} />
                    </a>
                    <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <GithubSvg
                            className={cn(
                                'size-5 transition-colors duration-300',
                                'dark:fill-white',
                                'hover:fill-primary dark:hover:fill-primary'
                            )}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}
