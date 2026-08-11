"use client";

import Link from "next/link";
import { IconType } from "react-icons";

//Icône des réseaux sociaux
type IconeReseauSocial = {
    //Valeur : /accueil
    href: string;
    //Valeur : icone
    icone: IconType;
};

//Style de la liste des réseaux sociaux
type StyleListeReseauxSociaux = {
    //Valeur : text-[#FFFFFF]
    couleurTexte: string;
    //Valeur : text-md xs:text-lg sm:text-2xl
    tailleTexte: string;
    //Valeur : flex flex-col pl-4 pb-2 xs:pb-4 sm:pb-6 text-md gap-5 xs:text-lg xs:gap-6 sm:text-2xl sm:gap-7
    positionnement: string;
};

//Animation de la liste des reseaux sociaux
type AnimationReseauxSociaux = {
    //Valeur : animation-glisser-gauche-fondu
    animation: string;
};

export type ReseauxSociauxProps = {
    iconesReseauxSociaux: IconeReseauSocial[];
    styleReseauxSociaux: StyleListeReseauxSociaux;
    animationReseauxSociaux: AnimationReseauxSociaux;
};

export default function ListeIconesReseauxSociaux({ iconesReseauxSociaux, styleReseauxSociaux, animationReseauxSociaux }: ReseauxSociauxProps) {
    return (
        <div className={`${styleReseauxSociaux.positionnement} ${styleReseauxSociaux.tailleTexte} ${styleReseauxSociaux.couleurTexte}`}>
            {iconesReseauxSociaux.map((unReseauSocial, index) => {
                const IconeReseauSocial = unReseauSocial.icone;
                        
                return (
                    <Link  key={index} href={unReseauSocial.href} className={`${animationReseauxSociaux.animation} opacity-0`} style={{ animationDelay: `${index * 250}ms`}}>
                        <IconeReseauSocial className="w-5 xs:w-6 sm:w-7 h-auto"/>
                    </Link>
                )
            })}
        </div>
    );
}