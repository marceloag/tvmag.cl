'use client'
import React, { Suspense, useState, useEffect  } from 'react'
import ReactPlayer from 'react-player'
import BotonCanal from '../components/BotonCanal'

function Page() {

  useEffect(() => {
    const getCanales = async function getCanales (){
    const response = await fetch('https://ndstrdjibzmdxkijryhf.supabase.co/rest/v1/canales?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kc3RyZGppYnptZHhraWpyeWhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyMDkzNzksImV4cCI6MjAxNjc4NTM3OX0.-X8V1EWE8RXTX7bDv-W-IHUeKoPBNMsj7QNn10HDOtM')
    const json = await response.json()
    return json
    } 
    
    getCanales().then((data) => {
      setCanales(data)
    })

  } ,[]);

  const defaultCanal = {
     canal: "Anuncios", url:"https://ndstrdjibzmdxkijryhf.supabase.co/storage/v1/object/public/logos/spotInacapGenerico.mp4?t=2023-11-28T22%3A54%3A12.628Z", avatar:""
    }
  const [canales, setCanales] = useState([]);
  const [stream, setStream] = useState(defaultCanal);

  return (
    <div className="w-10/12 h-screen flex flex-col items-center justify-center">
        <ReactPlayer 
          url= {stream.url}
          controls={true}
          autoPlay={true}
          className="w-full"
          playing={true}
          width="100%"
          height="auto"
        />
      <div className='flex flex-1 w-full flex-col overflow-scroll'>
        {
          canales.map((canal, index) => {
            return <BotonCanal key={index} onPress={()=> setStream(canal)} canal={canal} cambiarCanal={setStream}/>
          })
        }
      </div>
    </div>
  )
}

export default Page