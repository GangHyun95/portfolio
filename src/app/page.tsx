import { AboutSection, ContactSection, HeroSection, ProjectsSection, SkillsSection } from '@/components/section';
import { getAllProjects } from '@/service/projects';

export const dynamic = 'force-dynamic';
export default async function Home() {
    const projects = await getAllProjects();
    return (
        <>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection projects={projects}/>
            <ContactSection />
        </>
    );
}
