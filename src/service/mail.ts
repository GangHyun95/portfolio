export async function sendContactMail(formData: { name: string; email: string; message: string; }) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/mail`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
    });

    if (!res.ok) throw new Error('Failed to send mail');

    return res.json();
};