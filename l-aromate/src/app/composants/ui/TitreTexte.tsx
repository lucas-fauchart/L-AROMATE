/*TITRE TEXTE*/

"use client";

import Titre, { TitreProps } from "./Titre";
import Texte, { TexteProps } from "./Texte";

export type TitreTexteProps = { titreProps: TitreProps; texteProps: TexteProps; className?: string };

export default function TitreTexte({ titreProps, texteProps, className = "" }: TitreTexteProps) {
    return (
        <div className={className}>
            <Titre {...titreProps} />
            <Texte {...texteProps} />
        </div>
    );
}