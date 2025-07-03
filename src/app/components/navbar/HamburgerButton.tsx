'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function HamburgetButton() {
    const [open, setOpen] = useState(false);

    return (
        <Button
            variant='ghost'
            size='icon'
            className='md:hidden rounded-full relative'
            onClick={() => setOpen(prev => !prev)}
            aria-label='Toggle menu'
            aria-expanded={open}
        >
            <span
                className={cn(
                    'absolute h-0.5 w-5 bg-foreground transition-all duration-300 origin-center',
                    open ? 'rotate-45 translate-y-0' : '-translate-y-[7px]'
                )}
            />

            <span
                className={cn(
                    'absolute h-0.5 w-5 bg-foreground transition-opacity duration-300',
                    open ? 'opacity-0' : 'opacity-100'
                )}
            />

            <span
                className={cn(
                    'absolute h-0.5 w-5 bg-foreground transition-all duration-300 origin-center',
                    open ? '-rotate-45 translate-y-0' : 'translate-y-[7px]'
                )}
            />
        </Button>
    );
}
