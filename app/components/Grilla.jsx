'use client';
import React, { useState } from 'react';
import BotonCanal from './BotonCanal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Grilla({ canales, setStream, stream }) {
  const [gridType, setGridType] = useState('grid');

  return (
    <div className="flex flex-col col-span-3 xl:w-5/12 md:w-full">
      <div className="text-white font-light p-2 my-3 flex flex-row items-center justify-between">
        <div className="w-auto">
          <b className="font-extrabold flex flex-row gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
              <path d="M16 3l-4 4l-4 -4" />
              <path d="M15 7v13" />
              <path d="M18 15v.01" />
              <path d="M18 12v.01" />
            </svg>
            {stream.canal}
          </b>
        </div>
        {/* <div
          className="w-auto flex flex-row items-center gap-2 cursor-pointer text-sm rounded-md bg-slate-700"
          onClick={() => {
            const url = stream.slug && 'http://www.tvmag.cl/app/' + stream.slug;
            navigator.clipboard.writeText(url);
            toast('📋 Enlace copiado al portapapeles!', {
              position: 'bottom-right',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              theme: 'dark'
            });
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 256 256"
            className="bg-green-500 p-1 rounded-l-md"
          >
            <path
              fill="white"
              d="M176 162a37.9 37.9 0 0 0-28.3 12.67l-48.9-31.43a37.9 37.9 0 0 0 0-30.48l48.9-31.43a38 38 0 1 0-6.5-10.09l-48.9 31.43a38 38 0 1 0 0 50.66l48.9 31.43A38 38 0 1 0 176 162m0-132a26 26 0 1 1-26 26a26 26 0 0 1 26-26M64 154a26 26 0 1 1 26-26a26 26 0 0 1-26 26m112 72a26 26 0 1 1 26-26a26 26 0 0 1-26 26"
            />
          </svg>
          {stream.slug && 'http://www.tvmag.cl/app/' + stream.slug}
          <ToastContainer />
        </div> */}
      </div>
      {/* <div className="flex flex-row gap-2 p-3 justify-start md:justify-start cursor-pointer">
        <a onClick={() => setGridType('grid')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 16 16"
          >
            <path
              fill="#ffffff"
              d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"
            />
          </svg>
        </a>
      </div> */}
      <div className="h-full flex-col items-center justify-center">
        <div className="md:grid-cols-5 gap-1  justify-center md:justify-center xl:justify-start grid grid-cols-3 flex-auto xl:grid xl:grid-cols-6 xl:gap-2 px-2">
          {canales.map((canal, index) => {
            return (
              <BotonCanal
                key={index}
                onPress={() => {
                  setStream(canal);
                }}
                canal={canal}
                cambiarCanal={setStream}
                stream={stream}
                gridType={gridType}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Grilla;
