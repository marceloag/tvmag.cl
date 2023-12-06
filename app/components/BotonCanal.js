'use client';
import React from 'react';
import Image from 'next/image';

function BotonCanal({ canal, cambiarCanal, stream, gridType }) {
  let bgColor = '';
  stream.id === canal.id
    ? (bgColor = 'bg-indigo-700')
    : (bgColor = 'bg-slate-600');

  if (gridType == 'col') {
    return (
      <a
        className="flex flex-row bg-slate-600 w-full py-4 px-2 justify-start gap-10 items-center mb-1 cursor-pointer"
        onClick={() => cambiarCanal(canal)}
      >
        <Image
          src={canal.avatar}
          width="32"
          height="32"
          className="rounded-full"
          alt={canal.canal}
        />
        <h1 className="text-white flex-1 flex flex-col text w-auto">
          {canal.canal}
        </h1>
        <div></div>
      </a>
    );
  } else {
    return (
      <a
        className="py-1 px-2 cursor-pointer"
        onClick={() => cambiarCanal(canal)}
      >
        <div
          className={`p-2 rounded-md ${bgColor} flex flex-col items-start justify-start`}
        >
          <Image
            src={canal.avatar}
            className="rounded-full"
            width={85}
            height={85}
            alt={canal.canal}
          />
        </div>
      </a>
    );
  }
}

export default BotonCanal;
