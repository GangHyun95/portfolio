import { NextResponse } from 'next/server';

import { supabase } from '@/lib/supabase/server';

export async function GET() {
    try {
        const { data, error } = await supabase.from('projects')
            .select('id, slug, title, description, thumbnail, tech_stack, demo_url, github_url, created_at')
            .order('created_at', { ascending: false })
            
        if (error) throw error;
        
        return NextResponse.json(data, {
            headers: { 'x-next-cache-tags': 'projects' },
        });
    } catch (error) {
        console.error('GET /projects error:', error);
        return NextResponse.json({ error: '프로젝트 데이터를 불러오는 중 오류가 발생했습니다.' }, { status: 500 });
    }
}