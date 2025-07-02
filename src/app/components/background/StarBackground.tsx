'use client';

import { useEffect, useRef, useState } from 'react';

type Star = {
    id: number;
    size: number;
    x: number;
    y: number;
    opacity: number;
    duration: number;
};

type Meteor = {
    id: number;
    size: number;
    x: number;
    y: number;
    delay: number;
    duration: number;
};

export default function StarBackground() {
    const [stars, setStars] = useState<Star[]>([]);
    const [meteors, setMeteors] = useState<Meteor[]>([]);

    const resizeTimer = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        createStars();
        createMeteors();

        const onResize = () => {
            if (resizeTimer.current) clearTimeout(resizeTimer.current);
            resizeTimer.current = setTimeout(() => {
                createStars();
            }, 200);
        };

        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const createStars = () => {
        const count = Math.floor((window.innerWidth * window.innerHeight) / 50000);

        console.log(count);
        setStars(
            Array.from({ length: count }, (_, i) => ({
                id: i,
                size: Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                duration: Math.random() * 4 + 2,
            })),
        );
    };

    const createMeteors = () => {
        setMeteors(
            Array.from({ length: 4 }, (_, i) => ({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: i === 0 ? 0 : Math.random() * 5,
                duration: Math.random() * 3 + 3,
            })),
        );
    };

    return (
        <div className='fixed inset-0 z-0 overflow-hidden pointer-events-none'>
            {stars.map((s) => (
                <div
                    key={s.id}
                    className='star animate-pulse-subtle'
                    style={{
                        width: `${s.size}px`,
                        height: `${s.size}px`,
                        transform: `translate(${s.x}vw, ${s.y}vh)`,
                        opacity: s.opacity,
                        animationDuration: `${s.duration}s`,
                    }}
                />
            ))}

            {meteors.map((m) => (
                <div
                    key={m.id}
                    className='absolute left-0 top-0'
                    style={{ transform: `translate(${m.x}vw, ${m.y}vh)` }}
                >
                    <div
                        className='meteor animate-meteor'
                        style={{
                            width: `${m.size * 50}px`,
                            height: `${m.size * 2}px`,
                            animationDelay: `${m.delay}s`,
                            animationDuration: `${m.duration}s`,
                        }}
                    />
                </div>
            ))}
        </div>
    );
}
