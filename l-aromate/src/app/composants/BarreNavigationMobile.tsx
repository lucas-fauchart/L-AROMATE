/*BARRE DE NAVIGATION MOBILE, LOGO/NOM GAUCHE, MENU BURGER DROITE*/
"use client"

import Image from "next/image";
import { Menu, X } from "lucide-react";

type OuvertureMenuLateral = {
    //Valeur : false
    ouvertureMenuLateral: boolean;
    setOuvertureMenuLateral: React.Dispatch<React.SetStateAction<boolean>>;
};

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
    ouvertureMenuLateral: OuvertureMenuLateral;
};

export default function BarreNavigationMobile({imageLogo, stylesBarreNavigationMobile, ouvertureMenuLateral} : BarreNavigationMobileProps) {
    return (
        <>
            <nav className={`absolute inset-x-0 top-0 flex justify-between items-center text-lg py-4 px-6 md:hidden ${stylesBarreNavigationMobile.couleurFond}`}>
                {/*Image logo*/}
                <Image className={`w-8 xs:w-9 sm:w-10 h-auto`} src={imageLogo.src} alt={imageLogo.alt} width={224} height={405} loading="eager"/>
                {/*Icone menu et croix pour le menu latérale mobile*/}
                <button onClick={() => ouvertureMenuLateral.setOuvertureMenuLateral(!ouvertureMenuLateral.ouvertureMenuLateral)}>         
                    {ouvertureMenuLateral.ouvertureMenuLateral ? <X className={`w-6 xs:w-7 sm:w-8 h-auto ${stylesBarreNavigationMobile.couleurIcone}`}/> : <Menu className={`w-6 xs:w-7 sm:w-8 h-auto ${stylesBarreNavigationMobile.couleurIcone}`}/>}    
                </button>
            </nav>
        </>
    );
}

