import { cn } from '@/lib/utils';

type Props = {
    id: string;
    label: string;
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    onBlur: () => void;
    error?: string;
};

export default function Textarea({ id, label, placeholder, value, onChange, onBlur, error }: Props) {
    return (
        <div className='py-3'>
            <label htmlFor={id} className='block text-sm font-medium text-gray-700 mb-1'>
                {label}
            </label>
            <textarea
                id={id}
                rows={4}
                placeholder={placeholder || label}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onBlur={onBlur}
                className={cn(
                    'block w-full resize-none rounded-sm border px-3 py-2 text-base placeholder-gray-400',
                    'focus:outline-none',
                    error
                        ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:border-primary focus:ring-primary'
                )}
            />
            {error && (
                <p className='text-sm text-red-500'>
                    {error}
                </p>
            )}
        </div>
    );
}
