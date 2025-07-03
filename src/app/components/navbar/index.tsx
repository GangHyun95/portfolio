import Link from 'next/link';

import HamburgetButton from './HamburgerButton';
import ThemeToggleButton from './ThemeToggleButton';

const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
] as const;

export default function Navbar() {
    return (
        <header className='flex flex-col h-15'>
            <nav className='flex-1 flex items-center container mx-auto'>
                <Link href='#hero' className='flex items-center h-full text-xl font-bold'>
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

