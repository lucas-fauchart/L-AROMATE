/*BARRE DE NAVIGATION PC, LOGO/NOM CENTRE*/
"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo, {type LogoProps } from "../composantsReutilisables/Logo";

//Catégories de navigation
type CategoriesNavigation = {
    //Valeur : Accueil
    nom: string;
    //Valeur : /accueil
    href: string;
};

//Style du menu latérale mobile
type StyleBarreNavigationPC = {
    //Valeur : bg-[#292B49]
    couleurFond: string;
    //Valeur : text-[#292B49]
    couleurTexteCategorie: string;
};

//Props de la barre de navigation PC
type BarreNavigationProps = {
    categoriesGauche: CategoriesNavigation[];
    categoriesDroite: CategoriesNavigation[];
    stylesBarreNavigationPC: StyleBarreNavigationPC;
    logo: LogoProps;
};

export default function BarreNavigationPC({categoriesGauche, categoriesDroite, stylesBarreNavigationPC, logo}: BarreNavigationProps) {
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
            <nav className={`fixed inset-x-0 top-0 hidden md:flex justify-center items-center py-2 transition-all duration-300 ${scroll ? stylesBarreNavigationPC.couleurFond : "bg-transparent" } md:gap-16 lg:gap-24 xl:gap-28 animation-glisser-haut`}>
                {/*Catégories de navigations*/}
                <ul className={`flex md:gap-12 lg:gap-20 xl:gap-24 md:text-sm lg:text-base xl:text-lg ${stylesBarreNavigationPC.couleurTexteCategorie}`}>
                    {categoriesGauche.map((uneCategorie, index) =>(
                        <li key={index}><Link href={uneCategorie.href}>{uneCategorie.nom}</Link></li>
                    ))}          
                </ul>

                {/*Image logo*/}
                <Logo {...logo}/>

                {/*Catégories de navigations*/}
                <ul className={`flex md:gap-12 lg:gap-20 xl:gap-24 md:text-sm lg:text-base xl:text-lg`}>
                    {categoriesDroite.map((uneCategorie, index) =>(
                        <li key={index}><Link href={uneCategorie.href}>{uneCategorie.nom}</Link></li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

