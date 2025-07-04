'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';

type Props = {
    skill: {
        name: string;
        icon: string;
        darkIcon?: string;
        category: string;
    };
    delay?: number;
};

export default function SkillCard({ skill, delay = 0 }: Props) {
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';
    const iconSrc = isDark && skill.darkIcon ? skill.darkIcon : skill.icon;

    return (
        <div
            className={`relative w-[90%] mx-auto animate-pop-in-up`} 
            style={{ animationDelay: `${delay}s` }}
        >
            <div className='pb-[100%]' />

            <div className='absolute inset-0 flex flex-col items-center justify-center bg-card border rounded-xl shadow transition-transform hover:-translate-y-1 hover:shadow-md'>
                <div className='mb-2'>
                    <Image src={iconSrc} alt={skill.name} width={80} height={80} />
                </div>
                <span className='mt-1.5 font-medium text-foreground/90'>{skill.name}</span>
            </div>
        </div>
    );
}
