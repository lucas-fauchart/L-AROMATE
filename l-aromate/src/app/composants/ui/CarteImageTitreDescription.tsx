/* CARTE IMAGE TITRE DESCRIPTION */

"use client";

import ImageElement, { type ImageElementProps } from "./ImageElement";
import Texte, { type TexteProps } from "./Texte";
import TitreAvecSeparation, { type TitreAvecSeparationProps, } from "./TitreAvecSeparation";

export type CarteImageTitreDescriptionProps = {
    titreAvecSeparationProps: TitreAvecSeparationProps;
    texteProps: TexteProps;
    imageElementProps: ImageElementProps;

    imagePosition?: "gauche" | "droite" | "haut" | "bas";

    classNameCarte: string;
    classNameContenu: string;
    classNameImage: string;

    onClick?: () => void;
};

export default function CarteImageTitreDescription({ titreAvecSeparationProps, texteProps, imageElementProps, imagePosition = "bas", classNameCarte, classNameContenu, classNameImage, onClick }: CarteImageTitreDescriptionProps) {

    const positionImage = { 
        gauche: "flex-row", 
        droite: "flex-row-reverse", 
        haut: "flex-col", 
        bas: "flex-col-reverse" 
    }[imagePosition];

    return (
        <div className={`flex ${positionImage} ${classNameCarte}`} onClick={onClick}>
            <div className={classNameContenu}>
                <TitreAvecSeparation {...titreAvecSeparationProps} />

                <Texte {...texteProps} />
            </div>

            <div className={classNameImage}>
                <ImageElement {...imageElementProps} />
            </div>
        </div>
    );
}