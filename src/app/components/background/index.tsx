'use client';

import { useEffect, useState } from 'react';

import BubbleBackground from './BubbleBackground';
import StarBackground from './StarBackground';

export default function ThemeBackground() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('theme');
        if (stored === 'light') {
            setIsDark(false);
        } else if (stored === 'dark') {
            setIsDark(true);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setIsDark(prefersDark);
        }
    }, []);

    return isDark ? <StarBackground /> : <BubbleBackground />;
}
