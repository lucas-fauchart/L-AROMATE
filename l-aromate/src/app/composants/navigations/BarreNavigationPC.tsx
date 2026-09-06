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
            <nav className={`sticky inset-x-0 top-0 z-50 hidden w-full lg:flex justify-center items-center py-2 lg:gap-20 xl:gap-22 animation-glisser-haut transition-all duration-300 ${activerScroll ? scroll ? couleurFond : couleurFondScroll : couleurFond}`}>
                {children}
            </nav>
        </>
    );
}

