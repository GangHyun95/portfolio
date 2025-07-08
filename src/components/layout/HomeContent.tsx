import { HeroSection, AboutSection, SkillsSection, ContactSection } from '@/components/section';

export default function HomeContent({ projects }: { projects: React.ReactNode }) {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            {projects}
            <ContactSection />
        </>
    );
}
