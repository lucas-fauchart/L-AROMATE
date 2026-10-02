/*TEXTE*/
"use client";

import { ReactNode } from "react";
import AnimationScroll from "../animations/AnimationScroll";

//Props du composant
export type TexteProps = {
    texte: ReactNode;
    className?: string;
    animationTexte: { animation: string; delay?: number };
};

export default function Texte({ texte, className, animationTexte }: TexteProps) {

    return (
        <AnimationScroll animation={animationTexte.animation} delay={animationTexte.delay}>
            <p className={className}>
                {texte}
            </p>
        </AnimationScroll>
    );
}