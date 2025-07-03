import Link from 'next/link';

import { navItems } from '@/app/constants/navItems';

import HamburgetButton from './HamburgerButton';
import ThemeToggleButton from './ThemeToggleButton';


export default function Navbar() {
    return (
        <header className='fixed inset-0 flex flex-col h-12 backdrop-blur-lg bg-background/50 z-50 md:h-15'>
            <nav className='flex-1 flex items-center container mx-auto'>
                <Link href='#hero' className='flex items-center h-full text-2xl font-bold'>
                    Hy<span className='text-primary'>un</span>
                </Link>

                <div className='flex-1 flex flex-col items-end justify-center h-full'>
                    <ul className='hidden md:flex flex-1 text-foreground/80'>
                        {navItems.map((item, index) => (
                            <li key={index} className='flex flex-col justify-center flex-1'>
                                <a href={item.href} className='grow flex items-center px-3'>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    <HamburgetButton />
                </div>
                <ThemeToggleButton />
            </nav>
        </header>
    );
}

