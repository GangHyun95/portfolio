import { NotionAPI } from 'notion-client';

import BodyScrollLock from '@/components/modal/BodyScrollLock';
import CloseButton from '@/components/modal/CloseButton';
import NotionContent from '@/components/NotionContent';
import { cn } from '@/lib/utils';
import { getProject } from '@/service/projects';

export default async function ProjectModal({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProject(slug);

    const notion = new NotionAPI();
    const recordMap = await notion.getPage(project.notion_id);

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
                    <div className='flex items-center justify-between px-6 py-4 border-b backdrop-blur-md bg-white/50'>
                        <h1 className='text-xl font-bold'>{project.title}</h1>
                        <CloseButton />
                    </div>

                    <div className='flex-1 overflow-y-auto '>
                        <NotionContent recordMap={recordMap} />
                    </div>
                </div>
            </div>
        </>
    );
}
