/*LISTE DE CATEGORIE*/
"use client";

import Link from "next/link";

//Catégorie de navigation
type CategorieNavigation = {
    //Valeur : Accueil
    nom: string;
    //Valeur : /accueil
    href: string;
};

//Style de la liste
type StyleListeNavigation = {
    //Valeur : text-[#FFFFFF]
    couleurTexte: string;
    //Valeur : text-md xs:text-lg sm:text-2xl
    tailleTexte: string;
    //Valeur : flex flex-col pl-4 pb-2 xs:pb-4 sm:pb-6 text-md gap-5 xs:text-lg xs:gap-6 sm:text-2xl sm:gap-7
    positionnement: string;
};

//Animation de la liste
type AnimationListeNavigation = {
    //Valeur : animation-glisser-gauche-fondu
    animation: string;
};

//Props pour la liste des catégories de navigation 
export type ListeNavigationProps = {
    categoriesNavigations: CategorieNavigation[];
    styleListeNavigation: StyleListeNavigation;
    animationListeNavigation : AnimationListeNavigation;
};

export default function ListeCategorie({ categoriesNavigations, styleListeNavigation, animationListeNavigation }: ListeNavigationProps) {
    return (
        <ul className={`${styleListeNavigation.positionnement} ${styleListeNavigation.tailleTexte} ${styleListeNavigation.couleurTexte}`}>
            {categoriesNavigations.map((uneCategorie, index) => (
                <li key={index} className={`${animationListeNavigation.animation} opacity-0`} style={{ animationDelay: `${index * 250}ms`}}>
                    <Link href={uneCategorie.href}>
                        {uneCategorie.nom}
                    </Link>
                </li>
            ))}
        </ul>
    );
}