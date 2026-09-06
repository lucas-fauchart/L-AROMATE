"use client";

import ImageElement from "../ui/ImageElement";
import ListeLiens from "../ui/ListeLiens";
import BarreNavigationPC from "./BarreNavigationPC";

export default function NavigationPC() {
    
    return (
        <>
            <BarreNavigationPC couleurFond="bg-[#21233C]" couleurFondScroll="bg-[#21233C]">
                <ListeLiens 
                    liens= {[
                        { nom: "Accueil", href: "/" },
                        { nom: "La Carte", href: "/laCarte" },
                        { nom: "Notre Histoire", href: "/notreHistoire" },
                    ]}
                    classNameListe="flex lg:gap-16 xl:gap-20 2xl:gap-24 lg:text-base xl:text-xl 2xl:text-2xl" 
                />
                <ImageElement 
                    src= "/logos/logo_blanc_aromate.png"
                    alt= "Logo du restaurant l'Aromate"
                    className="lg:w-8 xl:w-10 2xl:w-12"
                    width= {224}
                    height= {405}
                />
                <ListeLiens 
                    liens= {[
                        { nom: "Les Aromes", href: "/lesAromes" },
                        { nom: "Réservation", href: "/reservation" },
                        { nom: "Contact", href: "/contact" },
                    ]}
                    classNameListe="flex lg:gap-16 xl:gap-20 2xl:gap-24 lg:text-base xl:text-xl 2xl:text-2xl" 
                />
            </BarreNavigationPC>
        </>
    );
}