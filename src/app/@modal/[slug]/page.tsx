import CloseButton from '@/components/modal/CloseButton';
import { getProject } from '@/service/projects';

export default async function ProjectModal({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = await getProject(slug);

    return (
        <div className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center'>
            <div className='bg-white rounded max-w-6xl w-full h-[80vh] relative'>
                <div className='flex items-center justify-between px-6 py-4 border-b'>
                    <h1 className='text-xl font-bold'>{project.title}</h1>
                    <CloseButton />
                </div>
                <iframe
                    src='https://coffee-roundworm-a51.notion.site/ebd/227ae1467afa806cb3bedcf12352ee61'
                    width='100%'
                    height='600'
                    frameBorder='0'
                    allowFullScreen
                />

            </div>
        </div>
    );
}
