'use client'
import React from 'react'
import Image from 'next/image'

function BotonCanal({canal, cambiarCanal}) {
  return (
    <a className="flex flex-row bg-slate-300 w-full py-4 px-2 justify-between items-center mb-1" onClick={() => cambiarCanal(canal)} >
      <Image src={canal.avatar} width="32" height="32" className="rounded-full" alt={canal.canal}/>
      <h1 className="text-slate-700 font-bold w-32">{canal.canal}</h1>
      <div>
      </div>
      <div>
        Play
      </div>
    </a>
  )
}

export default BotonCanal