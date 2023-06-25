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
      hitung15: body.hitung15,
      hitung16: body.hitung16,
      hitung17: body.hitung17,
      hitung18: body.hitung18,
      hitung19: body.hitung19,
      hitung20: body.hitung20,
      hitung21: body.hitung21,
      hitung22: body.hitung22,
      hitung23: body.hitung23,
      hitung24: body.hitung24,
      hitung25: body.hitung25,
      hitung26: body.hitung26,
      hitung27: body.hitung27,
      hitung28: body.hitung28,
      hitung29: body.hitung29,
      hitung30: body.hitung30,
      hitung31: body.hitung31,
      hitung32: body.hitung32,
      hitung33: body.hitung33,
      hitung34: body.hitung34,
      hitung35: body.hitung35,
      hitung36: body.hitung36
    }
  })
  return NextResponse.json(dataResponden)


}
