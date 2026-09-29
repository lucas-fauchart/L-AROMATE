/*ACCORDEON CARTE*/

"use client";

import { ReactNode, useState } from "react";
import AnimationScroll from "../animations/AnimationScroll";

export type AccordeonMobileCarteProps = {
    cartes: { id: string; animation: string; delay?: number;}[];
    carteFermee: ( carte: any, ouvrir: (id: string) => void ) => ReactNode;
    carteOuverte: ( carte: any ) => ReactNode;
    groupeImages?: ( carte: any ) => ReactNode;
    className?: string;
};

export default function AccordeonMobileCarte({ cartes, carteFermee, carteOuverte, groupeImages, className = "" }: AccordeonMobileCarteProps) {

    const [carteOuverteId, setCarteOuverteId] = useState<string | null>(cartes[0].id);
    const [carteFermeeId, setCarteFermeeId] = useState<string | null>(null);

    const ouvrirCarte = (id: string) => {
        setCarteOuverteId(id);
    };

    const finFermetureCarte = () => {
        setCarteOuverteId(null);
        setCarteFermeeId(null);
    };

    return (
        <div className={className}>
            {cartes.map((carte) => (

                <div key={carte.id}>
                    <AnimationScroll animation={carte.animation} delay={carte.delay}>
                        {carteOuverteId === carte.id ? (
                            <div className={`relative ${ carteFermeeId === carte.id ? "animation-fermeture-hauteur-ligne-grille" : "animation-ouverture-hauteur-ligne-grille" }`}>
                                <div className="overflow-hidden min-h-0">
                                    <div className={carteFermeeId === carte.id ? "animation-fermeture-carte" : "animation-ouverture-carte"}
                                        onAnimationEnd={() => {
                                            if (carteFermeeId === carte.id) {
                                                finFermetureCarte();
                                            }
                                        }}
                                    >
                                        {carteOuverte(carte)}
                                    </div>
                                </div>
                                {groupeImages && groupeImages(carte)}
                            </div>
                        ) : (
                            carteFermee(carte, ouvrirCarte)
                        )}
                    </AnimationScroll>
                </div>
            ))}
        </div>
    );
}