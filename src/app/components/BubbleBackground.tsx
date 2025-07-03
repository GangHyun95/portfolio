'use client';

import { useEffect, useRef, useState } from 'react';

type Bubble = {
    id: number;
    size: number;
    x: number;
    y: number;
    duration: number;
    delay: number;
};

export default function BubbleBackground() {
    const [bubbles, setBubbles] = useState<Bubble[]>([]);
    const resizeTimer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        createBubbles();

        const onResize = () => {
            if (resizeTimer.current) clearTimeout(resizeTimer.current);
            resizeTimer.current = setTimeout(() => {
                createBubbles();
            }, 200);
        };

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const createBubbles = () => {
        const count = Math.floor((window.innerWidth * window.innerHeight) / 50000);
        console.log(count);
        setBubbles(
            Array.from({ length: count }, (_, i) => ({
                id: i,
                size: Math.random() * 20 + 10,
                x: Math.random() * 100,
                y: 100 + Math.random() * 20,
                duration: Math.random() * 5 + 5,
                delay: Math.random() * 5,
            }))
        );
    };

    return (
        <div className='fixed inset-0 z-0 overflow-hidden pointer-events-none'>
            {bubbles.map((b) => (
                <div
                    key={b.id}
                    className='absolute left-0 top-0'
                    style={{
                        transform: `translate(${b.x}vw, calc(100vh + ${b.size}px))`,
                    }}
                >
                    <div
                        className='bubble animate-bubble'
                        style={{
                            width: `${b.size}px`,
                            height: `${b.size}px`,
                            animationDelay: `${b.delay}s`,
                            animationDuration: `${b.duration}s`,
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
