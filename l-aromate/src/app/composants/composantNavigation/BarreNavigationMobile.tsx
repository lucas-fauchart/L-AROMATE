/*BARRE NAVIGATION MOBILE*/
"use client"

import { useState, useEffect } from "react";
import ImageElement, { type ImageElementProps } from "../composantsReutilisables/ImageElement";
import BoutonIconeAlternante, { type BoutonIconeAlternanteProps } from "../composantsReutilisables/BoutonIconeAlternante";

//Props du composant
type BarreNavigationMobileProps = {
    imageElement: ImageElementProps;
    boutonIconeAlternante : BoutonIconeAlternanteProps;
    couleurFond: string;
    couleurFondScroll: string;
    activerScroll?: boolean;
    className: string;
};

export default function BarreNavigationMobile({ imageElement, boutonIconeAlternante, couleurFond, couleurFondScroll, activerScroll = true, className } : BarreNavigationMobileProps) {

    //Variables
    const [scroll, setScroll] = useState<boolean>(false);


    //Gére le scroll de la page pour le barre de navigation
    useEffect(() => {
        if (!activerScroll) return;

        //Déclanchement du scroll
        const gererScroll = () => {
            setScroll(window.scrollY > 0);
        };

        //Rappelle la fonction à chaque mouvement
        window.addEventListener("scroll", gererScroll);

        return () => {
            //Nettoie le useEffect
            window.removeEventListener("scroll", gererScroll);
        };
    }, [activerScroll]);
    
    return (
        <>
           <nav className={`sticky inset-x-0 top-0 z-50 md:hidden flex justify-between w-full items-center ${className} ${activerScroll ? scroll ? couleurFond : couleurFondScroll : couleurFond}`}>
                {/*Image logo*/}
                <ImageElement {...imageElement}/>
                {/*Icone menu et croix pour le menu latérale mobile*/}
                <BoutonIconeAlternante {...boutonIconeAlternante}/>
            </nav>
        </>
    );
}