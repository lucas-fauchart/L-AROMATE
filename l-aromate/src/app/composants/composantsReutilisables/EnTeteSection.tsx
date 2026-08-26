/*EN TETE SECTION*/
/*TITRE / BARRE SEPARATION*/
"use client"

import Titre, { type TitreProps } from "./Titre";
import BarreSeparation, { type BarreSeparationProps } from "./BarreSeparation";

//Props du composant
export type EnTeteSectionProps = {
    titreProps: TitreProps
    barreSeparationProps: BarreSeparationProps
};

export default function EnTeteSection({ titreProps, barreSeparationProps }: EnTeteSectionProps) {
    return (
        <div className="flex flex-col items-center">
            <Titre {...titreProps}/>

            <BarreSeparation {...barreSeparationProps}/>
        </div>
    );
}