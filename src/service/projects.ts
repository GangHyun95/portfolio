import { Project, ProjectDetail } from '@/types/project';

export async function getAllProjects(): Promise<Project[]> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`, {
            next: { revalidate: 3600 },
        });

        if (!res.ok) throw new Error('Failed to fetch projects');

        return res.json();
    } catch (err) {
        console.error('Failed to fetch projects:', err);
        throw err;
    }
}
export async function getProject(slug: string): Promise<ProjectDetail> {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects/${slug}`, {
            next: { revalidate: 3600 },
        });

        if (!res.ok) throw new Error('Failed to fetch project');

        return res.json();
    } catch (err) {
        console.error('Failed to fetch project', err);
        throw err;
    }
}