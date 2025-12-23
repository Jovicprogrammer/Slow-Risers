


import { Metadata } from "next";
import NavbarSR from "./components/Navbar";
import FooterSR from "./components/Footer";
import CapaSR from "./components/Capa";
import HookPersonagens from "./components/Hook-Personagens";
import PlaylistSR from "./components/Playlist";
import SobreSR from "./components/Sobre";
import HomeNavSR from "./components/HomeNav";

export const metadata: Metadata = {
  title: "Slow Risers",
  description: "Página inicial de Slow Risers",
};


export default function HomeSlowRisers() {

    return (

        <div className="bg-linear-to-b bg-vapid to-vanished ">


        <NavbarSR/>

        <div id="topo-sr">
          <CapaSR/>
        </div>

        <div id="sobre-sr">
        <SobreSR/>
        </div>

        <div id="hook-sr">
        <HookPersonagens/>
        </div>

        <div id="playlist-sr">
        <PlaylistSR/>
        </div>

        <HomeNavSR/>

        <FooterSR />

        </div>

    )

}