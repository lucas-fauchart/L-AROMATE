/* INTRODUCTION */
"use client";

import AnimationScroll from "../animations/AnimationScroll";
import GroupeImages from "../ui/GroupeImages";
import ImageElement from "../ui/ImageElement";
import Texte from "../ui/Texte";
import Titre from "../ui/Titre";
import TitreAvecSeparation from "../ui/TitreAvecSeparation";

export default function CreationJour() {
    return (
        <>
            {/*MOBILE / TABLETTE*/}
            <div className="lg:hidden">
                <div className="flex flex-col text-center">
                    <div className="relative">
                        <AnimationScroll animation="animation-apparition-fondu" delay={200}>
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
                            animationTitre={{animation: ""}}
                            animationBarre={{animation: ""}}
                        />
                        <div>
                            <Titre titre="Poulet au piment de cayenne" type="h2" className="pb-6 text-[#FFFFFF] text-xl xs:text-2xl xsm:text-3xl sm:text-4xl md:text-4xl"/>

                            <Texte className="text-center text-base xs:text-lg xsm:text-xl sm:text-2xl px-6" animationTexte={{animation: ""}} texte="Poulet relevé au piment de Cayenne, 
                                servi avec un riz blanc délicat, 
                                rehaussé de ciboulette fraîche et d’une touche de poivre pour un équilibre simple et intense."
                            />
                        </div>

                        <GroupeImages 
                            lesImagesGroupe={[
                                {
                                    imageElementProps: {
                                        src: "/images/herbaces/ciboulette/ciboulette_2.png",
                                        alt: "Un quartier d'orange",
                                        width: 150,
                                        height: 240,
                                        className: "absolute top-[3cqh] right-[12cqw] w-[10cqmin] h-auto rotate-280 animation-zoom",
                                    },
                                }, 
                                {
                                    imageElementProps: {
                                        src: "/images/epices/poivre_noir/poivre_noir_3.png",
                                        alt: "Un quartier d'orange",
                                        width: 150,
                                        height: 240,
                                        className: "absolute top-[2cqh] right-[68cqw] w-[10cqmin] h-auto rotate-250 animation-zoom",
                                    },
                                },
                                {
                                    imageElementProps: {
                                        src: "/images/epices/poivre_noir/poivre_noir_1.png",
                                        alt: "Un quartier d'orange",
                                        width: 150,
                                        height: 240,
                                        className: "absolute top-[6cqh] right-[78cqw] w-[6cqmin] h-auto rotate-250 animation-zoom",
                                    },
                                },
                                

                              
                            ]}
                            className="relative h-full w-full"
                        />
                    </div>
                </div>
            </div>

            {/*PC*/}
            <div className="hidden lg:block">
                <div className="flex flex-col text-center py-4">
                    
                </div>
            </div>
        </>
    );
}