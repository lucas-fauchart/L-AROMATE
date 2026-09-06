/*TITRE AVEC SEPARATION*/
"use client";

import Titre, { type TitreProps } from "./Titre";
import BarreSeparation, { type BarreSeparationProps } from "./BarreSeparation";

// Props du composant
export type TitreAvecSeparationProps = {
    titreProps: TitreProps;
    barreSeparationProps: BarreSeparationProps;
};

export default function TitreAvecSeparation({ titreProps, barreSeparationProps }: TitreAvecSeparationProps) {
    return (
        <div className="flex flex-col items-center">
            <Titre {...titreProps} />

            <BarreSeparation {...barreSeparationProps} />
        </div>
    );
}