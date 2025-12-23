import Image from "next/image"
import { DreamOrphans, ElementaryGothic } from "../fonts"


export default function CapaSR() {

    return (

        <div className="flex flex-col items-center justify-center h-screen pt-20">

        <h1 className={`text-6xl ${DreamOrphans.className}`}>Vesquicio lhe dá boas vindas!!</h1>

        <Image src='/images/cover.gif' width={900} height={900} alt="Capa do site Vesquicio" className="w-110 pt-10">
        </Image>
        
        {/* <video autoPlay loop playsInline>
             <source src="/images/cover-video.mp4" type="video/mp4" />
        </video> */}


        </div>


    )

}
