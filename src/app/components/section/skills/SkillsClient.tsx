'use client';

import { useState } from 'react';

import CategoryTabs from './CategoryTabs';
import SkillCard from './SkillCard';

const skills = [
    { name: 'HTML5', icon: '/icons/html.svg', category: 'frontend' },
    { name: 'CSS3', icon: '/icons/css.svg', category: 'frontend' },
    { name: 'JavaScript', icon: '/icons/javascript.svg', category: 'frontend' },
    { name: 'TypeScript', icon: '/icons/typescript.svg', category: 'frontend' },
    { name: 'React', icon: '/icons/react.svg', category: 'frontend' },
    { name: 'Next.js', icon: '/icons/next-light.svg', darkIcon: '/icons/next-dark.svg', category: 'frontend' },

    { name: 'Node.js', icon: '/icons/node.svg', category: 'backend' },
    { name: 'Express', icon: '/icons/express-light.svg', darkIcon: '/icons/express-dark.svg', category: 'backend' },
    { name: 'MongoDB', icon: '/icons/mongo.svg', category: 'backend' },
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg', category: 'backend' },

    { name: 'VS Code', icon: '/icons/vscode.svg', category: 'tools' },
    { name: 'Git', icon: '/icons/git.svg', category: 'tools' },
    { name: 'GitHub', icon: '/icons/github-light.svg', darkIcon: '/icons/github-dark.svg', category: 'tools' },
];

const categories = ['all', 'frontend', 'backend', 'tools'];

export default function SkillsClient() {
    const [active, setActive] = useState('all');
    const filtered = skills.filter((skill) => active === 'all' || skill.category === active);

    return (
        <div>
            <CategoryTabs
                categories={categories}
                activeCategory={active}
                onChange={setActive}
            />
            
            <div key={active} className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6'>
                {filtered.map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} delay={i * 0.1} />
                ))}
            </div>
        </div>
    );
}
