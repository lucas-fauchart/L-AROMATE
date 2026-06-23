import Image from "next/image";
import BarreNavigation from "./composants/barreNavigation";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <BarreNavigation 
        categoriesGauche={["Accueil", "La Carte", "Notre Histoire"]} 
        categoriesDroite={["Les Aromes", "Réservation", "Contact"]} 
        tailleTexte="text-lg"
      />
    </div>
  );
}
