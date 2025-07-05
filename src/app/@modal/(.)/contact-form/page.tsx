'use client';

import CloseButton from '@/components/modal/CloseButton';

export default function ContactFormModal() {
    return (
        <div className='fixed inset-0 z-50 bg-black/50 flex items-center justify-center'>
            <div className='bg-white p-6 rounded max-w-xl w-full relative'>
                <div className='flex items-center mb-4'>
                    <h1 className='text-2xl font-bold flex-1'>Contact Me</h1>
                    <CloseButton />
                </div>
                <form className='space-y-4'>
                    <input className='w-full border p-2 rounded' placeholder='Your Name' />
                    <input className='w-full border p-2 rounded' placeholder='Your Email' />
                    <textarea className='w-full border p-2 rounded' placeholder='Your Message' />
                    <button className='w-full bg-primary text-white p-2 rounded'>Send</button>
                </form>
            </div>
        </div>
    );
}
