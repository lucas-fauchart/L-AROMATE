"use client";

import BarreNavigationPC from "./BarreNavigationPC";

export default function NavigationPC() {
    
    return (
        <>
            <BarreNavigationPC
                listeNavigationGauche={{
                    categoriesNavigation: [
                        { nom: "Accueil", href: "/" },
                        { nom: "La Carte", href: "/laCarte" },
                        { nom: "Notre Histoire", href: "/notreHistoire" },
                    ],
                    classNameListe: "flex md:gap-12 lg:gap-20 xl:gap-24 md:text-sm lg:text-base xl:text-lg",
                }}
                listeNavigationDroite={{
                    categoriesNavigation: [
                        { nom: "Les Aromes", href: "/lesAromes" },
                        { nom: "Réservation", href: "/reservation" },
                        { nom: "Contact", href: "/contact" },
                    ],
                    classNameListe: "flex md:gap-12 lg:gap-20 xl:gap-24 md:text-sm lg:text-base xl:text-lg",
                }}
                imageElement={{
                    src: "/logos/logo_blanc_aromate.png",
                    alt: "Logo du restaurant l'Aromate",
                    className: "w-6 md:w-6 lg:w-8 xl:w-10",
                    width: 224,
                    height: 405,
                }}
                couleurFond="bg-[#21233C]"
                couleurFondScroll="bg-transparent"

            />
        </>
    );
}