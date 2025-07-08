import { NextResponse } from 'next/server';

import { supabase } from '@/lib/supabase/server';

export async function GET(_req: Request, context: { params: Promise<{ slug: string }> }) {
    try {
        const { slug } = await context.params;
        const { data, error } = await supabase
            .from('projects')
            .select('id, title, demo_url, github_url, notion_id, created_at')
            .eq('slug', slug)
            .maybeSingle();

        if (error) throw error;
        if (!data) {
            return NextResponse.json(
                { success: false, message: 'Project not found', data: null },
                { status: 404 },
            );
        }
        return NextResponse.json(
            { success: true, message: '프로젝트 상세 데이터를 불러왔습니다.', data: { project: data } },
            { headers: { 'x-next-cache-tags': `project-${slug}` } },
        );
    } catch (err) {
        console.error('GET /projects/[slug] error:', err);
        return NextResponse.json(
            { success: false, message: '프로젝트 상세 데이터를 불러오는 중 오류가 발생했습니다.', data: null },
            { status: 500 },
        );
    }
}
