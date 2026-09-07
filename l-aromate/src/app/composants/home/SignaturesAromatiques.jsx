/* INTRODUCTION */
"use client";

import { useRouter } from "next/navigation";
import TitreAvecSeparation from "../ui/TitreAvecSeparation";
import Texte from "../ui/Texte";
import ImageElement from "../ui/ImageElement";
import Titre from "../ui/Titre";
import GroupeImages from "../ui/GroupeImages";

export default function SignaturesAromatiques() {
    const router = useRouter();

    const reserverTable = () => {
        router.push("/reservation");
    };

    return (
        <>
            {/*MOBILE / TABLETTE*/}
            <div className="lg:hidden">
                <div className="flex flex-col items-center text-center">
                    <TitreAvecSeparation 
                        titreProps={{
                            titre: "Les signatures aromatiques",
                            type: "h2",
                            className: "text-[#21233C] text-xl xs:text-xl sm:text-2xl md:text-3xl pb-2 xs:pb-2 sm:pb-2 md:pb-2",
                        }}
                        barreSeparationProps={{
                            className: "bg-[#21233C] w-[210px] xs:w-[70px] sm:w-[90px] md:w-[100px] h-[5px] xs:h-[5px] sm:h-[5px] md:h-[5px] rounded-full",
                        }}  
                        className="pt-6 pb-8"
                    />
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