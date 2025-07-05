export type Project = {
    id: number;
    slug: string;
    title: string;
    description: string;
    thumbnail: string;
    tech_stack: string[];
    demo_url: string;
    github_url: string;
    created_at: string;
};

export type ProjectDetail = Project & {
    notion_url: string;
};