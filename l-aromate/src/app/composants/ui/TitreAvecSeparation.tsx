/*TITRE AVEC SEPARATION*/
"use client";

import Titre, { type TitreProps } from "./Titre";
import BarreSeparation, { type BarreSeparationProps } from "./BarreSeparation";

// Props du composant
export type TitreAvecSeparationProps = {
    titreProps: TitreProps;
    barreSeparationProps: BarreSeparationProps;
    className?: string;
};

export default function TitreAvecSeparation({ titreProps, barreSeparationProps, className }: TitreAvecSeparationProps) {
    return (
        <div className={`flex flex-col items-center ${className}`}>
            <Titre {...titreProps} />

            <BarreSeparation {...barreSeparationProps} />
        </div>
    );
}