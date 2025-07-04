'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

export default function ThemeToggleButton() {
    const { theme, systemTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const isDark = currentTheme === 'dark';
    return (
        <Button
            variant='ghost'
            size='icon'
            className='rounded-full'
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label='Toggle theme'
        >
            {isDark ? <Sun className='size-5' /> : <Moon className='size-5' />}
        </Button>
    );
}
