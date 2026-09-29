/*ACCORDEON PC CARTE*/

"use client";

import { ReactNode, useState } from "react";
import AnimationScroll from "../animations/AnimationScroll";

export type AccordeonPCCarteProps = {
    cartes: { id: string; animation: string; delay?: number;}[];
    carteFermee: (carte: any, ouvrir: (id: string) => void) => ReactNode;
    carteOuverte: (carte: any, ouvrir: (id: string) => void) => ReactNode;
    className?: string;
};

export default function AccordeonPcCarte({ cartes, carteFermee, carteOuverte, className = "" }: AccordeonPCCarteProps) {

    const [carteOuverteId, setCarteOuverteId] = useState<string | null>(cartes[0].id);

    const ouvrirCarte = (id: string) => { 
        setCarteOuverteId(id) 
    };

    return (
        <div className={className}>
            {cartes.map((carte) => (
                <div key={carte.id} onMouseEnter={() => ouvrirCarte(carte.id)} className={`transition-all duration-700 ease-in-out ${ carteOuverteId === carte.id ? "w-full" : "w-[200px]"}`}>
                    <AnimationScroll animation={carte.animation} delay={carte.delay}>
                        {carteOuverteId === carte.id ? (
                            carteOuverte(carte, ouvrirCarte)
                        ) : (
                            carteFermee(carte, ouvrirCarte)
                        )}
                    </AnimationScroll>
                </div>
            ))}
        </div>
    );
}