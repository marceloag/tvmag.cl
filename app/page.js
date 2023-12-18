import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <>
      <NextSeo
        title="📡 Televisión de Magallanes en vivo - Tv Mag App"
        description="Disfruta de la mejor programación de la región en tu celular,
              tablet o TV Box."
        canonical="https://www.tvmag.cl/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Tv Mag - Televisión de Magallanes en vivo',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://tvmag.cl/opengraph.png',
              width: 800,
              height: 600,
              alt: 'Tv Mag App',
              type: 'image/png'
            }
          ],
          siteName: 'Tv Mag App'
        }}
      />

      <main className="flex min-h-screen flex-col md:flex-row items-center justify-center p-2 md:p-24 bg-gradient-to-b from-slate-800 from-70% to-indigo-800">
        <div className="px-2 w-full md:w-2/3 xl:w-1/2 xl:px-32  flex flex-col items-center md:items-start justify-center gap-8">
          <Image src="/tvmag.svg" alt="Tv Mag" width="150" height={100} />
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-4xl text-white font-bold md:[text-wrap:balance] leading-8 mb-4 text-center md:text-left">
              La <span className="text-violet-500 font-black">1era APP</span> de
              Tv Magallánica en Google Play
            </h1>
            <p className="text-white [text-wrap:balance] text-center md:text-left">
              Disfruta de la mejor programación de la región en tu celular,
              tablet o TV Box.
            </p>
            <p className="text-white [text-wrap:balance] text-center md:text-left">
              Somos Apasionados por la Televisión y los contenidos regionales
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.marceloag.tvMag"
              className="text-xs text-white font-light flex flex-row gap-4 border-2 border-white border-solid px-4 py-2 rounded-xl items-center justify-center hover:bg-indigo-500 transition-colors ease-in-out bg-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 15 15"
              >
                <path
                  fill="#ffffff"
                  d="m1.5.5l.252-.432A.5.5 0 0 0 1 .5h.5Zm0 14H1a.5.5 0 0 0 .752.432L1.5 14.5Zm12-7l.252.432a.5.5 0 0 0 0-.864L13.5 7.5ZM1 .5v14h1V.5H1Zm.752 14.432l12-7l-.504-.864l-12 7l.504.864Zm12-7.864l-12-7l-.504.864l12 7l.504-.864ZM1.829 12.876l8-7l-.658-.752l-8 7l.658.752Zm-.658-10l8 7l.658-.752l-8-7l-.658.752Z"
                />
              </svg>
              <div className="flex flex-col">
                Descárgala en
                <span className="text-xl font-bold">Google Play</span>
              </div>
            </a>
            <Link
              href="/app"
              className="text-white font-regular text-md p-2 text-center md:text-left gap-4 flex flex-row border-white border-2 items-center justify-center rounded-md"
            >
              📺 Ver Online
            </Link>
          </div>
        </div>
        <div className="w-6/12 md:w-1/3 xl:w-1/2 mt-4 md:mt-0 flex flex-col items-center justify-center">
          <Image src="/3dhand.png" alt="Tv Mag" width="500" height={500} />
        </div>
      </main>
    </>
  );
}
