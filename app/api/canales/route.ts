import { NextResponse } from 'next/server';

export async function GET() {
  const channels = [
    {
      id: 1,
      created_at: '2023-11-28T22:14:01.592066+00:00',
      canal: 'Sur Tv',
      url: 'https://redirector.rudo.video/hls-video/ey6283je82983je9823je8jowowiekldk9838274/surtv/surtv.smil/playlist.m3u8',
      avatar: 'canales/surtv.png',
      slug: 'sur-tv'
    },
    {
      id: 3,
      created_at: '2023-11-28T22:38:08.512737+00:00',
      canal: 'CDR (Canal del Deporte Regional)',
      url: 'https://mediacp.nnw.cl:19360/cdr/cdr.m3u8',
      avatar: 'canales/cdr.png',
      slug: 'cdr'
    },
    {
      id: 11,
      created_at: '2023-11-28T22:24:36.592386+00:00',
      canal: 'ITV Patagonia',
      url: 'https://unlimited1-cl-isp.dps.live/itv/itv.smil/playlist.m3u8',
      avatar: 'canales/itv.png',
      slug: 'itv-patagonia'
    },
    {
      id: 2,
      created_at: '2023-11-28T22:34:42.652869+00:00',
      canal: 'Soberania',
      url: 'https://tls-cl.cdnz.cl/radiosoberania/live/playlist.m3u8',
      avatar: 'canales/soberania.png',
      slug: 'soberania'
    },
    {
      id: 4,
      created_at: '2023-11-28T23:00:42.573283+00:00',
      canal: 'Radio Presidente Ibañez',
      url: 'https://ibanez.servercl.com/hls/live.m3u8',
      avatar: 'canales/ibanez.webp',
      slug: 'ibanez'
    },
    {
      id: 5,
      created_at: '2023-11-28T23:07:43.090721+00:00',
      canal: 'El Pingüino',
      url: 'https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/pinguinotv/pinguinotv.smil/playlist.m3u8',
      avatar: 'canales/ep.jpeg',
      slug: 'el-pinguino'
    },
    {
      id: 6,
      created_at: '2023-11-28T23:10:51.358783+00:00',
      canal: 'UMAG Tv',
      url: 'https://tls-cl.cdnz.cl/umag1/ngrp:live_all/playlist.m3u8',
      avatar: 'canales/umagtv.jpeg',
      slug: 'umag-tv'
    },
    {
      id: 8,
      created_at: '2023-11-29T08:16:36.231764+00:00',
      canal: 'Radio Magallanes',
      url: 'https://us.streaminghd.cl/radiomagallanes/video.m3u8',
      avatar: 'canales/radiomagallanes.jpeg',
      slug: 'radio-magallanes'
    },
    {
      id: 10,
      created_at: '2023-11-29T08:53:19.091498+00:00',
      canal: 'Umag Tv 2',
      url: 'https://tls-cl.cdnz.cl/umag2/live/playlist.m3u8',
      avatar: 'canales/61_UMAG_TV_2.png',
      slug: 'umag-tv-2'
    },
    {
      id: 12,
      created_at: '2023-11-29T08:59:49.469361+00:00',
      canal: 'Milodón Tv',
      url: 'https://video8.servidordevideo.net:3161/live/ynhpdikjlive.m3u8',
      avatar: 'canales/milodon.jpeg',
      slug: 'milodon-tv'
    },
    {
      id: 13,
      created_at: '2023-11-29T09:00:33.512775+00:00',
      canal: 'Red Fueguina Radio',
      url: 'https://inliveserver.com:1936/11012/11012/playlist.m3u8',
      avatar: 'canales/400_Red_Fueguina_Radio.png',
      slug: 'red-fueguina-radio'
    },
    {
      id: 14,
      created_at: '2023-12-04T17:25:42.168989+00:00',
      canal: 'EGM Channel',
      url: 'https://paneltv.online:1936/8186/8186/playlist.m3u8',
      avatar: 'canales/egm.jpeg',
      slug: 'egm-channel'
    },
    {
      id: 9,
      created_at: '2023-11-29T08:18:10.4428+00:00',
      canal: 'Classic Channel',
      url: 'https://paneltv.online:1936/8046/8046/playlist.m3u8',
      avatar: 'canales/classicchannel.jpeg',
      slug: 'classic-channel'
    },
    // {
    //   id: 15,
    //   created_at: '2023-12-13T14:33:42.775857+00:00',
    //   canal: 'Polar Tv',
    //   url: 'https://stmv5.voxtvhd.com.br/radiopolar/radiopolar/playlist.m3u8',
    //   avatar: 'canales/rp.png',
    //   slug: 'polar-tv'
    // },
    {
      id: 7,
      created_at: '2023-11-28T23:15:31.489581+00:00',
      canal: 'Evavisión',
      url: 'https://stmv2.casttv.com.br/evavision/evavision/playlist.m3u8',
      avatar: 'canales/evavision.png',
      slug: 'evavision'
    },
    {
      id: 16,
      created_at: '2024-05-03T23:15:31.489581+00:00',
      canal: 'Music Puq',
      url: 'https://vdochile.com:3131/live/redupxprlive.m3u8',
      avatar: 'canales/musicpuq.jpg',
      slug: 'music-puq'
    },
    {
      id: 17,
      created_at: '2024-06-14T10:30:31.489581+00:00',
      canal: 'Estación Sur',
      url: 'https://paneltv.online:1936/8020/8020/playlist.m3u8',
      avatar: 'canales/estacionsur.png',
      slug: 'estacion-sur'
    },
    {
      id: 18,
      created_at: '2024-06-14T11:20:31.489581+00:00',
      canal: 'Salesianos Tv Natales',
      url: 'https://v2.tustreaming.cl:443/fagnano/index.m3u8',
      avatar: 'canales/salesianostv.jpg',
      slug: 'salesianos-tv'
    },
    {
      id: 19,
      created_at: '2024-10-11T11:20:31.489581+00:00',
      canal: 'CTV35',
      url: 'https://paneltv.online:1936/8040/8040/playlist.m3u8',
      avatar: 'canales/ctv35.png',
      slug: 'ctv35'
    }
  ];

  return NextResponse.json(channels);
}
