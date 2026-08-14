/*BARRE DE NAVIGATION MOBILE, LOGO/NOM GAUCHE, MENU BURGER DROITE*/
"use client"

import { useState, useEffect } from "react";
import Logo, {type LogoProps} from "../composantsReutilisables/Logo";
import BoutonSwitchIcone, { type BoutonSwitchIconeProps } from "../composantsReutilisables/BoutonSwitchIcone";

//Style de la barre de navigation mobile
type StyleBarreNavigationMobile = {
    //Valeur : bg-[#292B49]
    couleurFond: string;
    couleurIcone: string;
};

//Props de la barre de navigation mobile
type BarreNavigationMobileProps = {
    stylesBarreNavigationMobile: StyleBarreNavigationMobile;
    logo: LogoProps;
    boutonSwitchIcone : BoutonSwitchIconeProps;
};

export default function BarreNavigationMobile({stylesBarreNavigationMobile, logo, boutonSwitchIcone} : BarreNavigationMobileProps) {
    //Variables
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
                {/*Image logo*/}
                <Logo {...logo}/>
                {/*Icone menu et croix pour le menu latérale mobile*/}
                <BoutonSwitchIcone {...boutonSwitchIcone}/>
            </nav>
        </>
    );
}