'use client';
import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import Grilla from '../components/Grilla';

function Page() {
  const defaultCanal = {
    canal: 'Anuncios',
    url: '/spottvmag-corto.mp4',
    avatar: ''
  };
  const [canales, setCanales] = useState([]);
  const [stream, setStream] = useState(defaultCanal);
  const [currentChannel, setCurrentChannel] = useState(0);
  const [mostrarGrilla, setMostrarGrilla] = useState(true);

  useEffect(() => {
    const getCanales = async function getCanales() {
      const response = await fetch('/api/canales');
      const json = await response.json();
      return json;
    };

    getCanales().then((data) => {
      setCanales(data);
    });
  }, []);

  useEffect(() => {
    posthog.capture('Canal', { property: stream.canal });
  }, [stream]);

  return (
    <div className="bg-gradient-to-b min-h-screen from-pink-400 to-violet-900 w-full h-auto xl:h-screen flex flex-col justify-around items-center ">
      <header className="mt-2 mb-2 w-1/12 xl:w-10/12 flex md:justify-center justify-center">
        <Image src="/tvmag.svg" alt="Tv Mag" width="80" height={200} />
      </header>

      <div className="w-12/12 md:w-11/12 xl:w-11/12 items-start rounded-r-2xl border-solid border-white border-opacity-40 shadow-xl shadow-slate-900 border-8 justify-center xl:flex xl:flex-row md:grid-rows-1 gap-4 auto-rows-min pr-2">
        <div className="aspect-video flex-auto xl:w-1/2 w-full bg-black">
          <ReactPlayer
            url={stream.url}
            controls={stream.canal !== 'Anuncios' ? true : false}
            autoPlay={true}
            playing={true}
            width="100%"
            height="auto"
            volume={0.5}
            onEnded={() => setStream(canales[0])}
          />
        </div>
        {mostrarGrilla && (
          <>
            {/* <a onClick={() => setMostrarGrilla(false)}>Ocultar Grilla</a> */}
            <Grilla
              canales={canales}
              setStream={setStream}
              stream={stream}
              gridMode={'grid'}
            />
          </>
        )}
      </div>
      <footer>
        <a
          href="https://play.google.com/store/apps/details?id=com.marceloag.tvMag"
          className="text-xs text-white mt-4 font-light flex flex-row gap-4 border-2 border-white/70 border-solid border-[1px] px-4 py-3 items-center justify-center hover:bg-indigo-500 transition-colors ease-in-out bg-black"
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
            <b className="leading-3">Descarga la app en</b>
            <span className="text-xl font-bold leading-5">Google Play</span>
          </div>
        </a>
      </footer>
    </div>
  );
}

export default Page;
