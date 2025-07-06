import { MailCheck, MailWarning } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';

import Textarea from '@/components/input/Textarea';
import TextInput from '@/components/input/TextInput';
import SendMailButton from '@/components/modal/contact/SendMailButton';
import { useContactForm } from '@/hooks/useContactForm';
import { sendContactMail } from '@/service/mail';

export default function ContactForm() {
    const router = useRouter();
    const { form, setForm, errors, handleBlur, valid } = useContactForm();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!valid) return;
        setLoading(true);

        try {
            await sendContactMail(form);
            toast.success('메일이 전송되었습니다.', {
                icon: <MailCheck className='size-4' />,
            })
        } catch (err) {
            console.log(err);
            toast.error('메일 전송에 실패했습니다.', {
                icon: <MailWarning className='size-4' />,
            });
        } finally {
            setLoading(false);
            router.back();
        }
    };

    return (
            <form onSubmit={handleSubmit} className='flex flex-col h-full overflow-auto'>
                <section className='flex-1 overflow-auto px-8 md:px-20'>
                    <TextInput
                        id='name'
                        label='Your Name'
                        value={form.name}
                        onChange={(value) => setForm(prev => ({ ...prev, name: value }))}
                        onBlur={() => handleBlur('name')}
                        error={errors.name}
                    />
                    <TextInput
                        id='email'
                        label='Your Email'
                        type='email'
                        value={form.email}
                        onChange={(value) => setForm(prev => ({ ...prev, email: value }))}
                        onBlur={() => handleBlur('email')}
                        error={errors.email}
                    />
                    <Textarea
                        id='message'
                        label='Message'
                        value={form.message}
                        onChange={(value) => setForm((prev) => ({ ...prev, message: value }))}
                        onBlur={() => handleBlur('message')}
                        error={errors.message}
                    />
                </section>
                <footer className='flex flex-col flex-none my-6 px-8 md:px-20'>
                    <SendMailButton disabled={!valid} isLoading={loading} />
                </footer>
            </form>
    );
}

