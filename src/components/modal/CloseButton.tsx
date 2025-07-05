'use client';

import { X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

export default function CloseButton() {
    const router = useRouter();
    return (
        <Button
            variant='ghost'
            size='icon'
            onClick={() => router.back()}
            className='rounded-full'
        >
            <X className='size-6'/>
        </Button>
    );
}
