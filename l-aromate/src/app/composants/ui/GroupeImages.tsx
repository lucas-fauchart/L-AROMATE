/*GROUPE IMAGES*/
"use client";

import ImageElement, { type ImageElementProps } from "./ImageElement";
import AnimationScroll from "../animations/AnimationScroll";

type ImageGroupe = {
    imageElementProps: ImageElementProps,
}

//Props du composant
export type GroupeImagesProps = { 
    lesImagesGroupe: ImageGroupe[],
    className: string,
    animationImageGroupe?: { animation?: string; delay?: number };
};

export default function GroupeImages({ lesImagesGroupe, className, animationImageGroupe }: GroupeImagesProps) {
    return (
        <AnimationScroll animation={animationImageGroupe?.animation ?? ""} delay={animationImageGroupe?.delay}>
            <div className={className}>
                {lesImagesGroupe.map((uneImageGroupe, index) => (
                    <ImageElement key={index} {...uneImageGroupe.imageElementProps}/>
                ))}
            </div>
        </AnimationScroll>
    );
}