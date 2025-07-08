export const dynamic = 'force-dynamic';

import ProjectsSection from '@/components/section/projects';
import { getAllProjects } from '@/service/projects';

export default async function ProjectsSlot() {
    const projects = await getAllProjects();

    return <ProjectsSection projects={projects} />;
}
