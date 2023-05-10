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
      hitung4: body.hitung4,
      hitung5: body.hitung5,
      hitung6: body.hitung6,
      hitung7: body.hitung7,
      hitung8: body.hitung8,
      hitung9: body.hitung9,
      hitung10: body.hitung10,
      hitung11: body.hitung11,
      hitung12: body.hitung12,
      hitung13: body.hitung13,
      hitung14: body.hitung14,
      hitung15: body.hitung15
    }
  })
  return NextResponse.json(dataResponden)


}
