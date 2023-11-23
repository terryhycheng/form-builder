import { GetFormById } from '@/actions/form';

export const dynamic = 'force-dynamic'; // defaults to force-static

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) return Response.json({ error: 'id is required' }, { status: 400 });

    const form = await GetFormById(id);

    if (!form) return Response.json({ error: 'form not found' }, { status: 404 });

    return Response.json({ data: form.fields }, { status: 200 });
}
