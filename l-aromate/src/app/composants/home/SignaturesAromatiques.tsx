/* INTRODUCTION */
"use client";

import { useState } from "react";
import TitreAvecSeparation from "../ui/TitreAvecSeparation";
import CarteImageTitre from "../ui/CarteImageTitre";
import CarteImageTitreDescription from "../ui/CarteImageTitreDescription";
import { CartesSignaturesAromatiques } from "../../../donnees/CartesSignaturesAromatiques";
import AnimationScroll from "../animations/AnimationScroll";

export default function SignaturesAromatiques() {
    const [carteOuverte, setCarteOuverte] = useState<string | null>(null);
    const [carteFerme, setCarteFerme] = useState<string | null>(null);

    const ouvrirCarte = (id: string) => {
        setCarteOuverte(id);
    };

    const fermerCarte = (id: string) => {
        setCarteFerme(id); 
    };

    const finFermetureCarte = (id: string) => {
        setCarteOuverte(null);        
        setCarteFerme(null);
    };

    return (
        <>
            {/*MOBILE / TABLETTE*/}
            <div className="lg:hidden">
                <div className="flex flex-col text-center">

                    <TitreAvecSeparation 
                        titreProps={{
                            titre: "Les signatures aromatiques",
                            type: "h2",
                            className: "text-[#21233C] text-xl xs:text-xl sm:text-2xl md:text-3xl pb-2 xs:pb-2 sm:pb-2 md:pb-2",
                        }}
                        barreSeparationProps={{
                            className: "bg-[#21233C] w-[210px] xs:w-[70px] sm:w-[90px] md:w-[100px] h-[5px] xs:h-[5px] sm:h-[5px] md:h-[5px] rounded-full",
                        }}  
                        className="pt-8 pb-4"
                        animationTitre={{animation: "animation-apparition-fondu-haut", delay: 300 }}
                        animationBarre={{animation: "animation-apparition-centre", delay: 800}}
                    />

                    <div className="mx-8 my-6 flex flex-col">
                        {CartesSignaturesAromatiques.map((uneCarteSignatureAromatique) =>
                            <AnimationScroll  key={uneCarteSignatureAromatique.id}  animation={uneCarteSignatureAromatique.animation} delay={uneCarteSignatureAromatique.delay}>
                                {carteOuverte === uneCarteSignatureAromatique.id ? (       
                                    <div className={carteFerme === uneCarteSignatureAromatique.id ? "animation-fermeture-hauteur-ligne-grille" : "animation-ouverture-hauteur-ligne-grille"}>
                                        <div className="overflow-hidden min-h-0">
                                            <div className={carteFerme === uneCarteSignatureAromatique.id ? "animation-fermeture-carte"  : "animation-ouverture-carte"}
                                                onAnimationEnd={() => {
                                                    if (carteFerme === uneCarteSignatureAromatique.id) {
                                                        finFermetureCarte(uneCarteSignatureAromatique.id);
                                                    }
                                                }}
                                            >
                                                <CarteImageTitreDescription
                                                    key={uneCarteSignatureAromatique.id}
                                                    titreAvecSeparationProps={{
                                                        titreProps: {
                                                            titre: uneCarteSignatureAromatique.titre,
                                                            type: "h2",
                                                            className: "text-center text-lg text-white",
                                                        },
                                                        animationTitre: { animation: "i"},
                                                        barreSeparationProps: {
                                                            className: "h-[5px] w-[100px] rounded-full bg-[#FED17C]",
                                                        },
                                                        animationBarre: { animation: "1"},
                                                        className: "pb-6",
                                                    }}
                                                    texteProps={{
                                                        texte: uneCarteSignatureAromatique.texte,
                                                        className: "text-center",
                                                    }}
                                                    imageElementProps={{
                                                        src: uneCarteSignatureAromatique.image,
                                                        alt: uneCarteSignatureAromatique.alt,
                                                        width: uneCarteSignatureAromatique.width,
                                                        height: uneCarteSignatureAromatique.height,
                                                        className: "h-full w-full object-cover",
                                                    }}
                                                    imagePosition="bas"
                                                    classNameCarte={`mb-6 w-full overflow-hidden rounded-4xl bg-[#21233C]`}
                                                    classNameContenu="px-6 py-6"
                                                    classNameImage="h-[100px] w-full sm:h-[250px] md:h-[300px]"
                                                    onClick={() => fermerCarte(uneCarteSignatureAromatique.id)}
                                                />
                                            </div>
                                        </div>
                                    </div>  
                                ) : (   
                                    <CarteImageTitre
                                        titreProps={{
                                            titre: uneCarteSignatureAromatique.titre,
                                            type: "h2",
                                            className: "text-center text-xl text-white",
                                        }}
                                        imageElementProps={{
                                            src: uneCarteSignatureAromatique.image,
                                            alt: uneCarteSignatureAromatique.alt,
                                            width: uneCarteSignatureAromatique.width,
                                            height: uneCarteSignatureAromatique.height,
                                            className: "h-full w-full object-cover",
                                        }}
                                        imagePosition="gauche"
                                        classNameCarte="mb-6 w-full overflow-hidden rounded-4xl bg-[#21233C] animation-apparition-carte-fermee"
                                        classNameTitre="flex flex-1 items-center justify-center px-10"
                                        classNameImage="h-[80px] w-[80px] shrink-0"
                                        onClick={() => ouvrirCarte(uneCarteSignatureAromatique.id)}
                                    />   
                                )}
                            </AnimationScroll>
                        )}
                    </div>
                </div>
            </div>

            {/*PC*/}
            <div className="hidden lg:block">
                <div className="flex min-h-[100svh] items-center justify-center lg:gap-28 xl:gap-28 lg:pb-30 xl:pb-32 px-24">

                    {/* CONTENU GAUCHE */}
                    <div className="flex flex-col items-start">
                        
                    </div>

                    {/* CONTENU DROIT */}
                    <div className="flex justify-center items-start">
                        
                    </div>
                </div>
            </div>
        </>
    );
}