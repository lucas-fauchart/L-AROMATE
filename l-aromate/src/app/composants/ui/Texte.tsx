/*TEXTE*/
"use client";

import { ReactNode } from "react";

//Props du composant
export type TexteProps = {
    texte: ReactNode;
    className?: string;
};

export default function Texte({ texte, className }: TexteProps) {

    return (
        <p className={className}>
            {texte}
        </p>
    );
}