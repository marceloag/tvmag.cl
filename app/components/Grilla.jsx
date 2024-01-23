'use client';
import React, { useState } from 'react';
import BotonCanal from './BotonCanal';

function Grilla({ canales, setStream, stream }) {
  const [gridType, setGridType] = useState('grid');

  return (
    <div className="flex flex-col col-span-2">
      <div className="flex flex-row gap-2 p-3 justify-start md:justify-start cursor-pointer">
        {/* <a onClick={() => setGridType('col')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <path
              fill="#ffffff"
              d="M88 64a8 8 0 0 1 8-8h120a8 8 0 0 1 0 16H96a8 8 0 0 1-8-8Zm128 56H96a8 8 0 0 0 0 16h120a8 8 0 0 0 0-16Zm0 64H96a8 8 0 0 0 0 16h120a8 8 0 0 0 0-16ZM56 56H40a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16Zm0 64H40a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16Zm0 64H40a8 8 0 0 0 0 16h16a8 8 0 0 0 0-16Z"
            />
          </svg>
        </a> */}
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
      </div>
      <div className="h-full">
        <div className="flex-row flex flex-wrap pb-12 justify-center md:justify-center xl:justify-start gap-2 flex-grow">
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
