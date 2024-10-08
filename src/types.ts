export interface ProjectType {
    type:        string;
    title:       string;
    description: string;
    blogLink:    string;
    skills:      string;
    demoLink:    string;
    image:       string;
    githubLink:  string;
    youtubeLink: string;
    period?:     string;
}

export interface PostType {
    categories: string;
    title: string;
    description: string;
    link: string;
    pubDate: string;
}
