import { ExternalLink } from 'lucide-react';

import GithubSvg from '@/components/icons/GithubSvg';
import BodyScrollLock from '@/components/modal/BodyScrollLock';
import CloseButton from '@/components/modal/CloseButton';
import NotionWrapper from '@/components/modal/notion/NotionWrapper';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { getProject } from '@/service/projects';

export default async function ProjectModal({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProject(slug);

    return (
        <>
            <BodyScrollLock />
            <div className='fixed inset-0 z-50 bg-black/50' />
            <div className='fixed inset-0 z-50 flex items-center justify-center pointer-events-none'>
                <div className={cn(
                    'flex flex-col w-full h-full p-0 rounded-none max-w-none',
                    'md:min-h-[400px] md:max-h-[90vh] md:min-w-[600px] md:max-w-4xl md:rounded-2xl lg:max-w-5xl xl:max-w-6xl',
                    'bg-white pointer-events-auto overflow-hidden'
                )}>
                    <header className='flex items-center justify-between px-12 py-4 border-b'>
                        <div className='flex-1 basis-1/2 min-h-8 flex items-center space-x-1'>
                            <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-full group hover:bg-[#f1f1f1] dark:hover:bg-[#f1f1f1]'
                            >
                                <a
                                    href={project.github_url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <GithubSvg className='size-6 group-hover:fill-primary' />
                                </a>
                            </Button>

                            <Button
                                variant='ghost'
                                size='icon'
                                className='rounded-full group hover:bg-[#f1f1f1] dark:hover:bg-[#f1f1f1]'
                            >
                                <a
                                    href={project.demo_url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <ExternalLink className='size-6 text-black group-hover:text-primary' />
                                </a>
                            </Button>
                        </div>
                        <h1 className='flex-auto whitespace-nowrap text-xl text-black font-bold'>{project.title}</h1>
                        <div className='flex-1 basis-1/2 text-end'>
                            <CloseButton />
                        </div>
                    </header>

                    <div className='flex-1 overflow-y-auto '>
                        <NotionWrapper notionId={project.notion_id} />
                    </div>
                </div>
            </div>
        </>
    );
}
