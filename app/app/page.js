'use client';
import React, { Suspense, useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Image from 'next/image';
import Grilla from '../components/Grilla';

function Page() {
  const defaultCanal = {
    canal: 'Anuncios',
    url: 'https://ndstrdjibzmdxkijryhf.supabase.co/storage/v1/object/public/logos/spotInacapGenerico.mp4?t=2023-11-28T22%3A54%3A12.628Z',
    avatar: ''
  };
  const [canales, setCanales] = useState([]);
  const [stream, setStream] = useState(defaultCanal);
  const [currentChannel, setCurrentChannel] = useState(0);

  useEffect(() => {
    const getCanales = async function getCanales() {
      const response = await fetch(
        'https://ndstrdjibzmdxkijryhf.supabase.co/rest/v1/canales?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kc3RyZGppYnptZHhraWpyeWhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyMDkzNzksImV4cCI6MjAxNjc4NTM3OX0.-X8V1EWE8RXTX7bDv-W-IHUeKoPBNMsj7QNn10HDOtM'
      );
      const json = await response.json();
      return json;
    };

    getCanales().then((data) => {
      setCanales(data);
    });
  }, []);

  return (
    <div className="w-full h-screen bg-slate-900 flex flex-col justify-around items-center ">
      <header className="m-6 w-10/12">
        <Image src="/tvmag.svg" alt="Tv Mag" width="100" height={200} />
      </header>
      <div className="w-10/12 items-start justify-center bg-slate-900 grid grid-cols-1 md:grid-cols-5 md:grid-rows-1 gap-4 auto-rows-min">
        <div className="aspect-video col-span-3">
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
        {/* <div className="flex flex-col overflow-y-scroll col-span-2 col-start-4 row-span-1 h-fit"> */}
        <Grilla
          canales={canales}
          setStream={setStream}
          stream={stream}
          gridMode={'grid'}
        />
        {/* </div> */}
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
