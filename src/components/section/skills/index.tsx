import SkillsClient from './SkillsClient';

export default function SkillsSection() {
    return (
        <section id='skills' className='py-24 px-4 relative'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
                    My <span className='text-primary'> Skills</span>
                </h2>
                <SkillsClient />
            </div>
        </section>
    );
}
