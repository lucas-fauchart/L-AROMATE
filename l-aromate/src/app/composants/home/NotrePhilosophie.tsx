/* INTRODUCTION */
"use client";

import AnimationScroll from "../animations/AnimationScroll";
import GroupeImages from "../ui/GroupeImages";
import ImageElement from "../ui/ImageElement";
import TitreAvecSeparation from "../ui/TitreAvecSeparation";
import TitreTexte from "../ui/TitreTexte";

export default function NotrePhilosophie() {
    return (
        <>
            {/*MOBILE / TABLETTE*/}
            <div className="lg:hidden">
                <div className="flex flex-col text-center py-8">
                    <TitreAvecSeparation 
                        titreProps={{
                            titre: "Notre philosophie",
                            type: "h2",
                            className: "text-[#21233C] text-xl xs:text-2xl xsm:text-3xl sm:text-4xl md:text-4xl pb-2 xs:pb-2 sm:pb-2 md:pb-2",
                        }}
                        barreSeparationProps={{
                            className: "bg-[#21233C] w-[120px] xs:w-[250px] xsm:w-[310px] sm:w-[370px] md:w-[380px] h-[5px] xs:h-[6px] xsm:h-[6px] sm:h-[6px] md:h-[7px] rounded-full",
                        }}  
                        className="pb-6 sm:pb-8"
                        animationTitre={{ animation: "animation-glisser-fondu-haut", delay: 700 }}
                        animationBarre={{ animation: "animation-apparition-centre", delay: 1200 }}
                    />

                    <blockquote className="px-6 pb-8">
                        <p className="text-[#21233C] pb-4">
                            “Nous construisons chaque assiette autour d'un équilibre d'arômes, de textures et de saisons.”
                        </p>

                        <cite className="block text-right text-[#21233C]">
                            — L'AROMATE
                        </cite>
                    </blockquote>


<ImageElement
    src="/images/notrePhilosophie/chefCuisineAromate.png"
    alt="Chef de cuisine de L'Aromate"
    width={1298}
    height={1212}
    className="block w-full object-cover"
    classNameConteneur="mx-6 sm:mx-10 md:mx-16 overflow-hidden rounded-4xl"
/>

                </div>
            </div>

            {/*PC*/}
            <div className="hidden lg:block">
                <div className="mx-auto flex max-w-[1600px] text-center items-center justify-center gap-12 px-8 py-8 xl:gap-20 xl:px-12 2xl:px-16">   
                    
                </div>
            </div>
        </>
    );
}