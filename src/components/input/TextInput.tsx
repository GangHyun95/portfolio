import { cn } from '@/lib/utils';

type Props = {
    id: string;
    label: string;
    type?: 'text' | 'email' | 'password';
    placeholder?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
};
export default function TextInput({ id, label, type = 'text', placeholder, value, onChange, error }: Props) {
    return (
        <div className='py-3'>
            <label htmlFor={id} className='block text-sm font-medium text-gray-700 mb-1'>
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder || label}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={cn(
                    'block w-full rounded-sm border px-3 py-2 h-14 text-base text-foreground placeholder-gray-400',
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
