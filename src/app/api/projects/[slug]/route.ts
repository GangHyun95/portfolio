import { supabase } from '@/lib/supabase/server';

export async function GET(_req: Request, { params }: { params: { slug: string } }) {
    const { data, error } = await supabase
        .from('projects')
        .select('id, slug, title, description, thumbnail, tech_stack, demo_url, github_url, body_md, created_at')
        .eq('slug', params.slug)
        .single();

    if (error) return Response.json({ error: error.message }, { status: 500 });

    return Response.json(data);
}
