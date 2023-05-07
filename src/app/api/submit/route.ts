import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
import type { DataResponden } from '@prisma/client';


export async function POST(request: Request) {
  // const { name, university, major, country, count1, count2, count3 } = req.body;
  const body: DataResponden = await request.json()
  const dataResponden = await prisma.dataResponden.create({
    data: {
      name: body.name,
      universitas: body.universitas,
      prodi: body.prodi,
      negara: body.negara,
      status: body.status,
      hitung1: body.hitung1,
      hitung2: body.hitung2,
      hitung3: body.hitung3,
    }
  })
  return NextResponse.json(dataResponden)


}
