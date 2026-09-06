/*LISTE LIENS*/
"use client";

import Lien, {type LienProps} from "./Lien";
import Liste, { type ListeProps } from "./Liste";

//Lien
type Lien = {
    nom: string;
    href: string;
};

//Props du composant
export type ListeLiensProps = {
    liens: Lien[];
    classNameListe: string;
    classNameElementListe?: string;
    animationDelayListe?: number;
};

export default function ListeLiens({ liens, classNameListe, classNameElementListe, animationDelayListe = 0 }: ListeLiensProps) {

    const listeProps: ListeProps = { classNameGlobal: classNameListe, classNameElement: classNameElementListe, animationDelay: animationDelayListe, elements: liens.map((unLien) => (
            <Lien key={unLien.href} href={unLien.href} contenu={unLien.nom} className=""/>
        )),
    };  

    return (
        <Liste {...listeProps} />
    );
}