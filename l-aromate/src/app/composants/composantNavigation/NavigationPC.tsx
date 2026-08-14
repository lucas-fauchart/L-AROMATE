"use client";

import BarreNavigationPC from "./BarreNavigationPC";

export default function NavigationPC() {
    
    return (
        <>
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
                    couleurFond: "bg-[#21233C]",
                    couleurTexteCategorie: "text-[#FFFFFF]",
                }}
                logo={{
                    logo: {
                        src: "/logo/logo_blanc_aromate.png",
                        alt: "Logo du restaurant l'Aromate",
                        className: "w-6 md:w-6 lg:w-8 xl:w-10",
                        width: 224,
                        height: 405,
                    }
                }}
            />
        </>
    );
}