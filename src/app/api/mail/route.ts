import transporter from '@/lib/email';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        await transporter.sendMail({
            to: process.env.SMTP_USER,
            from: `'${name}' <${email}>`,
            replyTo: email,
            subject: `[Portfolio] 메시지 - ${name}`,
            text: message,
        });

        return Response.json({ ok: true });
    } catch (err) {
        console.error('POST /contact error:', err);
        return Response.json({ ok: false }, { status: 500 });
    }
}
