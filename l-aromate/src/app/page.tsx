"use client"

import NavigationPC from "./composants/composantNavigation/NavigationPC";
import NavigationMobile from "./composants/composantNavigation/NavigationMobile";
import Section from "./composants/composantsReutilisables/Section";
import ImageElement from "./composants/composantsReutilisables/ImageElement";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-[#21233C]">
      
      <NavigationPC/>
      <NavigationMobile/> 

      <main>
        <Section className="mb-30 flex flex-col items-center text-center">
          <ImageElement src="/nom_blanc_aromate.png" alt="Nom du restaurant L'Aromate" className="w-38 xs:w-9 sm:w-10 animation-apparition-simple-fondu" width={754} height={195}/>
        </Section>
      </main>
    
      <div className="h-1000"></div>
    </div>
  );
}
