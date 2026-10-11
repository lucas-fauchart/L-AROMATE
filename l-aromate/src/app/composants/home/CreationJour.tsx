/* INTRODUCTION */
"use client";

import AnimationScroll from "../animations/AnimationScroll";
import GroupeImages from "../ui/GroupeImages";
import ImageElement from "../ui/ImageElement";
import TitreAvecSeparation from "../ui/TitreAvecSeparation";
import TitreTexte from "../ui/TitreTexte";

export default function CreationJour() {
    return (
        <>
            {/*MOBILE / TABLETTE*/}
            <div className="lg:hidden">
                <div className="flex flex-col text-center mb-24">
                    <div className="relative">
                        <AnimationScroll animation="animation-apparition-fondu" delay={400}>
                            <ImageElement 
                                src="/images/creationJour/pouletPimentCayenne.png"
                                alt="Assiette grise contenant du riz blanc, 
                                    avec de la poudre de piment de Cayenne, 
                                    de la ciboulette et du poivre par-dessus le riz."
                                width= {1491}
                                height= {1055}
                                className= "h-full w-full object-cover"
                            />
                        </AnimationScroll>

                        <TitreAvecSeparation 
                            titreProps={{
                                titre: "La création du jour",
                                type: "h2",
                                className: "text-[#FFFFFF] text-xl xs:text-2xl xsm:text-3xl sm:text-4xl md:text-4xl pb-2 xs:pb-2 sm:pb-2 md:pb-2",
                            }}
                            barreSeparationProps={{
                                className: "bg-[#FED17C] w-[120px] xs:w-[250px] xsm:w-[310px] sm:w-[370px] md:w-[380px] h-[5px] xs:h-[6px] xsm:h-[6px] sm:h-[6px] md:h-[7px] rounded-full",
                            }}  
                            className="pt-8 pb-6 sm:pb-8"
                            animationTitre={{
                                animation: "animation-glisser-fondu-haut",
                                delay: 900
                            }}
                            animationBarre={{
                                animation: "animation-apparition-centre",
                                delay: 1400
                            }}
                        />
                        <TitreTexte
                            titreProps={{
                                titre: "Poulet au piment de cayenne",
                                type: "h3",
                                className: "pb-6 text-[#FFFFFF] text-xl xs:text-2xl xsm:text-3xl sm:text-4xl md:text-4xl",
                                animationTitre: { animation: "animation-glisser-fondu-haut", delay: 1900 },
                            }}
                            texteProps={{
                                texte: `Poulet relevé au piment de Cayenne,
                                    servi avec un riz blanc délicat,
                                    rehaussé de ciboulette fraîche et d’une touche de poivre pour un équilibre simple et intense.`,
                                className:
                                    "text-center text-base xs:text-lg xsm:text-xl sm:text-2xl px-6",
                                animationTexte: { animation: "animation-glisser-fondu-haut", delay: 2400 },
                            }}
                        />
                    </div>
                </div>
            </div>

            {/*PC*/}
            <div className="hidden lg:block">
                <div className="mx-auto flex max-w-[1600px] text-center items-center justify-center gap-12 px-8 py-8 xl:gap-20 xl:px-12 2xl:px-16">   
                    <div>
                        <TitreAvecSeparation 
                            titreProps={{
                                titre: "La création du jour",
                                type: "h2",
                                className: "text-[#FFFFFF] text-3xl pb-2 xs:pb-2 sm:pb-2 md:pb-2",
                            }}
                            barreSeparationProps={{
                                className: "bg-[#FED17C] w-[200px] h-[5px] xs:h-[6px] xsm:h-[6px] sm:h-[6px] md:h-[7px] rounded-full",
                            }}  
                            className=" pb-6 sm:pb-8"
                             animationTitre={{
                                animation: "animation-glisser-fondu-haut",
                                delay: 200
                            }}
                            animationBarre={{
                                animation: "animation-apparition-centre",
                                delay: 700
                            }}
                        />
                        <TitreTexte
                            titreProps={{
                                titre: "Poulet au piment de cayenne",
                                type: "h2",
                                className: "pb-6 text-[#FFFFFF] text-3xl ",
                                animationTitre: { animation: "animation-glisser-fondu-haut", delay: 1200 },
                            }}
                            texteProps={{
                                texte: `Poulet relevé au piment de Cayenne,
                                    servi avec un riz blanc délicat,
                                    rehaussé de ciboulette fraîche et d’une touche de poivre pour un équilibre simple et intense.`,
                                className: "text-center text-2xl xl:px-14",
                                animationTexte: { animation: "animation-glisser-fondu-haut", delay: 2200 },
                            }}
                        />
                    </div>
                    <AnimationScroll animation="animation-apparition-fondu" delay={2700}>
                        <ImageElement 
                            src="/images/creationJour/pouletPimentCayenne.png"
                            alt="Assiette grise contenant du riz blanc, 
                                avec de la poudre de piment de Cayenne, 
                                de la ciboulette et du poivre par-dessus le riz."
                            width= {1491}
                            height= {1055}
                            className= "w-[1500px] h-auto object-cover rounded-4xl"
                        />
                    </AnimationScroll>
                </div>
            </div>
        </>
    );
}