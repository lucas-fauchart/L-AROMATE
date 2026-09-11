/* TITRE AVEC SEPARATION */

"use client";

import Titre, { type TitreProps } from "./Titre";
import BarreSeparation, { type BarreSeparationProps } from "./BarreSeparation";
import AnimationScroll from "../animations/AnimationScroll";

// Props du composant
export type TitreAvecSeparationProps = {
    titreProps: TitreProps;
    barreSeparationProps: BarreSeparationProps;
    animationTitre: { animation: string; delay?: number; };
    animationBarre: { animation: string; delay?: number; };
    className?: string;
};

export default function TitreAvecSeparation({ titreProps, barreSeparationProps, animationTitre, animationBarre, className }: TitreAvecSeparationProps) {
    return (
        <div className={`flex flex-col items-center ${className}`}>
            <AnimationScroll animation={animationTitre.animation} delay={animationTitre.delay}>
                <Titre {...titreProps} />
            </AnimationScroll>

            <AnimationScroll animation={animationBarre.animation} delay={animationBarre.delay}>
                <BarreSeparation {...barreSeparationProps} />
            </AnimationScroll>
        </div>
    );
}