'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import BodyScrollLock from './BodyScrollLock';

export default function ModalWrapper({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const close = () => router.back();

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);

    return (
        <>
            <BodyScrollLock />
            <div className='fixed inset-0 z-50 bg-black/50' onClick={close} />
            {children}
        </>
    );
}
