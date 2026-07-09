/*BARRE DE NAVIGATION MOBILE, LOGO/NOM GAUCHE, MENU BURGER DROITE*/
"use client"

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

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

//Ouverture du menu latéral
type OuvertureMenuLateral = {
    //Valeur : false
    ouvertureMenuLateral: boolean;
    setOuvertureMenuLateral: React.Dispatch<React.SetStateAction<boolean>>;
    /*const fermerMenuLateral = () => { setMenuLateralOuvert(false); };*/
    ouvrirMenu: () => void;
    fermerMenu: () => void;
};

//Props de la barre de navigation mobile
type BarreNavigationMobileProps = {
    imageLogo: ImageLogo;
    stylesBarreNavigationMobile: StyleBarreNavigationMobile;
    ouvertureMenuLateral: OuvertureMenuLateral;
};

export default function BarreNavigationMobile({imageLogo, stylesBarreNavigationMobile, ouvertureMenuLateral} : BarreNavigationMobileProps) {
    //Variables
    const [animationActive, setAnimationActive] = useState<boolean>(false);
    const [scroll, setScroll] = useState<boolean>(false);

    //Gére le scroll de la page pour le barre de navigation mobile
    useEffect(() => {
        //Déclanchement du scroll
        const gererScroll = () => {
            setScroll(window.scrollY > 0);
        };

        window.addEventListener("scroll", gererScroll);

        return () => {
            window.removeEventListener("scroll", gererScroll);
        };
    }, []);
    
    return (
        <>
           <nav className={`fixed inset-x-0 top-0 z-50 flex justify-between items-center text-lg py-4 px-6 md:hidden transition-all duration-300 ${scroll ? stylesBarreNavigationMobile.couleurFond : "bg-transparent" } animation-glisser-haut`}>
                <Image className={`w-8 xs:w-9 sm:w-10 h-auto`} src={imageLogo.src} alt={imageLogo.alt} width={224} height={405} loading="eager"/>
                {/*Icone menu et croix pour le menu latérale mobile*/}
                <button onClick={() => {
                    setAnimationActive(true);
                    if (ouvertureMenuLateral.ouvertureMenuLateral) {
                        ouvertureMenuLateral.fermerMenu();
                    }    
                    else {
                        ouvertureMenuLateral.ouvrirMenu();
                    }
                }}>   
                    <div className={animationActive ? (ouvertureMenuLateral.ouvertureMenuLateral ? "animation-rotation-gauche" : "animation-rotation-droite") : ""}>
                        {ouvertureMenuLateral.ouvertureMenuLateral ? <X className={`w-6 xs:w-7 sm:w-8 h-auto ${stylesBarreNavigationMobile.couleurIcone}`}/> : <Menu className={`w-6 xs:w-7 sm:w-8 h-auto ${stylesBarreNavigationMobile.couleurIcone}`}/>}    
                    </div>      
                </button>
            </nav>
        </>
    );
}