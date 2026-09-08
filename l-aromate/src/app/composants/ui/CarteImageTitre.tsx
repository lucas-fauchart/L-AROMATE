/*CARTE IMAGE TITRE*/
"use client";

import ImageElement, { type ImageElementProps } from "./ImageElement";
import Titre, { type TitreProps } from "./Titre";

export type CarteImageTitreProps = {
    titreProps: TitreProps;
    imageElementProps: ImageElementProps;
    className: string;
}

export default function CarteImageTitre({ titreProps, imageElementProps, className }: CarteImageTitreProps) {
    return (
        <div className="flex w-full items-center overflow-hidden rounded-4xl bg-[#21233C]">
            
            <div className="h-[80px] w-[80px] shrink-0">
                <ImageElement {...imageElementProps}/>
            </div>

            <div className="flex flex-1 items-center justify-center px-10">
                <Titre {...titreProps}/>
            </div>

        </div>
    );
}