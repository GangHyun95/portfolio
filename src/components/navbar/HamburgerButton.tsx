'use client';

import { Menu, X } from 'lucide-react';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { navItems } from '@/constants/navItems';
import { cn } from '@/lib/utils';

export default function HamburgetButton() {
    return (
        <Sheet>
            <form>
                <SheetTrigger asChild>
                    <Button
                        variant='ghost'
                        size='icon'
                        className='md:hidden rounded-full relative'
                        aria-label='Toggle menu'
                    >
                        <Menu className='size-6'/>
                    </Button>
                </SheetTrigger>

                <SheetContent 
                    className={cn(
                        'fixed inset-0 z-50 w-screen h-screen max-w-none sm:max-w-none rounded-none border-none',
                        'top-0 left-0 translate-x-0 translate-y-0',
                        'bg-background/95 backdrop-blur-md',
                        '[&>button:last-child]:hidden'
                        
                    )}>
                    <SheetTitle className='sr-only'>Mobile Menu</SheetTitle>
                    
                    <SheetClose asChild>
                        <Button
                            variant='ghost'
                            size='icon'
                            className='absolute top-3 right-4 z-50 rounded-full'
                            aria-label='Close menu'
                        >
                            <X className='size-6' />
                        </Button>
                    </SheetClose>
                        <ul className='flex flex-col justify-center items-center flex-1 text-foreground/80'>
                            {navItems.map((item, index) => (
                                <li key={index} className='flex w-full justify-center'>
                                    <SheetClose asChild>
                                        <Link href={item.href} replace className='grow flex justify-center items-center py-4'>{item.label}</Link>
                                    </SheetClose>
                                </li>
                            ))}
                        </ul>
                </SheetContent>
            </form>
        </Sheet>
    );
}
