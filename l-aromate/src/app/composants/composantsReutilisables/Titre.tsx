/*TITRE*/
"use client";

import { ElementType, ReactNode } from "react";

//Props du composant
export type TitreProps = {
    titre: ReactNode;
    type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    className?: string;
};

export default function Titre({ titre, type, className }: TitreProps) {

    const Titre: ElementType = type;

    return (
        <Titre className={className}>
            {titre}
        </Titre>
    );
}