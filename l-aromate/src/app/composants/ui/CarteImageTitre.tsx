/* CARTE IMAGE TITRE */

"use client";

import ImageElement, { type ImageElementProps } from "./ImageElement";
import Titre, { type TitreProps } from "./Titre";

export type CarteImageTitreProps = {
    titreProps: TitreProps;
    imageElementProps: ImageElementProps;

    imagePosition?: "gauche" | "droite" | "haut" | "bas";

    classNameCarte: string;
    classNameTitre: string;
    classNameImage: string;

    onClick?: () => void;
};

export default function CarteImageTitre({ titreProps, imageElementProps, imagePosition = "gauche", classNameCarte, classNameTitre, classNameImage, onClick }: CarteImageTitreProps) {

    const positionImage = { 
        gauche: "flex-row", 
        droite: "flex-row-reverse", 
        haut: "flex-col", 
        bas: "flex-col-reverse" 
    }[imagePosition];

    return (
        <div className={`flex ${positionImage} ${classNameCarte}`} onClick={onClick}>
            <div className={classNameImage}>
                <ImageElement {...imageElementProps} />
            </div>

            <div className={classNameTitre}>
                <Titre {...titreProps} />
            </div>
        </div>
    );
}