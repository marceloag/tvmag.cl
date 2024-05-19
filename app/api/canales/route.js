import { NextRequest, NextResponse } from 'next/server';

const canales = [
  {
    id: 1,
    created_at: '2023-11-28T22:14:01.592066+00:00',
    canal: 'Sur Tv',
    url: 'https://redirector.rudo.video/hls-video/ey6283je82983je9823je8jowowiekldk9838274/surtv/surtv.smil/playlist.m3u8',
    avatar: 'canales/surtv.png'
  },
  {
    id: 3,
    created_at: '2023-11-28T22:38:08.512737+00:00',
    canal: 'CDR (Canal del Deporte Regional)',
    url: 'https://live-hls-xgod.livepush.io/live_cdn/emaf6CHYV7M-RQcL2/index.m3u8',
    avatar: 'canales/cdr.png'
  },
  {
    id: 11,
    created_at: '2023-11-28T22:24:36.592386+00:00',
    canal: 'ITV Patagonia',
    url: 'https://unlimited1-cl-isp.dps.live/itv/itv.smil/playlist.m3u8',
    avatar: 'canales/itv.png'
  },
  {
    id: 2,
    created_at: '2023-11-28T22:34:42.652869+00:00',
    canal: 'Soberania',
    url: 'https://tls-cl.cdnz.cl/radiosoberania/live/playlist.m3u8',
    avatar: 'canales/soberania.png'
  },
  {
    id: 4,
    created_at: '2023-11-28T23:00:42.573283+00:00',
    canal: 'Radio Presidente Ibañez',
    url: 'https://ibanez.servercl.com/hls/live.m3u8',
    avatar: 'canales/ibanez.webp'
  },
  {
    id: 5,
    created_at: '2023-11-28T23:07:43.090721+00:00',
    canal: 'El Pingüino',
    url: 'https://redirector.rudo.video/hls-video/339f69c6122f6d8f4574732c235f09b7683e31a5/pinguinotv/pinguinotv.smil/playlist.m3u8',
    avatar: 'canales/ep.jpeg'
  },
  {
    id: 6,
    created_at: '2023-11-28T23:10:51.358783+00:00',
    canal: 'UMAG Tv',
    url: 'https://tls-cl.cdnz.cl/umag1/ngrp:live_all/playlist.m3u8',
    avatar: 'canales/umagtv.jpeg'
  },
  {
    id: 8,
    created_at: '2023-11-29T08:16:36.231764+00:00',
    canal: 'Radio Magallanes',
    url: 'https://live-hls-bn11.livepush.io/live_cdn/emR93Bg5jLMZpvtF/index.m3u8',
    avatar: 'canales/radiomagallanes.jpeg'
  },
  {
    id: 10,
    created_at: '2023-11-29T08:53:19.091498+00:00',
    canal: 'Umag Tv 2',
    url: 'https://tls-cl.cdnz.cl/umag2/live/playlist.m3u8',
    avatar: 'canales/61_UMAG_TV_2.png'
  },
  {
    id: 12,
    created_at: '2023-11-29T08:59:49.469361+00:00',
    canal: 'Milodón Tv',
    url: 'https://videosenlared.fullstreaming.ar:3161/live/ynhpdikjlive.m3u8',
    avatar: 'canales/milodon.jpeg'
  },
  {
    id: 13,
    created_at: '2023-11-29T09:00:33.512775+00:00',
    canal: 'Red Fueguina Radio',
    url: 'https://inliveserver.com:1936/11012/11012/playlist.m3u8',
    avatar: 'canales/400_Red_Fueguina_Radio.png'
  },
  {
    id: 14,
    created_at: '2023-12-04T17:25:42.168989+00:00',
    canal: 'EGM Channel',
    url: 'https://paneltv.online:1936/8186/8186/playlist.m3u8',
    avatar: 'canales/egm.jpeg'
  },
  {
    id: 9,
    created_at: '2023-11-29T08:18:10.4428+00:00',
    canal: 'Classic Channel',
    url: 'https://paneltv.online:1936/8046/8046/playlist.m3u8',
    avatar: 'canales/classicchannel.jpeg'
  },
  {
    id: 15,
    created_at: '2023-12-13T14:33:42.775857+00:00',
    canal: 'Polar Tv',
    url: 'https://stmv5.voxtvhd.com.br/radiopolar/radiopolar/playlist.m3u8',
    avatar: 'canales/rp.png'
  },
  {
    id: 7,
    created_at: '2023-11-28T23:15:31.489581+00:00',
    canal: 'Evavisión',
    url: 'https://stmv1.voxtvhd.com.br/evavisioncl/evavisioncl/playlist.m3u8',
    avatar: 'canales/evavision.png'
  },
  {
    id: 16,
    created_at: '2024-05-03T23:15:31.489581+00:00',
    canal: 'Music Puq',
    url: 'https://vdochile.com:3761/live/redupxprlive.m3u8',
    avatar: 'canales/musicpuq.jpg'
  }
];

export async function GET(request) {
  return NextResponse.json(canales);
}
