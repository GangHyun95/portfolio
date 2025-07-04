import { Project } from '@/types/project';

export async function getAllProjects(): Promise<Project[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/projects`, {
        next: { revalidate: 60 * 60 * 24 }
    });

    if (!res.ok) throw new Error('Failed to fetch projects');

    return res.json();
}