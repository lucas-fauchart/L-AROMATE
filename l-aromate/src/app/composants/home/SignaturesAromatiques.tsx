/* INTRODUCTION */
"use client";

import TitreAvecSeparation from "../ui/TitreAvecSeparation";
import CarteImageTitre from "../ui/CarteImageTitre";
import CarteImageTitreDescription from "../ui/CarteImageTitreDescription";
import { CartesSignaturesAromatiquesMobileTablette, CartesSignaturesAromatiquesPC } from "../../../donnees/CartesSignaturesAromatiques";
import GroupeImages from "../ui/GroupeImages";
import CarteTitreVertical from "../ui/CarteTitreVertical";
import AccordeonMobileCarte from "../ui/AccordeonMobileCarte";
import AccordeonPcCarte from "../ui/AccordeonPcCarte";

export default function SignaturesAromatiques() {
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

                    <AccordeonMobileCarte
                        cartes={CartesSignaturesAromatiquesMobileTablette}
                        className="mx-8 xs:mx-12 xsm:mx-22 sm:mx-26 md:mx-30 my-4 flex flex-col"

                        carteFermee={(carte, ouvrirCarte) => (
                            <CarteImageTitre
                                titreProps={{
                                    titre: carte.titre,
                                    type: "h2",
                                    className: "text-center text-xl xsm:text-2xl sm:text-3xl md:text-3xl text-white",
                                }}
                                imageElementProps={{
                                    src: carte.image,
                                    alt: carte.alt,
                                    width: carte.width,
                                    height: carte.height,
                                    className: "h-full w-full object-cover",
                                }}
                                imagePosition="gauche"
                                classNameCarte="mb-6 sm:mb-8 w-full overflow-hidden rounded-4xl bg-[#21233C] animation-apparition-centre-cote-gauche-droite"
                                classNameTitre="flex flex-1 items-center justify-center px-10"
                                classNameImage="h-[80px] xsm:h-[100px] sm:h-[120px] md:h-[140px] w-[80px] xsm:w-[100px] sm:w-[120px] md:w-[140px] shrink-0 animation-apparition"
                                onClick={() => ouvrirCarte(carte.id)}
                            />
                        )}

                        carteOuverte={(carte) => (
                            <CarteImageTitreDescription
                                titreAvecSeparationProps={{
                                    titreProps: {
                                        titre: carte.titre,
                                        type: "h2",
                                        className:
                                            "text-center text-lg xs:text-xl xsm:text-2xl sm:text-3xl md:text-3xl text-white pb-1 xs:pb-2 sm:pb-2 md:pb-3",
                                    },
                                    animationTitre: { animation: "" },
                                    barreSeparationProps: { className: `h-[5px] xs:h-[6px] md:h-[7px] rounded-full bg-[#FED17C] ${carte.largeurBarreSeparation}`},
                                    animationBarre: { animation: "" },
                                    className: "pb-6 xsm:mt-2 sm:mt-3 md:mt-4",
                                }}
                                texteProps={{
                                    texte: carte.texte,
                                    className: "text-center text-base xs:text-lg xsm:text-xl sm:text-2xl px-2 xs:px-2 xsm:px-2 sm:px-4 md:px-8 mb-2 xsm:mb-4 sm:mb-4 md:mb-8",
                                    animationTexte: { animation: "" },
                                }}
                                imageElementProps={{
                                    src: carte.image,
                                    alt: carte.alt,
                                    width: carte.width,
                                    height: carte.height,
                                    className: "h-full w-full object-cover",
                                }}
                                imagePosition="haut"
                                classNameCarte="mb-6 sm:mb-8 w-full overflow-hidden rounded-4xl bg-[#21233C]"
                                classNameContenu="px-6 py-6"
                                classNameImage="w-full h-[100px] xs:h-[110px] xsm:h-[140px] sm:h-[160px] md:h-[190px]"
                            />
                        )}

                        groupeImages={(carte) => (
                            <GroupeImages
                                lesImagesGroupe={carte.imagesGroupe.map(
                                    (image: any) => ({
                                        imageElementProps: {
                                            src: image.src,
                                            alt: image.alt,
                                            width: image.width,
                                            height: image.height,
                                            className: image.className,
                                        },
                                    })
                                )}
                                className="pointer-events-none absolute inset-0 z-10 animation-ouverture-image"
                            />
                        )}
                    />
                </div>
            </div>

            {/*PC*/}
            <div className="hidden lg:block">
                <div className="flex flex-col text-center py-4">
                    <TitreAvecSeparation 
                        titreProps={{
                            titre: "Les signatures aromatiques",
                            type: "h2",
                            className: "text-[#21233C] text-3xl pb-2 xs:pb-2 sm:pb-2 md:pb-2",
                        }}
                        barreSeparationProps={{
                            className: "bg-[#21233C] lg:w-[320px] 2xl:w-[320px] h-[7px] rounded-full",
                        }}  
                        className="pt-8"
                        animationTitre={{animation: "animation-apparition-fondu-haut", delay: 300 }}
                        animationBarre={{animation: "animation-apparition-centre", delay: 800}}
                    />

                    <AccordeonPcCarte
                        cartes={CartesSignaturesAromatiquesPC}
                        className="flex justify-center gap-2 lg:px-24 xl:px-50 2xl:px-80 py-12"

                        carteFermee={(uneCarteSignatureAromatique) => (
                            <CarteTitreVertical
                                titreProps={{
                                    titre: uneCarteSignatureAromatique.titre,
                                    type: "h2",
                                    className: "text-2xl text-white",
                                }}
                                classNameCarte="h-[500px] w-full rounded-4xl bg-[#21233C]"
                                classNameTitre="[writing-mode:vertical-rl] rotate-180"
                            />
                        )}

                        carteOuverte={(uneCarteSignatureAromatique) => (
                            <CarteImageTitreDescription
                                titreAvecSeparationProps={{
                                    titreProps: {
                                        titre: uneCarteSignatureAromatique.titre,
                                        type: "h2",
                                        className: "text-center text-2xl text-white pb-2 mt-8",
                                    },
                                    animationTitre: {
                                        animation: "animation-apparition-fondu-haut",
                                        delay: 300,
                                    },
                                    barreSeparationProps: {
                                        className: `h-[5px] rounded-full bg-[#FED17C] ${uneCarteSignatureAromatique.largeurBarreSeparation}`,
                                    },
                                    animationBarre: {
                                        animation: "animation-apparition-centre",
                                        delay: 800,
                                    },
                                    className: "pb-6",
                                }}

                                texteProps={{
                                    texte: uneCarteSignatureAromatique.texte,
                                    className: "text-center text-xl px-8 mb-8",
                                    animationTexte: {
                                        animation: "animation-apparition-fondu-haut",
                                        delay: 1300,
                                    },
                                }}

                                imageElementProps={{
                                    src: uneCarteSignatureAromatique.image,
                                    alt: uneCarteSignatureAromatique.alt,
                                    width: uneCarteSignatureAromatique.width,
                                    height: uneCarteSignatureAromatique.height,
                                    className: "h-full w-full object-cover",
                                }}

                                imagePosition="haut"
                                classNameCarte="w-full h-[500px] overflow-hidden rounded-4xl bg-[#21233C]"
                                classNameContenu="flex-1"
                                classNameImage="w-full"
                            />
                        )}
                    />
                </div>
            </div>
        </>
    );
}