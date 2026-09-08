/* INTRODUCTION */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import TitreAvecSeparation from "../ui/TitreAvecSeparation";
import Texte from "../ui/Texte";
import ImageElement from "../ui/ImageElement";
import Titre from "../ui/Titre";
import GroupeImages from "../ui/GroupeImages";

export default function SignaturesAromatiques() {
    const router = useRouter();

    const [carteOuverte, setCarteOuverte] = useState<string | null>(null);

    const ouvrirCarte = (id: string) => {
        setCarteOuverte(id);
    };

    const fermerCarte = () => {
        setCarteOuverte(null);
    };

    const reserverTable = () => {
        router.push("/reservation");
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
                            className: "text-[#21233C] text-2xl xs:text-xl sm:text-2xl md:text-3xl pb-2 xs:pb-2 sm:pb-2 md:pb-2",
                        }}
                        barreSeparationProps={{
                            className: "bg-[#21233C] w-[210px] xs:w-[70px] sm:w-[90px] md:w-[100px] h-[5px] xs:h-[5px] sm:h-[5px] md:h-[5px] rounded-full",
                        }}  
                        className="pt-6 pb-8"
                    />


                    <div className="mx-10 flex flex-col">
                        {carteOuverte === "herbace" ? (           
                            <div className="mb-4 rounded-4xl w-full bg-[#21233C]">
                                <div className="px-6 py-6">
                                    <TitreAvecSeparation 
                                        titreProps={{ 
                                            titre: "Herbacé", 
                                            type: "h2", 
                                            className: "text-center text-lg text-white", 
                                        }} 
                                        barreSeparationProps={{ 
                                            className: "bg-[#FED17C] w-[100px] h-[5px] rounded-full", 
                                        }}   
                                        className="pb-6" 
                                    />
                                    <Texte className="text-center" texte="Basilic, thym, romarin, 
                                        coriandre et menthe apportent fraîcheur et profondeur à nos créations."
                                    />
                                </div>

                                <div className="h-[100px] sm:h-[250px] md:h-[300px]">
                                    <ImageElement src="/images/herbaces.png" alt="Image avec plusieurs herbacés" width={282} height={317} className="w-full h-full object-cover rounded-bl-4xl rounded-br-4xl"/>
                                </div>          
                            </div>
                            
                        ) : (   
                            <div className="mb-4 w-full flex items-center rounded-4xl bg-[#21233C]" onClick={() => ouvrirCarte("herbace")}>    
                                <div className="h-[80px] w-[80px] shrink-0">
                                    <ImageElement src="/images/herbaces.png" alt="Image avec plusieurs herbacés" width={282} height={317} className="w-full h-full object-cover rounded-tl-4xl rounded-bl-4xl"/>
                                </div>

                                <div className="flex flex-1 items-center justify-center px-10">
                                    <Titre titre="Herbacé" type="h2" className="text-center text-xl text-white"/>
                                </div>
                            </div>
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