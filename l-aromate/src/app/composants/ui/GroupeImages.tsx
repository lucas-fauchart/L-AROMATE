/*GROUPE IMAGES*/
"use client";

import ImageElement, { type ImageElementProps } from "./ImageElement";

type ImageGroupe = {
    imageElementProps: ImageElementProps,
}

//Props du composant
export type GroupeImagesProps = { 
    lesImagesGroupe: ImageGroupe[],
    className: string,
};

export default function GroupeImages({ lesImagesGroupe, className }: GroupeImagesProps) {
    return (
        <div className={className}>
            {lesImagesGroupe.map((uneImageGroupe, index) => (
                <ImageElement key={index} {...uneImageGroupe.imageElementProps}/>
            ))}
        </div>
    );
}