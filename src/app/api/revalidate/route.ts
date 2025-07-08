import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const secret = req.headers.get('x-revalidate-secret');
    if (secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json(
            { success: false, message: 'Unauthorized', data: null },
            { status: 401 },
        );
    }
    try {
        const { slug } = await req.json();

        revalidateTag('projects');
        if (slug) {
            revalidateTag(`project-${slug}`);
        }

        return NextResponse.json({
            success: true,
            message: 'Revalidation successful',
            data: {
                tags: slug ? ['projects', `project-${slug}`] : ['projects'],
            },
        });
    } catch (err) {
        console.error('POST /revalidate error:', err);
        return NextResponse.json(
            { success: false, message: '서버 오류가 발생했습니다.', data: null },
            { status: 500 },
        );
    }
}
