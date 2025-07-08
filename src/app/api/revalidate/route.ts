import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    try {
        const secret = req.headers.get('x-revalidate-secret');
        if (secret !== process.env.REVALIDATE_SECRET) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        const { slug } = await req.json();

        revalidateTag('projects');
        if (slug) {
            revalidateTag(`project-${slug}`);
        }

        return NextResponse.json({
            revalidated: true,
            tags: slug ? ['projects', `project-${slug}`] : ['projects'],
        });
    } catch (err) {
        console.error('POST /revalidate error:', err);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}
