'use client';
import { Mail, Send, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import Textarea from '@/components/input/Textarea';
import TextInput from '@/components/input/TextInput';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTitle,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';


export default function ContactFormModal() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
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
                        <p>Send Mail</p>
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
                    <form className='flex flex-col h-full overflow-auto'>
                        <section className='flex-1 overflow-auto px-8 md:px-20'>
                            <TextInput
                                id='name'
                                label='Your Name'
                                value={formData.name}
                                onChange={(value) => setFormData(prev => ({ ...prev, name: value }))}
                            />
                            <TextInput
                                id='email'
                                label='Your Email'
                                type='email'
                                value={formData.email}
                                onChange={(value) => setFormData(prev => ({ ...prev, email: value }))}
                            />
                            <Textarea
                                id='message'
                                label='Message'
                                value={formData.message}
                                onChange={(value) => setFormData((prev) => ({ ...prev, message: value }))}
                            />
                        </section>
                        <footer className='flex flex-col flex-none my-6 px-8 md:px-20'>
                            <Button className='rounded-full h-14'>
                                <p className='text-base font-bold'>Send Mail</p>
                                <Send className='size-4'/>
                            </Button>
                        </footer>
                    </form>
                </section>
            </DialogContent>
        </Dialog>
    );
}

                    