/*BARRE NAVIGATION PC*/
"use client"

import { useState, useEffect, ReactNode } from "react";

//Props du composant
type BarreNavigationProps = {
    couleurFond: string;
    couleurFondScroll: string;
    activerScroll?: boolean;
    children: ReactNode;
};

export default function BarreNavigationPC({children, couleurFond, couleurFondScroll, activerScroll = true}: BarreNavigationProps) {

    //Variables
    const [scroll, setScroll] = useState<boolean>(false);

    //Gére le scroll de la page pour le barre de navigation
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
            <nav className={`sticky inset-x-0 top-0 hidden md:flex justify-center items-center py-2 transition-all duration-300 ${activerScroll ? scroll ? couleurFond : couleurFondScroll : couleurFond} md:gap-16 lg:gap-24 xl:gap-28 animation-glisser-haut`}>
                {children}
            </nav>
        </>
    );
}

