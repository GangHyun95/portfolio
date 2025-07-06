import { NextResponse } from 'next/server';

import { supabase } from '@/lib/supabase/server';

export async function GET(_req: Request, context: { params: Promise<{ slug: string }> }) {
    const { slug } = await context.params;
    const { data, error } = await supabase
        .from('projects')
        .select('id, title, demo_url, github_url, notion_id, created_at')
        .eq('slug', slug)
        .single();

    if (error) return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json(data, {
        headers: { 'x-next-cache-tags': `project-${slug}` },
    });
}
