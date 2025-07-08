import { AboutSection, ContactSection, HeroSection, ProjectsSection, SkillsSection } from '@/components/section';

export const dynamic = 'force-dynamic';
export default function Home() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </>
    );
}
