import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase/server';

export async function GET(_req: Request, context: { params: Promise<{ slug: string }> }) {
    try {
        const { slug } = await context.params;
        const { data, error } = await supabase
            .from('projects')
            .select('id, title, demo_url, github_url, notion_id, created_at')
            .eq('slug', slug)
            .single();

        if (error) throw error;

        return NextResponse.json(data, {
            headers: { 'x-next-cache-tags': `project-${slug}` },
        });
    } catch (err) {
        console.error('GET /projects/[slug] error:', err);
        return NextResponse.json({ error: '프로젝트 상세 데이터를 불러오는 중 오류가 발생했습니다.' }, { status: 500 });
    }
}
