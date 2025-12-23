
import React from "react"
import { DreamOrphans } from "../fonts"
export default function HomeNavSR() {

    return (

        <nav className="fixed bottom-3 z-500 right-4 w-40 flex gap-2 items-center px-2 justify-center p-2 bg-underdog/80 rounded">

            <div className={`flex flex-col gap-6 items-center justify-center h-auto ${DreamOrphans.className}`}>
                <a href="#topo-sr" className="hover:animate-pulse transition">Topo</a>
                <a href="#sobre-sr" className="hover:animate-pulse transition">Sobre</a>
                <a href="#hook-sr" className="hover:animate-pulse transition  ">Os Slow Risers</a>
                <a href="#playlist-sr" className="hover:animate-pulse transition">Playlist</a>
            </div>
        </nav>

    )

}