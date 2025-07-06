import { useState } from 'react';

export function useContactForm() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const validate = (key: keyof typeof form, value: string) => {
        let error = '';

        if (!value.trim()) {
            error = '필수 항목입니다.';
        } else if (key === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = '올바른 이메일 주소를 입력해주세요.';
        }
        setErrors(prev => ({ ...prev, [key]: error }));
    };

    const handleBlur = (key: keyof typeof form) => {
        validate(key, form[key]);
    };

    const valid = Object.values(errors).every((e) => e === '') && Object.values(form).every((v) => v.trim() !== '');

    return {
        form,
        setForm,
        errors,
        handleBlur,
        valid,
    };
}
