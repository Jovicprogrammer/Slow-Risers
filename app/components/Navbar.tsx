import React from "react"
import Link from "next/link"
import Image from "next/image"
import { ElementaryGothic } from "../fonts"

export default function NavbarSR() {

    return (

        <nav className={`fixed top-8 z-500 left-0 right-0 mx-auto max-w-5xl bg-wanderlust border-4 border-feisty flex flex-col sm:flex-row gap-2 items-center px-2 justify-center p-2 rounded -extralight shadow-md shadow-feisty/50 ${ElementaryGothic.className}`}>

            <div className="flex gap-6 items-center justify-center h-auto text-underdog font-bold">
                <a href="/" className="hover:bg-feisty transition ml-10">Home</a>
                <a href="/Mapa" className="hover:bg-feisty transition mr-90">Mapa</a>
                <Image className="absolute w-60 left-88 hover:rotate-12 hover:transition transition" src="/images/SlowRisersLogo.webp" alt="logo Slow Risers" width={500} height={500} ></Image>
                <a href="/Personagens" className="hover:bg-feisty transition">Personagens</a>
                <a href="/" className="hover:bg-feisty">Surpresa</a>
            </div>
        </nav>

    )

}