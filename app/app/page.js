'use client';
import React, { Suspense, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import Grilla from '../components/Grilla';

function Page() {
  const defaultCanal = {
    canal: 'Anuncios',
    url: '/spotinacap.mp4',
    avatar: ''
  };
  const [canales, setCanales] = useState([]);
  const [stream, setStream] = useState(defaultCanal);
  const [currentChannel, setCurrentChannel] = useState(0);

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

  return (
    <div className="bg-gradient-to-b min-h-screen from-slate-500 to-slate-900 w-full h-auto xl:h-screen flex flex-col justify-around items-center ">
      <header className="mt-2 mb-2 w-1/12 xl:w-10/12 flex md:justify-start justify-center">
        <Image src="/tvmag.svg" alt="Tv Mag" width="100" height={200} />
      </header>

      <div className="w-12/12 md:w-11/12 xl:w-11/12 items-start rounded-r-2xl border-solid border-white border-opacity-40 shadow-xl shadow-slate-900 border-8 justify-center bg-slate-900 xl:flex xl:flex-row md:grid-rows-1 gap-4 auto-rows-min">
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
        <Grilla
          canales={canales}
          setStream={setStream}
          stream={stream}
          gridMode={'grid'}
        />
      </div>
      <footer>
        <a
          href="https://play.google.com/store/apps/details?id=com.marceloag.tvMag"
          className="text-xs text-white mt-8 font-light flex flex-row gap-4 border-2 border-white border-solid p-4 rounded-xl items-center justify-center hover:bg-indigo-500 transition-colors ease-in-out"
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
            Descargala en
            <span className="text-xl font-bold">Google Play</span>
          </div>
        </a>
      </footer>
    </div>
  );
}

export default Page;
