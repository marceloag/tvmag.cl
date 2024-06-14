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
        className="flex flex-row bg-slate-600 w-auto py-4 px-2 justify-start items-center mb-1 cursor-pointer "
        onClick={() => cambiarCanal(canal)}
      >
        <Image
          src={canal.avatar}
          width="32"
          height="32"
          className="rounded-full object-fit"
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
      <a className="cursor-pointer" onClick={() => cambiarCanal(canal)}>
        <div
          className={`rounded-md ${bgColor} flex flex-col aspect-square items-center justify-center`}
        >
          <Image
            src={'https://static.tvmag.cl/' + canal.avatar.slice(8)}
            className="rounded-full"
            width={70}
            height={70}
            alt={canal.canal}
          />
        </div>
      </a>
    );
  }
}

export default BotonCanal;
