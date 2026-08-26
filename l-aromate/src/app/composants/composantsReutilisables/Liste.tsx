/*LISTE*/
"use client";

import { ReactNode } from "react";

//Props du composant
export type ListeProps = {
    elements: ReactNode[];
    classNameGlobal?: string;
    classNameElement?: string;
    animationDelay: number;
};

export default function Liste({ elements, classNameGlobal, classNameElement, animationDelay }: ListeProps) {
    return (
        <ul className={classNameGlobal}>
            {elements.map((element, index) => (
                <li key={index} className={classNameElement} style={{ animationDelay: `${index * animationDelay}ms`,}}>
                    {element}
                </li>
            ))}
        </ul>
    );
}