"use client"

import NavigationPC from "./composants/composantNavigation/NavigationPC";
import NavigationMobile from "./composants/composantNavigation/NavigationMobile";
import Section from "./composants/composantsReutilisables/Section";
import ImageElement from "./composants/composantsReutilisables/ImageElement";
import ImageRotationScroll from "./composants/composantsReutilisables/ImageRotationScroll";
import AnimationScroll from "./composants/composantsReutilisables/AnimationScroll";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-[#21233C]">
      
      <NavigationPC/>
      <NavigationMobile/> 

      <main>
        <Section className="flex flex-col items-center text-center">
          <AnimationScroll animation="animation-apparition-centre" delay={300}>
            <ImageElement src="/noms/nom_blanc_aromate.png" alt="Nom du restaurant L'Aromate" className="mt-4 w-38 xs:w-9 sm:w-10" width={754} height={195}/>
          </AnimationScroll>

          <AnimationScroll animation="animation-apparition-fondu-haut" delay={800}>
            <p className="mt-8 px-6">Une exploration des aromates essentiels de la cuisine, 
              ou chaque herbe dévoile ses arôme uniques pour enrichir et sublimer l’expérience culinaire
            </p>
          </AnimationScroll>
          
          <AnimationScroll animation="animation-apparition-fondu" delay={1300}>
            <button className="bg-[#FED17C] py-2 px-6 rounded-full text-[#21233C] mt-10">Réserver une table</button>
          </AnimationScroll>

          <AnimationScroll animation="animation-apparition-fondu" delay={1800}>
            <ImageRotationScroll 
                imageElement={{
                    src: "/images/assiettes/assiette_sans_fond_saumon_aux_agrumes.png",
                    alt: "Assiette avec du saumon, des argumes et des hérbacés.",
                    width: 1024,
                    height: 1024,
                    className: "w-60 mt-12 animation-apparition-fondu",
                }}
                vitesse={0.3}
            />
          </AnimationScroll>
   
        </Section>
      </main>
    
      <div className="h-1000"></div>
    </div>
  );
}
