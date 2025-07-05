import { LoaderCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

export default function Loading() {
    return (
        <>
            <div className='fixed inset-0 z-50 bg-black/50' />
            <div className='fixed inset-0 z-50 flex items-center justify-center pointer-events-none'>
                <div className={cn(
                    'flex flex-col justify-center items-center w-full h-full p-0 rounded-none max-w-none',
                    'md:min-h-[400px] md:max-h-[90vh] md:min-w-[600px] md:max-w-4xl md:rounded-2xl lg:max-w-5xl xl:max-w-6xl',
                    'bg-white pointer-events-auto overflow-hidden'
                )}>
                    <LoaderCircle className='animate-spin size-10 text-primary' />
                </div>
            </div>
        </>
    );
}
