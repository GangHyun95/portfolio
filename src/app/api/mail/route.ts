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
        
        return Response.json(
            { success: true, message: '메시지가 성공적으로 전송되었습니다.', data: null },
        );
    } catch (err) {
        console.error('POST /contact error:', err);
        return Response.json(
            { success: false, message: '메시지를 전송하는 중 오류가 발생했습니다.', data: null },
            { status: 500 },
        );
    }
}
