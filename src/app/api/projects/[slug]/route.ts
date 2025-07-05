import { supabase } from '@/lib/supabase/server';

export async function GET(_req: Request, context: { params: Promise<{ slug: string }> }) {
    const { slug } = await context.params;
    const { data, error } = await supabase
        .from('projects')
        .select('id, title, demo_url, github_url, notion_id, created_at')
        .eq('slug', slug)
        .single();

    if (error) return Response.json({ error: error.message }, { status: 500 });

    return Response.json(data);
}
