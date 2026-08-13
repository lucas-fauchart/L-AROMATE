"use client";

import { useState } from "react";
import BarreNavigationMobile from "./BarreNavigationMobile";
import MenuLateralMobile from "./MenuLateralMobile";
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";

export default function NavigationMobile() {
    //Variables
    const [menuLateralOuvert, setMenuLateralOuvert] = useState<boolean>(false);
    const [menuLateralVisible, setMenuLateralVisible] = useState<boolean>(false);

    //Fonction pour l'ouverture du menu latéral
    const ouvrirMenuLateral = (): void => {
        setMenuLateralVisible(true);
        setMenuLateralOuvert(true);
    };

    //Fonction pour la fermeture du menu latéral
    const fermerMenuLateral = (): void => {
        setMenuLateralOuvert(false);
    };
    
    return (
        <>
            <BarreNavigationMobile
                stylesBarreNavigationMobile={{
                    couleurFond: "bg-[#21233C]",
                    couleurIcone: "text-[#FFFFFF]"
                }}
                ouvertureMenuLateral={{
                    ouvertureMenuLateral: menuLateralOuvert,
                    setOuvertureMenuLateral: setMenuLateralOuvert,
                    ouvrirMenu: ouvrirMenuLateral,
                    fermerMenu: fermerMenuLateral

                }}
                logo={{
                    logo: {
                        src: "/logo/logo_blanc_aromate.png",
                        alt: "Logo du restaurant l'Aromate",
                        className: "w-8 xs:w-9 sm:w-10",
                        width: 224,
                        height: 405,
                    }
                }}
            />

            {menuLateralVisible && (
                <MenuLateralMobile
                    stylesMenuLateralMobile={{
                        couleurFond: "bg-[#292B49]",
                        couleurTexteCategorieIconeReseauSocial: "text-[#FFFFFF]",
                    }}
                    
                    ouvertureMenuLateralVisibilite={{
                        ouvertureMenuLateral: menuLateralOuvert,
                        setOuvertureMenuLateral: setMenuLateralOuvert,
                        visibiliteMenuLateral: menuLateralVisible,
                        setVisibiliteMenuLateral: setMenuLateralVisible,
                    }}

                    premiereTitreBarreSeparation={{ 
                        titre: "Menu",
                        styleTitreBarreSeparation: {
                            couleurTexteTitre: "text-[#FFFFFF]",
                            tailleTexteTitre: "text-md xs:text-lg sm:text-2xl",
                            couleurBarreSeparation: "bg-[#FED17C]",
                            largeurBarre: "w-[60px] xs:w-[60px] sm:w-[90px]",
                        },
                    }}

                    deuxiemeTitreBarreSeparation={{ 
                        titre: "Réseaux sociaux",
                        styleTitreBarreSeparation: {
                            couleurTexteTitre: "text-[#FFFFFF]",
                            tailleTexteTitre: "text-md xs:text-lg sm:text-2xl",
                            couleurBarreSeparation: "bg-[#FED17C]",
                            largeurBarre: "w-[140px] xs:w-[155px] sm:w-[205px]",
                        },
                    }}

                    listeCategorieNavigation={{
                        categoriesNavigations: [
                            { nom: "Accueil", href: "/" },
                            { nom: "La Carte", href: "/laCarte" },
                            { nom: "Notre Histoire", href: "/notreHistoire" },
                            { nom: "Les Aromes", href: "/lesAromes" },
                            { nom: "Réservation", href: "/reservation" },
                            { nom: "Contact", href: "/contact" },
                        ],
                        styleListeNavigation: {
                            couleurTexte: "text-[#FFFFFF]",
                            tailleTexte: "text-md xs:text-lg sm:text-2xl",
                            positionnement: "flex flex-col pl-4 pb-2 xs:pb-4 sm:pb-6 text-md gap-5 xs:text-lg xs:gap-6 sm:text-2xl sm:gap-7"
                        },
                        animationListeNavigation: {
                            animation: "animation-glisser-gauche-fondu",
                        }
                    }}

                    listeIconeReseauxSociaux={{
                        iconesReseauxSociaux: [
                            {
                                href: "https://www.youtube.com",
                                icone: FaYoutube,
                            },
                            {
                                href: "https://www.tiktok.com",
                                icone: FaTiktok,
                            },
                            {
                                href: "https://www.instagram.com",
                                icone: FaInstagram,
                            },
                            {
                                href: "https://www.facebook.com",
                                icone: FaFacebook,
                            },
                        ],
                        styleReseauxSociaux: {
                            positionnement: "flex justify-center gap-4 pb-2 xs:pb-4 sm:pb-6",
                            tailleTexte: "text-md xs:text-lg sm:text-2xl",
                            couleurTexte: "text-[#FFFFFF]",
                        },
                        animationReseauxSociaux: {
                            animation: "animation-apparition-simple-fondu",
                        },
                    }}

                    imageDecoration={{
                        imagesDecoration: [
                            {
                                src: "/images/agrumes/oranges/orange_1.png",
                                alt: "Quartier d'orange",
                                width: 100,
                                height: 73,
                                style: {
                                    positionImage: "top-[20%] right-[10%] xs:top-[20%] xs:right-[15%] sm:top-[15%] sm:right-[20%]",
                                    tailleImage: "scale-65 xs:scale-95 sm:scale-110",
                                    rotationImage: "rotate-270",
                                },
                                animation: "animation-levitation-haut-bas"
                            },
                            {
                                src: "/images/agrumes/oranges/orange_2.png",
                                alt: "Quartier d'orange",
                                width: 100,
                                height: 93,
                                style: {
                                    positionImage: "top-[30%] left-[25%] xs:top-[35%] xs:left-[25%] sm:top-[35%] sm:left-[35%]",
                                    tailleImage: "scale-120 xs:scale-160 sm:scale-200",
                                    rotationImage: "rotate-5",
                                },
                                animation: "animation-levitation-haut-bas"
                            },
                        ],
                    }}
                />
            )}
        </>
    );
}