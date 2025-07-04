'use client';

import { Button } from '@/components/ui/button';

type Props = {
    categories: string[];
    activeCategory: string;
    onChange: (category: string) => void;
};

export default function CategoryTabs({ categories, activeCategory, onChange }: Props) {
    return (
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
            {categories.map((category) => (
                <Button
                    key={category}
                    onClick={() => onChange(category)}
                    variant={activeCategory === category ? 'default' : 'secondary'}
                    className='px-5 py-2 rounded-full capitalize'
                >
                    {category}
                </Button>
            ))}
        </div>
    );
}
