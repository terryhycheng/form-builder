import { GetFormById } from "@/actions/form";
import prisma from "@/lib/db";
import { headers } from "next/headers";
import { NextResponse } from "next/server"

export async function GET(request: Request, { params } : { params: { formId: string } }) {
  const headersList = headers()

  const formId = params.formId
  if (!formId) return NextResponse.json({ error: 'Form Id is required' }, { status: 400 });

  const apiKey = headersList.get('api-key')
  if (!apiKey) return NextResponse.json({ error: 'API key is required' }, { status: 400 });

  const user = await prisma.user.findFirst({
      where: {
          apiKey
      }
  })
  if(!user) return NextResponse.json({ error: 'Unauthorised'}, { status: 401 })

  const form = await GetFormById(formId);
  if (!form) return NextResponse.json({ error: 'Form not found' }, { status: 404 });

  return NextResponse.json(form)
}
