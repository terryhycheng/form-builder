import { GetFormById } from '@/actions/form';
import prisma from '@/lib/db';
import { NextResponse } from 'next/server';
import { headers } from 'next/headers'

export const dynamic = 'force-dynamic'; // defaults to force-static

// export async function GET(request: Request) {
//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get('id');

//     if (!id) return Response.json({ error: 'id is required' }, { status: 400 });

//     const form = await GetFormById(id);

//     if (!form) return Response.json({ error: 'form not found' }, { status: 404 });

//     return Response.json({ data: form.fields }, { status: 200 });
// }

export async function GET(request: Request) {
    const headersList = headers()
    const apiKey = headersList.get('api-key')
    if (!apiKey) return NextResponse.json({ error: 'Unauthorised - No API key' }, { status: 401 });

    // Get user with API Key
    const user = await prisma.user.findFirst({
        where: {
            apiKey
        }
    })

    if(!user) return NextResponse.json({ error: 'Unauthorised'}, { status: 401 })

    // Get list of all forms
    const forms = await prisma.form.findMany({
        where: {
            userId: user.id
        }
    })

    // Return all forms for user
    return NextResponse.json(forms)
}