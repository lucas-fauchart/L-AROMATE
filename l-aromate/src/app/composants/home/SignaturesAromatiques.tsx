/* INTRODUCTION */
"use client";

import { useState } from "react";
import TitreAvecSeparation from "../ui/TitreAvecSeparation";
import CarteImageTitre from "../ui/CarteImageTitre";
import CarteImageTitreDescription from "../ui/CarteImageTitreDescription";
import { CartesSignaturesAromatiques } from "../../../donnees/CartesSignaturesAromatiques";


export default function SignaturesAromatiques() {
    const [carteOuverte, setCarteOuverte] = useState<string | null>(null);

    const ouvrirCarte = (id: string) => {
        setCarteOuverte(id);
    };

    const fermerCarte = () => {
        setCarteOuverte(null);
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
                            className: "text-[#21233C] text-xl xs:text-xl sm:text-2xl md:text-3xl pb-2 xs:pb-2 sm:pb-2 md:pb-2 animation-apparition-fondu-haut",
                        }}
                        barreSeparationProps={{
                            className: "bg-[#21233C] w-[210px] xs:w-[70px] sm:w-[90px] md:w-[100px] h-[5px] xs:h-[5px] sm:h-[5px] md:h-[5px] rounded-full animation-apparition-centre",
                        }}  
                        className="pt-8 pb-4"
                    />

                    <div className="mx-10 my-6 flex flex-col">
                        
                        {CartesSignaturesAromatiques.map((uneCarteSignatureAromatique) =>
                            carteOuverte === uneCarteSignatureAromatique.id ? (           
                                <CarteImageTitreDescription
                                    key={uneCarteSignatureAromatique.id}
                                    titreAvecSeparationProps={{
                                        titreProps: {
                                            titre: uneCarteSignatureAromatique.titre,
                                            type: "h2",
                                            className: "text-center text-lg text-white",
                                        },
                                        barreSeparationProps: {
                                            className: "h-[5px] w-[100px] rounded-full bg-[#FED17C]",
                                        },
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
                                    classNameCarte="mb-4 w-full overflow-hidden rounded-4xl bg-[#21233C] animation-apparition-fondu-haut"
                                    classNameContenu="px-6 py-6"
                                    classNameImage="h-[100px] w-full sm:h-[250px] md:h-[300px]"
                                    onClick={fermerCarte}
                                />


                            ) : (   
                                <CarteImageTitre
                                    key={uneCarteSignatureAromatique.id}
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
                                    classNameCarte="mb-4 w-full overflow-hidden rounded-4xl bg-[#21233C]"
                                    classNameTitre="flex flex-1 items-center justify-center px-10"
                                    classNameImage="h-[80px] w-[80px] shrink-0"
                                    onClick={() => ouvrirCarte(uneCarteSignatureAromatique.id)}
                                />   
                            )
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