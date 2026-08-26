/*LISTE RESEAUX SOCIAUX*/
"use client";

import Lien from "./Lien";
import Liste, { type ListeProps } from "./Liste";
import IconeElement from "./IconeElement";
import { IconType } from "react-icons";

//Icone réseau social
type IconeReseauSocial = {
    href: string;
    icone: IconType;
};

//Props du composant
export type ListeReseauxSociauxProps = {
    iconesReseauxSociaux: IconeReseauSocial[];
    classNameListe: string;
    classNameElementListe: string;
    animationDelayListe: number;
};

export default function ListeReseauxSociaux({ iconesReseauxSociaux, classNameListe, classNameElementListe, animationDelayListe }: ListeReseauxSociauxProps) {

    const listeProps: ListeProps = { classNameGlobal: classNameListe, classNameElement: classNameElementListe, animationDelay: animationDelayListe,
        elements: iconesReseauxSociaux.map((uneIconeReseauSocial) => {
            const Icone = uneIconeReseauSocial.icone;

            return (
                <Lien key={uneIconeReseauSocial.href} href={uneIconeReseauSocial.href} className="" 
                    contenu={ <IconeElement icone={Icone} className="w-5 xs:w-6 sm:w-7 h-auto"/> }
                />
            );
        }),
    };

    return (
        <Liste {...listeProps} />
    );
}