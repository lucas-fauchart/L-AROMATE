/*LISTE NAVIGATION*/
"use client";

import Lien, {type LienProps} from "./Lien";
import Liste, { type ListeProps } from "./Liste";

//Catégorie de navigation
type CategorieNavigation = {
    nom: string;
    href: string;
};

//Props du composant
export type ListeNavigationProps = {
    categoriesNavigation: CategorieNavigation[];
    classNameListe: string;
    classNameElementListe?: string;
    animationDelayListe?: number;
};

export default function ListeNavigation({ categoriesNavigation, classNameListe, classNameElementListe, animationDelayListe = 0 }: ListeNavigationProps) {

    const listeProps: ListeProps = { classNameGlobal: classNameListe, classNameElement: classNameElementListe, animationDelay: animationDelayListe, elements: categoriesNavigation.map((categorieNavigation) => (
            <Lien key={categorieNavigation.href} href={categorieNavigation.href} contenu={categorieNavigation.nom} className=""/>
        )),
    };  

    return (
        <Liste {...listeProps} />
    );
}