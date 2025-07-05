import { Project, ProjectDetail } from '@/types/project';

export async function getAllProjects(): Promise<Project[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`, {
        cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch projects');

    return res.json();
}

export async function getProject(slug: string): Promise<ProjectDetail> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects/${slug}`, {
        cache: 'no-store',
    });

    if (!res.ok) throw new Error('Failed to fetch project');

    return res.json();
}