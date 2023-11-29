import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-800">
        <Image src="/tvmag.svg" alt='Tv Mag' width="200" height={200}/>
        <a href="#" className="text-xs text-white mt-8 font-light flex flex-row gap-4 border-2 border-white border-solid p-4 rounded-xl items-center justify-center hover:bg-indigo-500 transition-colors ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="#ffffff" d="m1.5.5l.252-.432A.5.5 0 0 0 1 .5h.5Zm0 14H1a.5.5 0 0 0 .752.432L1.5 14.5Zm12-7l.252.432a.5.5 0 0 0 0-.864L13.5 7.5ZM1 .5v14h1V.5H1Zm.752 14.432l12-7l-.504-.864l-12 7l.504.864Zm12-7.864l-12-7l-.504.864l12 7l.504-.864ZM1.829 12.876l8-7l-.658-.752l-8 7l.658.752Zm-.658-10l8 7l.658-.752l-8-7l-.658.752Z"/></svg>
          <div className='flex flex-col'>
            Descargala en
            <span className='text-xl font-bold'>Google Play</span>
          </div>
        </a>
    </main>
  )
}
