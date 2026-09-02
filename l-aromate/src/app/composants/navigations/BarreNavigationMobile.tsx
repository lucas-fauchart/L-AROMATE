/*BARRE NAVIGATION MOBILE*/
"use client"

import { useState, useEffect, ReactNode } from "react";

//Props du composant
type BarreNavigationMobileProps = {
    children: ReactNode;
    couleurFond: string;
    couleurFondScroll: string;
    activerScroll?: boolean;
    className: string;
};

export default function BarreNavigationMobile({ children, couleurFond, couleurFondScroll, activerScroll = true, className } : BarreNavigationMobileProps) {
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
                {children}
            </nav>
        </>
    );
}