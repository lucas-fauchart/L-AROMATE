/*TITRE*/
"use client";

import { ElementType, ReactNode } from "react";
import AnimationScroll from "../animations/AnimationScroll";

//Props du composant
export type TitreProps = {
    titre: ReactNode;
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
    animationTitre?: {
        animation?: string;
        delay?: number;
    };
};

export default function Titre({ titre, type, className, animationTitre }: TitreProps) {

    const Titre: ElementType = type;

    return (
        <AnimationScroll animation={animationTitre?.animation ?? ""} delay={animationTitre?.delay}>
            <Titre className={className}>
                {titre}
            </Titre>
        </AnimationScroll>
    );
}