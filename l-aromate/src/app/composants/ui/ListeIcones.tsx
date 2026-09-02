/*LISTE ICONE*/
"use client";

import Lien from "./Lien";
import Liste, { type ListeProps } from "./Liste";
import IconeElement from "./IconeElement";
import { IconType } from "react-icons";

//Icone
type Icone = {
    href: string;
    icone: IconType;
};

//Props du composant
export type ListeIconesProps = {
    icones: Icone[];
    classNameListe: string;
    classNameElementListe: string;
    animationDelayListe: number;
};

export default function ListeIcones({ icones, classNameListe, classNameElementListe, animationDelayListe }: ListeIconesProps) {

    const listeProps: ListeProps = { classNameGlobal: classNameListe, classNameElement: classNameElementListe, animationDelay: animationDelayListe,
        elements: icones.map((uneIcone) => {
            const Icone = uneIcone.icone;

            return (
                <Lien key={uneIcone.href} href={uneIcone.href} className="" 
                    contenu={ <IconeElement icone={Icone} className="w-5 xs:w-6 sm:w-7 h-auto"/> }
                />
            );
        }),
    };

    return (
        <Liste {...listeProps} />
    );
}