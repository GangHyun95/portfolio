'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import BubbleBackground from './BubbleBackground';
import StarBackground from './StarBackground';

export default function ThemeBackground() {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, [])

    if (!mounted) return null;

    const isDark = theme === 'dark' || (theme === 'system' && systemTheme === 'dark');
    return isDark ? <StarBackground /> : <BubbleBackground />;
}
