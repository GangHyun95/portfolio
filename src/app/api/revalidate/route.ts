import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
    const secret = req.headers.get('x-revalidate-secret');
    if (secret !== process.env.REVALIDATE_SECRET) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    let slug;
    try {
        const body = await req.json();
        slug = body.slug;
    } catch {
    }

    revalidateTag('projects');

    if (slug) {
        revalidateTag(`project-${slug}`);
    }

    return NextResponse.json({
        revalidated: true,
        tags: slug ? ['projects', `project-${slug}`] : ['projects'],
    });
}
