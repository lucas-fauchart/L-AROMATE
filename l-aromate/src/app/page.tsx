"use client"

import BarreNavigationPC from "./composants/BarreNavigationPC";
import NavigationMobile from "./composants/NavigationMobile"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <BarreNavigationPC
        categoriesGauche={[
          { nom: "Accueil", href: "/" }, 
          { nom: "La Carte", href: "/laCarte" }, 
          { nom: "Notre Histoire", href: "/notreHistoire" },
        ]}
        categoriesDroite={[
          { nom: "Les Aromes", href: "/lesAromes" },
          { nom: "Réservation", href: "/reservation" },
          { nom: "Contact", href: "/contact" },
        ]}
        stylesBarreNavigationPC={{
          couleurFond: "transparent",
          couleurTexteCategorie: "text-[#FFFFFF]",
        }}
        imageLogo={{
          src: "/logo/logo_blanc_aromate.png",
          alt: "Logo du restaurant l'Aromate"
        }}
      />

      <NavigationMobile/>
    </div>
  );
}
