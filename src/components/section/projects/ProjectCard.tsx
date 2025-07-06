import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import GithubSvg from '@/components/icons/GithubSvg';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Project } from '@/types/project';

type Props = {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    const { thumbnail, title, description, tech_stack, slug, demo_url, github_url } = project;
    return (
        <div 
            className={cn(
                'flex flex-col',
                'bg-card rounded-lg overflow-hidden group transition-all duration-300',
                'shadow-[0_2px_8px_rgba(0,0,0,0.05)]',
                'hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]'
            )}
        >
            <div className='relative w-full'>
                <div className='pb-[56.25%]' />
                <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    sizes='(min-width: 768px) 50vw, 100vw'
                    className='object-cover transition-transform duration-500'
                />
                <Link
                    href={`/${slug}`}
                    scroll={false}
                    prefetch
                    className={cn(
                        'absolute inset-0 flex items-center justify-center transition-opacity duration-300',
                        'bg-black/50',
                        'opacity-100 md:opacity-0 md:group-hover:opacity-100'
                    )}
                >
                    <button
                        type='button'
                        className={cn(
                            'px-8 py-3 rounded-sm text-sm border border-white cursor-pointer',
                            'text-white hover:bg-white hover:text-black',
                            'transition-colors'
                        )}
                    >
                        자세히 보기
                    </button>
                </Link>
            </div>

            <div className='flex flex-col px-5 py-4 flex-1'>
                <div className='flex flex-wrap gap-2 mb-4'>
                    {tech_stack.map((stack) => (
                        <span
                            key={stack}
                            className='px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground'
                        >
                            {stack}
                        </span>
                    ))}
                </div>

                <h3 className='text-xl font-semibold mb-1'>{title}</h3>
                <p className='text-muted-foreground text-sm mb-4 flex-1'>{description}</p>

                <div className='flex'>
                    <Button
                        asChild
                        variant='ghost'
                        size='icon'
                        className='rounded-full group/button'
                    >
                        <a
                            href={demo_url}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-foreground/80'
                        >
                            <ExternalLink className='size-5 group-hover/button:text-primary'/>
                        </a>
                    </Button>
                    <Button
                        asChild
                        variant='ghost'
                        size='icon'
                        className='rounded-full group/button'
                    >
                        <a
                            href={github_url}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <GithubSvg className='size-5 dark:fill-white group-hover/button:fill-primary'
                            />
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
