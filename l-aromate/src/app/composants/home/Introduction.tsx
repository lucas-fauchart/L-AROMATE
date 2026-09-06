/* INTRODUCTION */
"use client";

import { useRouter } from "next/navigation";
import AnimationScroll from "../animations/AnimationScroll";
import ImageElement from "../ui/ImageElement";
import ImageRotationScroll from "../animations/ImageRotationScroll";
import Bouton from "../ui/Bouton";
import Texte from "../ui/Texte";

export default function Introduction() {
    const router = useRouter();

    const reserverTable = () => {
        router.push("/reservation");
    };

    return (
        <>
            {/*MOBILE / TABLETTE*/}
            <div className="lg:hidden">
                <div className="flex flex-col items-center text-center min-h-[100svh]">
                    <AnimationScroll animation="animation-apparition-centre" delay={300}>
                        <ImageElement
                            src="/noms/nom_blanc_aromate.png"
                            alt="Nom du restaurant L'Aromate"
                            className="mt-4 xs:mt-6 sm:mt-10 w-52 xs:w-62 sm:w-76"
                            width={754}
                            height={195}
                        />
                    </AnimationScroll>

                    <AnimationScroll animation="animation-apparition-fondu-haut" delay={800}>
                        <Texte className="mt-8 xs:mt-10 sm:mt-14 px-6 xs:px-12 sm:px-18 text-md xs:text-xl sm:text-2xl" 
                            texte="Une exploration des aromates essentiels de la cuisine,
                            où chaque herbe dévoile ses arômes uniques pour enrichir et sublimer l’expérience culinaire."
                        />
                    </AnimationScroll>

                    <AnimationScroll animation="animation-apparition-fondu" delay={1300}>
                        <Bouton className="bg-[#FED17C] py-4 px-6 xs:px-8 sm:px-10 text-md xs:text-xl sm:text-2xl rounded-full text-[#21233C] mt-10 xs:mt-14 sm:mt-18" onClick={reserverTable} type="button" disabled={false}>  
                            Réserver une table
                        </Bouton> 
                    </AnimationScroll>

                    <AnimationScroll animation="animation-apparition-fondu" delay={1800}>
                        <ImageRotationScroll
                            imageElement={{
                                src: "/images/assiettes/assiette_sans_fond_saumon_aux_agrumes.png",
                                alt: "Assiette avec du saumon, des agrumes et des herbacés.",
                                width: 1024,
                                height: 1024,
                                className: "w-58 xs:w-70 sm:w-80 mt-14 xs:mt-24 sm:mt-30 animation-apparition-fondu",
                            }}
                            vitesse={0.3}
                        />
                    </AnimationScroll>
                </div>
            </div>

            {/*PC*/}
            <div className="hidden lg:block">
                <div className="flex min-h-[100svh] items-center justify-center lg:gap-28 xl:gap-28 lg:pb-30 xl:pb-32 px-24">

                    {/* CONTENU GAUCHE */}
                    <div className="flex flex-col items-start">
                        <AnimationScroll animation="animation-apparition-centre" delay={300}>
                            <ImageElement
                                src="/noms/nom_blanc_aromate.png"
                                alt="Nom du restaurant L'Aromate"
                                className="lg:w-64 xl:w-78 2xl:w-90"
                                width={754}
                                height={195}
                            />
                        </AnimationScroll>
                        <AnimationScroll animation="animation-apparition-fondu-haut" delay={800}>
                            <Texte
                                className="mt-12 lg:w-sm xl:w-xl 2xl:w-2xl lg:text-xl xl:text-2xl 2xl:text-3xl"
                                texte="Une exploration des aromates essentiels de la cuisine, 
                                où chaque herbe dévoile ses arômes uniques pour enrichir et sublimer l’expérience culinaire."
                            />
                        </AnimationScroll>
                        <AnimationScroll animation="animation-apparition-fondu" delay={1300}>
                            <Bouton className="lg:mt-18 xl:mt-22 2xl:mt-26 rounded-full bg-[#FED17C] lg:px-8 xl:px-10 2xl:px-12 py-4 lg:text-xl xl:text-2xl 2xl:text-3xl text-[#21233C]" onClick={reserverTable} type="button">
                                Réserver une table
                            </Bouton>
                        </AnimationScroll>
                    </div>

                    {/* CONTENU DROIT */}
                    <div className="flex justify-center items-start">
                        <AnimationScroll animation="animation-apparition-fondu" delay={1800}>
                            <ImageRotationScroll
                                imageElement={{
                                    src: "/images/assiettes/assiette_sans_fond_saumon_aux_agrumes.png",
                                    alt: "Assiette avec du saumon, des agrumes et des herbacés.",
                                    width: 980,
                                    height: 980,
                                    className: "lg:w-[400px] xl:w-[500px] 2xl:w-[600px]",
                                }}
                                vitesse={0.3}
                            />
                        </AnimationScroll>
                    </div>
                </div>
            </div>
        </>
    );
}