import { Metadata } from "next";
import MapaSR from "../components/MapaSR";

  export const metadata: Metadata = {
    title: "Drollhaven | Slow Risers",
    description: "Conheça o mundo onde se passa Slow Risers",
  };
  
export default function Mapa() {

    return (

        <div>

            
        <MapaSR/>
        

        </div>

    )

}