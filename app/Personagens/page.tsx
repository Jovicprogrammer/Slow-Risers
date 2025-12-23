import { Metadata } from "next";
import MapaSR from "../components/MapaSR";
import PersonagensSR from "../components/PersonagensSR";

  export const metadata: Metadata = {
    title: "As Figuras | Slow Risers",
    description: "Conheça os personagens que dão vida a Slow Risers",
  };
  
export default function Mapa() {

    return (

        <div>

            
        <PersonagensSR />
        

        </div>

    )

}