/*BARRE DE NAVIGATION MOBILE, LOGO/NOM GAUCHE, MENU BURGER DROITE*/
"use client"

import Image from "next/image";
import { Menu } from "lucide-react";

//Image du logo
type ImageLogo = {
    //Valeur : /images/agrumes/oranges/orange_1.png
    src: string;
    //Valeur : Quartier d'orange
    alt: string;
};

//Style de la barre de navigation mobile
type StyleBarreNavigationMobile = {
    //Valeur : bg-[#292B49]
    couleurFond: string;
    couleurIcone: string;
};

//Props de la barre de navigation mobile
type BarreNavigationMobileProps = {
    imageLogo: ImageLogo;
    stylesBarreNavigationMobile: StyleBarreNavigationMobile;
};

export default function BarreNavigationMobile({imageLogo, stylesBarreNavigationMobile} : BarreNavigationMobileProps) {
    return (
        <>
            <nav className={`absolute inset-x-0 top-0 flex justify-between items-center text-lg py-2 px-6 md:hidden ${stylesBarreNavigationMobile.couleurFond}`}>
                {/*Image logo*/}
                <Image className={`w-8 xs:w-9 sm:w-10 h-auto`} src={imageLogo.src} alt={imageLogo.alt} width={224} height={405} loading="eager"/>
                {/*Icone menu latérale mobile*/}
                <Menu className={`w-6 xs:w-7 sm:w-8 h-auto ${stylesBarreNavigationMobile.couleurIcone}`}/>
            </nav>
        </>
    );
}

