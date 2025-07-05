import CloseButton from '@/components/modal/CloseButton';
import { getProject } from '@/service/projects';

export default async function ProjectModal({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProject(slug);

    return (
        <div className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center'>
            <div className='bg-white p-6 rounded max-w-xl w-full relative'>
                <div className='flex items-center'>
                    <h1 className='text-2xl font-bold flex-1'>{project.title}</h1>
                    <CloseButton />
                </div>
                <article className='prose max-h-[70vh] overflow-y-auto'>
                    {project.body_md}
                </article>
            </div>
        </div>
    );
}
