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
        <div className="flex flex-col items-center text-center">
            <AnimationScroll animation="animation-apparition-centre" delay={300}>
                <ImageElement
                    src="/noms/nom_blanc_aromate.png"
                    alt="Nom du restaurant L'Aromate"
                    className="mt-4 w-38 xs:w-9 sm:w-10"
                    width={754}
                    height={195}
                />
            </AnimationScroll>

            <AnimationScroll animation="animation-apparition-fondu-haut" delay={800}>
                <Texte className="mt-8 px-6" 
                    texte="Une exploration des aromates essentiels de la cuisine,
                    où chaque herbe dévoile ses arômes uniques pour enrichir et sublimer l’expérience culinaire."
                />
            </AnimationScroll>

            <AnimationScroll animation="animation-apparition-fondu" delay={1300}>
                <Bouton className="bg-[#FED17C] py-2 px-6 rounded-full text-[#21233C] mt-10" children="Réserver une table" onClick={reserverTable} type="button" disabled={false}/>   
            </AnimationScroll>

            <AnimationScroll animation="animation-apparition-fondu" delay={1800}>
                <ImageRotationScroll
                    imageElement={{
                        src: "/images/assiettes/assiette_sans_fond_saumon_aux_agrumes.png",
                        alt: "Assiette avec du saumon, des agrumes et des herbacés.",
                        width: 1024,
                        height: 1024,
                        className: "w-60 mt-12 animation-apparition-fondu",
                    }}
                    vitesse={0.3}
                />
            </AnimationScroll>
        </div>
    );
}