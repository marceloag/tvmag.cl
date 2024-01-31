import {NextRequest, NextResponse} from "next/server";

export async function GET (request){
    const json = {
      anuncios: [
        {        
          id: 0,
          url : "https://www.tvmag.cl/spotinacap.mp4",
          titulo: "Inacap"
        }
      ]
    };
    
    return NextResponse.json(json);
}
