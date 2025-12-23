import { Dream_Orphans_Light, DreamOrphans } from "../fonts";

const currentDate: Date = new Date();
const currentYear: number = currentDate.getFullYear();


export default function FooterSR() {

    return (

        <div className={`flex items-center justify-center h-10 pt-10 pb-10 ${Dream_Orphans_Light.className}`}>

        <p>Vesquicio. {currentYear}</p>


        </div>


    )
}