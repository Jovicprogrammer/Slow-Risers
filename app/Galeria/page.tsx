import GaleriaSR from "../components/GaleriaSR";
import FooterSR from "../components/Footer";
import { Metadata } from "next";

  export const metadata: Metadata = {
    title: "Galeria | Slow Risers",
    description: "Explore algumas peças apresentando o mundo e personagens",
  };
  
export default function Gallery() {

    return (

        <div>

            <GaleriaSR/>

        </div>

    )

}