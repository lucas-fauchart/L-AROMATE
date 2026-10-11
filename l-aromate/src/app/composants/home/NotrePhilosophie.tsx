/* INTRODUCTION */
"use client";

import AnimationScroll from "../animations/AnimationScroll";
import Citation from "../ui/Citation";
import GroupeImages from "../ui/GroupeImages";
import ImageElement from "../ui/ImageElement";
import TitreAvecSeparation from "../ui/TitreAvecSeparation";
import TitreTexte from "../ui/TitreTexte";

export default function NotrePhilosophie() {
    return (
        <>
            {/*MOBILE / TABLETTE*/}
            <div className="lg:hidden">
                <div className="flex flex-col text-center py-10 xsm:py-14 md:py-16">
                    <TitreAvecSeparation 
                        titreProps={{
                            titre: "Notre philosophie",
                            type: "h2",
                            className: "text-[#21233C] text-xl xs:text-2xl xsm:text-3xl sm:text-4xl md:text-4xl pb-2 xs:pb-2 sm:pb-2 md:pb-2",
                        }}
                        barreSeparationProps={{
                            className: "bg-[#21233C] w-[120px] xs:w-[150px] xsm:w-[180px] sm:w-[220px] md:w-[230px] h-[5px] xs:h-[6px] xsm:h-[6px] sm:h-[6px] md:h-[7px] rounded-full",
                        }}  
                        className="pb-6 sm:pb-8"
                        animationTitre={{ animation: "animation-glisser-fondu-haut", delay: 200 }}
                        animationBarre={{ animation: "animation-apparition-centre", delay: 700 }}
                    />
                    <Citation
                        citation="Nous construisons chaque assiette autour d'un équilibre d'arômes, de textures et de saisons."
                        animationCitation={{animation: "animation-glisser-fondu-haut", delay: 1200}}
                        auteur="L'AROMATE"
                        animationAuteur={{animation: "animation-apparition-fondu-droite", delay: 1700}}
                        className="px-6 pb-8"
                        classNameCitation="text-base xs:text-lg xsm:text-xl sm:text-2xl pb-4 text-[#21233C]"
                        classNameAuteur="block text-right text-[#21233C] text-base xs:text-lg xsm:text-xl sm:text-2xl"
                    />
                    <AnimationScroll animation="animation-apparition-fondu" delay={2200}>
                        <ImageElement
                            src="/images/notrePhilosophie/chefCuisineAromate.png"
                            alt="Chef de cuisine de L'Aromate."
                            width={1298}
                            height={1212}
                            className="block w-full object-cover"
                            classNameConteneur="mx-10 xs:mx-12 xsm:mx-16 sm:mx-18 md:mx-22 overflow-hidden rounded-4xl"
                        />
                    </AnimationScroll>
                </div>
            </div>

            {/*PC*/}
            <div className="hidden lg:block">
                <div className="mx-auto flex max-w-[1600px] text-center items-center justify-center gap-12 px-8 py-20 xl:gap-20 xl:px-12 2xl:px-16">   
                    <AnimationScroll animation="animation-apparition-fondu" delay={200}>
                        <ImageElement 
                            src="/images/notrePhilosophie/chefCuisineAromate.png"
                            alt="Chef de cuisine de L'Aromate."
                            width= {1491}
                            height= {1055}
                            className= "w-[1500px] h-auto object-cover rounded-4xl"
                        />
                    </AnimationScroll>

                    <div>
                        <TitreAvecSeparation 
                            titreProps={{
                                titre: "Notre philosophie",
                                type: "h2",
                                className: "text-[#21233C] text-3xl pb-2 xs:pb-2 sm:pb-2 md:pb-2",
                            }}
                            barreSeparationProps={{
                                className: "bg-[#21233C] w-[200px] h-[5px] xs:h-[6px] xsm:h-[6px] sm:h-[6px] md:h-[7px] rounded-full",
                            }}  
                            className=" pb-6 sm:pb-8"
                            animationTitre={{
                                animation: "animation-glisser-fondu-haut",
                                delay: 700
                            }}
                            animationBarre={{
                                animation: "animation-apparition-centre",
                                delay: 1200
                            }}
                        />
                        <Citation
                            citation="Nous construisons chaque assiette autour d'un équilibre d'arômes, de textures et de saisons. 
                                Chaque ingrédient est soigneusement sélectionné pour révéler des saveurs uniques et créer une expérience culinaire authentique, 
                                où la créativité rencontre le respect des produits."
                            animationCitation={{animation: "animation-glisser-fondu-haut", delay: 1700}}
                            auteur="L'AROMATE"
                            animationAuteur={{animation: "animation-apparition-fondu-droite", delay: 2200}}
                            className="px-6 pb-8"
                            classNameCitation="text-base xs:text-lg xsm:text-xl sm:text-2xl pb-4 text-[#21233C]"
                            classNameAuteur="block text-right text-[#21233C] text-base xs:text-lg xsm:text-xl sm:text-2xl"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}