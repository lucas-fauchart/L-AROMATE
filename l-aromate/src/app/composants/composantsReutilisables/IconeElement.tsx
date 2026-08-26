/*ICONE ELEMENT*/
"use client";

import { IconType } from "react-icons";

//Props du composant
export type IconeElementProps = {
    icone: IconType;
    className: string;
};

export default function IconeElement({ icone: Icone, className }: IconeElementProps) {
    return <Icone className={className} />;
}