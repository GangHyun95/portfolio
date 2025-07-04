'use client';

import { cn } from '@/lib/utils';

type Props = {
    categories: string[];
    activeCategory: string;
    onChange: (category: string) => void;
};

export default function CategoryTabs({ categories, activeCategory, onChange }: Props) {
    return (
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onChange(category)}
                    className={cn(
                        'px-5 py-2 rounded-full transition-colors duration-300 capitalize',
                        activeCategory === category
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary/70 text-foreground hover:bg-secondary'
                    )}
                >
                    {category}
                </button>
            ))}
        </div>
    );
}
