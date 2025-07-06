import { LoaderCircle, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function SendMailButton({ disabled, isLoading }: { disabled: boolean; isLoading: boolean; }) {
    return (
        <Button type='submit' className='rounded-full h-14 disabled:bg-gray-300 disabled:text-gray-500' disabled={disabled || isLoading}>
            {isLoading ? (
                <div className='flex items-center gap-2'>
                    <LoaderCircle className='animate-spin size-5 text-primary' />
                    <span>Sending...</span>
                </div>
            ) : (
                <div className='flex items-center gap-2'>
                    <span className='text-base font-bold'>Send Mail</span>
                    <Send className='size-4' />
                </div>
            )}
        </Button>
    );
}
