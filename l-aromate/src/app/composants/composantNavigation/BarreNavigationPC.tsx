/*BARRE NAVIGATION PC*/
"use client"

import { useState, useEffect } from "react";
import ImageElement, { type ImageElementProps } from "../composantsReutilisables/ImageElement";
import ListeNavigation, { type ListeNavigationProps } from "../composantsReutilisables/ListeNavigation";

//Props du composant
type BarreNavigationProps = {
    imageElement: ImageElementProps;
    couleurFond: string;
    couleurFondScroll: string;
    activerScroll?: boolean;
    listeNavigationGauche: ListeNavigationProps;
    listeNavigationDroite : ListeNavigationProps;
};

export default function BarreNavigationPC({imageElement, listeNavigationGauche, listeNavigationDroite, couleurFond, couleurFondScroll, activerScroll = true}: BarreNavigationProps) {

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
                {/*Catégories de navigation gauche*/}
                <ListeNavigation {...listeNavigationGauche}/>
                {/*Image logo*/}
                <ImageElement {...imageElement}/>
                {/*Catégories de navigation droite*/}
                <ListeNavigation {...listeNavigationDroite}/>
            </nav>
        </>
    );
}

