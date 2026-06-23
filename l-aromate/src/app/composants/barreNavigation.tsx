import Image from "next/image";

export default function barreNavigation() {
    return (

        <>

      
        <nav className="absolute inset-x-0 top-0 flex gap-30 justify-center items-center text-lg mt-2">
            <ul className="flex gap-25">
                <li>Accueil</li>
                <li>La Carte</li>
                <li>Notre Histoire</li>
            </ul>

            <Image className="" src="/logo/logo_blanc_aromate.png" alt="logo aromato" width={40} height={40}/>

            <ul className="flex gap-25">
                <li>Les Aromes</li>
                <li>Réservation</li>
                <li>Contact</li>
            </ul>
        </nav>
        </>
    );
}