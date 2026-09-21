/*CARTE TITRE VERTICAL*/
"use client";

import Titre, { type TitreProps } from "./Titre";

export type CarteTitreVerticalProps = {
    titreProps: TitreProps;
    classNameCarte: string;
    classNameTitre: string;
    onClick?: () => void;
};

export default function CarteTitreVertical({ titreProps, classNameCarte, classNameTitre, onClick}: CarteTitreVerticalProps) {
    return (
        <div className={`flex items-center justify-center ${classNameCarte}`} onClick={onClick}>
            <div className={classNameTitre}>
                <Titre {...titreProps} />
            </div>
        </div>
    );
}