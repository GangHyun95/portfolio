import { supabase } from '@/lib/supabase/server';

export async function GET() {
    const { data, error } = await supabase.from('projects')
        .select('id, slug, title, description, thumbnail, tech_stack, demo_url, github_url, created_at')
        .order('created_at', { ascending: false })
        
    if (error) return Response.json({ error: error.message }, { status: 500 });

    return Response.json(data);
}