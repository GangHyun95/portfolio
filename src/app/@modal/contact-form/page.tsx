'use client';

import { Mail, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

import ContactForm from '@/components/modal/contact/ContactForm';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

export default function ContactFormModal() {
    const router = useRouter();
    return (
        <Dialog defaultOpen onOpenChange={(open) => !open && router.back()}>
            <DialogContent
                className={cn(
                    'flex flex-col w-full h-full p-0 rounded-none max-w-none sm:max-w-none',
                    'md:min-h-[400px] md:h-[650px] md:max-h-[90vh] md:min-w-[600px] md:max-w-[600px] md:rounded-2xl',
                    '[&>button:last-child]:hidden'
                )}
            >
                <header className='flex h-14 justify-center px-4'>
                    <div className='flex-1 basis-1/2 min-h-8' />
                    <DialogTitle className='flex flex-auto items-center text-lg font-bold whitespace-nowrap space-x-3'>
                        <Mail className='text-primary'/>
                    </DialogTitle>
                    <div className='flex flex-1 basis-1/2 justify-end items-center'>
                        <DialogClose asChild>
                            <Button variant='ghost' size='icon' className='rounded-full'>
                                <X className='size-5'/>
                            </Button>
                        </DialogClose>
                    </div>
                </header>
                <section className='flex-1 flex flex-col overflow-hidden'>
                    <ContactForm />
                </section>
            </DialogContent>
        </Dialog>
    );
}

                    