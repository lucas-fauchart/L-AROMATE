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
                    couleurFond: "transparent",
                    couleurTexteCategorie: "text-[#FFFFFF]",
                }}
                imageLogo={{
                    src: "/logo/logo_blanc_aromate.png",
                    alt: "Logo du restaurant l'Aromate"
                }}
            />
        </>
    );
}