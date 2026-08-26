/*BOUTON ICONE ALTERNANTE*/
"use client";

import { useState } from "react";
import IconeElement, { IconeElementProps } from "./IconeElement";

//Variables d'animation
type AnimationIcone = {
    premiereAnimation?: string;
    deuxiemeAnimation?: string;
};

//Variables des ouvertures et fermetures
type EtatOuverture = {
    ouvert: boolean;
    setOuvert: React.Dispatch<React.SetStateAction<boolean>>;
    ouvrir: () => void;
    fermer: () => void;
};

//Props du composant
export type BoutonIconeAlternanteProps = {
    premiereIconeElement: IconeElementProps;
    deuxiemeIconeElement: IconeElementProps;
    animationIcone: AnimationIcone;
    etatOuverture: EtatOuverture;
    className?: string;
};

export default function BoutonIconeAlternante({ premiereIconeElement, deuxiemeIconeElement, animationIcone, etatOuverture }: BoutonIconeAlternanteProps) {

    const [animationActive, setAnimationActive] = useState(false);

    const gererClic = () => {
        setAnimationActive(true);

        if (etatOuverture.ouvert) {
            etatOuverture.fermer();
        } 
        else {
            etatOuverture.ouvrir();
        }
    };

    return (
        <button onClick={gererClic}>
            <div className={ animationActive ? etatOuverture.ouvert ? animationIcone.premiereAnimation : animationIcone.deuxiemeAnimation : "" }>

                {etatOuverture.ouvert ? (
                    <IconeElement {...premiereIconeElement}/>
                ) : (
                    <IconeElement {...deuxiemeIconeElement}/>
                )}
            </div>
        </button>
    );
}