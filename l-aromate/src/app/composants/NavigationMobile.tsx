
"use client";

import { useState } from "react";
import BarreNavigationMobile from "./BarreNavigationMobile";
import MenuLateralMobile from "./MenuLateralMobile";
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";

export default function NavigationMobile() {
    const [menuLateralOuvert, setMenuLateralOuvert] = useState(false);
    const [menuLateralVisible, setMenuLateralVisible] = useState(false);

    const ouvrirMenuLateral = () => {
        setMenuLateralVisible(true);
        setMenuLateralOuvert(true);
    };

    const fermerMenuLateral = () => {
        setMenuLateralOuvert(false);
    };

    return (
        <>
            <BarreNavigationMobile
                stylesBarreNavigationMobile={{
                    couleurFond: "transparent",
                    couleurIcone: "text-[#FFFFFF]"
                }}
                imageLogo={{
                    src: "/logo/logo_blanc_aromate.png",
                    alt: "Logo du restaurant l'Aromate"
                }}
                ouvertureMenuLateral={{
                    ouvertureMenuLateral: menuLateralOuvert,
                    setOuvertureMenuLateral: setMenuLateralOuvert,
                    ouvrirMenu: ouvrirMenuLateral,
                    fermerMenu: fermerMenuLateral

                }}
            />

            {menuLateralVisible && (
                <MenuLateralMobile
                    categoriesNavigations={[
                        { nom: "Accueil", href: "/" }, 
                        { nom: "La Carte", href: "/laCarte" }, 
                        { nom: "Notre Histoire", href: "/notreHistoire" },
                        { nom: "Les Aromes", href: "/lesAromes" },
                        { nom: "Réservation", href: "/reservation" },
                        { nom: "Contact", href: "/contact" },
                    ]} 
                    iconesReseauxSociaux={[
                        { className: "w-5 xs:w-6 sm:w-7 h-auto", href: "https://www.youtube.com", icone: FaYoutube },
                        { className: "w-5 xs:w-6 sm:w-7 h-auto", href: "https://www.tiktok.com", icone: FaTiktok },
                        { className: "w-5 xs:w-6 sm:w-7 h-auto", href: "https://www.instagram.com", icone: FaInstagram },
                        { className: "w-5 xs:w-6 sm:w-7 h-auto", href: "https://www.facebook.com", icone: FaFacebook },
                    ]}
                    imagesDecorations={[
                        {className: "absolute top-[20%] right-[10%] scale-65 rotate-270 xs:scale-95 xs:top-[20%] xs:right-[15%] sm:top-[20%] sm:right-[25%] sm:scale-110", src: "/images/agrumes/oranges/orange_1.png", width:100, height: 73, alt: "Quartier d'orange"}, 
                        {className: "absolute top-[30%] left-[25%] scale-120 rotate-5 xs:scale-160 xs:top-[35%] xs:left-[25%] sm:top-[35%] sm:left-[35%] sm:scale-200", src: "/images/agrumes/oranges/orange_2.png", alt: "Quartier d'orange", width: 100, height: 93}
                    ]}
                    stylesMenuLateralMobile={{
                        couleurFond: "bg-[#292B49]",
                        couleurBarreSeparation: "bg-[#FED17C]",
                        couleurTexteTitre: "text-[#FFFFFF]",
                        couleurTexteCategorieIconeReseauSocial: "text-[#FFFFFF]",
                        largeurPremiereBarre: "w-[60px] sm:w-[90px]",
                        largeurDeuxiemeBarre: "w-[110px] sm:w-[160px]",
                    }}
                    ouvertureMenuLateralVisibilite={{
                        ouvertureMenuLateral: menuLateralOuvert,
                        setOuvertureMenuLateral: setMenuLateralOuvert,
                        visibiliteMenuLateral: menuLateralVisible,
                        setVisibiliteMenuLateral: setMenuLateralVisible,
                    }}
                />
            )}
        </>
    );
}