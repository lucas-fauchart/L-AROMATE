/* INTRODUCTION */
"use client";

import { useState, useEffect, useRef } from "react";
import TitreAvecSeparation from "../ui/TitreAvecSeparation";
import CarteImageTitre from "../ui/CarteImageTitre";
import CarteImageTitreDescription from "../ui/CarteImageTitreDescription";
import { CartesSignaturesAromatiques } from "../../../donnees/CartesSignaturesAromatiques";
import AnimationScroll from "../animations/AnimationScroll";
import GroupeImages from "../ui/GroupeImages";


export default function SignaturesAromatiques() {
    const [carteOuverte, setCarteOuverte] = useState<string | null>(null);
    const [carteFerme, setCarteFerme] = useState<string | null>(null);

    const refsCartes = useRef<Map<string, HTMLDivElement | null>>(new Map());

    const definirRef = (id: string) => (element: HTMLDivElement | null) => {
        refsCartes.current.set(id, element);
    };

    useEffect(() => {
        if (carteOuverte) {
            const element = refsCartes.current.get(carteOuverte);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
            }
        }
    }, [carteOuverte]);

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
                            className: "text-[#21233C] text-xl xs:text-2xl xsm:text-3xl sm:text-4xl md:text-4xl pb-2 xs:pb-2 sm:pb-2 md:pb-2",
                        }}
                        barreSeparationProps={{
                            className: "bg-[#21233C] w-[210px] xs:w-[250px] xsm:w-[310px] sm:w-[370px] md:w-[380px] h-[5px] xs:h-[6px] xsm:h-[6px] sm:h-[6px] md:h-[7px] rounded-full",
                        }}  
                        className="pt-8 pb-6 sm:pb-8"
                        animationTitre={{animation: "animation-apparition-fondu-haut", delay: 300 }}
                        animationBarre={{animation: "animation-apparition-centre", delay: 800}}
                    />

                    <div className="mx-8 xs:mx-12 xsm:mx-22 sm:mx-26 md:mx-30 my-4 flex flex-col">
                        {CartesSignaturesAromatiques.map((uneCarteSignatureAromatique) =>
                            <AnimationScroll  key={uneCarteSignatureAromatique.id}  animation={uneCarteSignatureAromatique.animation} delay={uneCarteSignatureAromatique.delay}>
                                {carteOuverte === uneCarteSignatureAromatique.id ? (       
                                    <div className={`relative ${carteFerme === uneCarteSignatureAromatique.id ? "animation-fermeture-hauteur-ligne-grille" : "animation-ouverture-hauteur-ligne-grille"}`} ref={definirRef(uneCarteSignatureAromatique.id)}>
                                        
                                        <div className="overflow-hidden min-h-0">
                                            <div className={`${carteFerme === uneCarteSignatureAromatique.id ? "animation-fermeture-carte"  : "animation-ouverture-carte"}`}
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
                                                            className: "text-center text-lg xs:text-xl xsm:text-2xl sm:text-3xl md:text-3xl text-white pb-1 xs:pb-2 sm:pb-2 md:pb-3",
                                                        },
                                                        animationTitre: { animation: ""},
                                                        barreSeparationProps: {
                                                            className: "h-[5px] xs:h-[6px] md:h-[7px] w-[100px] xs:w-[110px] xsm:w-[120px] sm:w-[120px] md:w-[150px] rounded-full bg-[#FED17C]",
                                                        },
                                                        animationBarre: { animation: ""},
                                                        className: "pb-6 xsm:mt-2 sm:mt-3 md:mt-4",
                                                    }}
                                                    texteProps={{
                                                        texte: uneCarteSignatureAromatique.texte,
                                                        className: "text-center text-base xs:text-lg xsm:text-xl sm:text-2xl px-2 xs:px-2 xsm:px2 sm:px-4 md:px-8 mb-2 xsm:mb-4 sm:mb-4 md:mb-8",
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
                                                    classNameImage="w-full h-[100px] xs:h-[110px] xsm:h-[140px] sm:h-[160px] md:h-[190px]"
                                                    onClick={() => fermerCarte(uneCarteSignatureAromatique.id)}
                                                />
                                            </div>
                                        </div>

                                        <GroupeImages
                                            lesImagesGroupe={uneCarteSignatureAromatique.imagesGroupe.map((uneImageGroupe) => ({
                                                imageElementProps: {
                                                    src: uneImageGroupe.src,
                                                    alt: uneImageGroupe.alt,
                                                    width: uneImageGroupe.width,
                                                    height: uneImageGroupe.height,
                                                    className: uneImageGroupe.className,
                                                },
                                            }))}
                                            className={`pointer-events-none absolute inset-0 z-10 ${carteFerme === uneCarteSignatureAromatique.id ? "animation-fermeture-image" : "animation-ouverture-image"}`}
                                        />



                                    </div>   
                                ) : (   
                                    <CarteImageTitre
                                        titreProps={{
                                            titre: uneCarteSignatureAromatique.titre,
                                            type: "h2",
                                            className: "text-center text-xl xsm:text-2xl sm:text-3xl md:text-3xl text-white",
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
                                        classNameImage="h-[80px] xsm:h-[100px] sm:h-[120px] md:h-[140px] w-[80px] xsm:w-[100px] sm:w-[120px] md:w-[140px] shrink-0"
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