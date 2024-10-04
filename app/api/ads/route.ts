import { NextResponse } from 'next/server';

export async function GET() {
  const json = {
    anuncios: [
      {
        id: 0,
        url: 'https://www.tvmag.cl/spottvmag-corto.mp4',
        titulo: 'Tv Mag Generico'
      }
    ]
  };

  return NextResponse.json(json);
}
