import { Mail } from 'lucide-react';

import CloseButton from '@/components/modal/CloseButton';
import ContactForm from '@/components/modal/contact/ContactForm';
import ModalWrapper from '@/components/modal/ModalWrapper';
import { cn } from '@/lib/utils';

export const dynamic = 'force-dynamic';
export default function ContactFormModal() {
    return (
        <ModalWrapper>
            <div className='fixed inset-0 z-50 flex items-center justify-center pointer-events-none'>
                <div className={cn(
                    'flex flex-col gap-4 w-full h-full p-0 rounded-none max-w-none',
                    'md:min-h-[400px] md:h-[650px] md:max-h-[90vh] md:min-w-[600px] md:max-w-[600px] md:rounded-2xl',
                    'bg-white pointer-events-auto overflow-hidden'
                )}>
                    <header className='flex h-14 justify-center px-4'>
                        <div className='flex-1 basis-1/2 min-h-8' />
                        <div className='flex flex-auto items-center text-lg font-bold whitespace-nowrap space-x-3'>
                            <Mail className='text-primary'/>
                        </div>
                        <div className='flex flex-1 basis-1/2 justify-end items-center'>
                            <CloseButton />
                        </div>
                    </header>
                    <section className='flex-1 flex flex-col overflow-hidden'>
                        <ContactForm />
                    </section>
                </div>
            </div>
        </ModalWrapper>
    );
}