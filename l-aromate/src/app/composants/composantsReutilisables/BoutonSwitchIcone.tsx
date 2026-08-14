"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { IconType } from "react-icons";

//Icône
type PremiereIcone = {
    //Valeur : icone
    icone: IconType;
};

type DeuxiemeIcone = {
    //Valeur : icone
    icone: IconType;
};

//Style du bouton switch icône
type StyleBoutonSwitchIcone = {
    //Valeur : bg-[#292B49]
    couleurIcone: string;
};

//Animation de l'ic$one
type AnimationIcone = {
    //Valeur : animation-glisser-gauche-fondu
    premiereAnimation: string;
    deuxiemeAnimation: string;
};

//Ouverture
type OuvertFermer = {
    //Valeur : false
    ouverture: boolean;
    setOuverture: React.Dispatch<React.SetStateAction<boolean>>;
    /*const fermer = () => { setMenu(false); };*/
    ouvrir: () => void;
    fermer: () => void;
};

export type BoutonSwitchIconeProps = {
    premiereIcone: PremiereIcone;
    deuxiemeIcone: DeuxiemeIcone;
    styleBoutonSwitchIcone: StyleBoutonSwitchIcone;
    animationIcone: AnimationIcone;
    ouvertureFermeture: OuvertFermer;
};


export default function BoutonSwitchIcone({ premiereIcone, deuxiemeIcone, styleBoutonSwitchIcone, animationIcone, ouvertureFermeture }: BoutonSwitchIconeProps) {

    const [animationActive, setAnimationActive] = useState(false);

    const gererClic = () => {
        setAnimationActive(true);

        if (ouvertureFermeture.ouverture) {
            ouvertureFermeture.fermer();
        } 
        else {
            ouvertureFermeture.ouvrir();
        }
    };

    const PremiereIcone = premiereIcone.icone;
    const DeuxiemeIcone = deuxiemeIcone.icone;

    return (
        <button onClick={gererClic}>
            <div className={ animationActive ? ouvertureFermeture.ouverture ? animationIcone.premiereAnimation : animationIcone.deuxiemeAnimation : "" }>

                {ouvertureFermeture.ouverture ? (
                    <PremiereIcone className={`w-6 xs:w-7 sm:w-8 h-auto ${styleBoutonSwitchIcone.couleurIcone}`} />
                ) : (
                    <DeuxiemeIcone className={`w-6 xs:w-7 sm:w-8 h-auto ${styleBoutonSwitchIcone.couleurIcone}`} />
                )}
            </div>
        </button>
    );
}