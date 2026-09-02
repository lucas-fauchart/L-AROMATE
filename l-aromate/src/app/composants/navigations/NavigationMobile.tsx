/*NAVIGATION MOBILE*/
"use client";

import { useState } from "react";
import { FaYoutube, FaTiktok, FaInstagram, FaFacebook } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import BarreNavigationMobile from "./BarreNavigationMobile";
import MenuLateralMobile from "./MenuLateralMobile";
import Titre from "../ui/Titre";
import BarreSeparation from "../ui/BarreSeparation";
import ListeLiens from "../ui/ListeLiens";
import ListeIcones from "../ui/ListeIcones";
import GroupeImages from "../ui/GroupeImages";
import ImageElement from "../ui/ImageElement";
import BoutonIconeAlternante from "../animations/BoutonIconeAlternante";
import TitreAvecSeparation from "../ui/TitreAvecSeparation";

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
            <BarreNavigationMobile couleurFond="bg-[#21233C]" couleurFondScroll="bg-transparent" className="top-0 text-lg py-4 px-6 transition-all duration-300 animation-glisser-haut">
                <ImageElement src= "/logos/logo_blanc_aromate.png" alt= "Logo du restaurant l'Aromate" className= "w-8 xs:w-9 sm:w-10" width= {224} height= {405}/>
                <BoutonIconeAlternante
                    premiereIconeElement={{
                        icone: X,
                        className: "text-[#FFFFFF] w-6 xs:w-7 sm:w-8 h-auto",
                    }}
                    deuxiemeIconeElement={{
                        icone: Menu,
                        className: "text-[#FFFFFF] w-6 xs:w-7 sm:w-8 h-auto",
                    }}
                    animationIcone={{
                        premiereAnimation: "animation-rotation-gauche",
                        deuxiemeAnimation: "animation-rotation-droite",
                    }}
                    etatOuverture={{
                        ouvert: menuLateralOuvert,
                        setOuvert: setMenuLateralOuvert,
                        ouvrir: ouvrirMenuLateral,
                        fermer: fermerMenuLateral,
                    }}
                />
            </BarreNavigationMobile>

            {menuLateralVisible && (
                <MenuLateralMobile          
                    overlayProps={{
                        className: "fixed inset-0 z-40 bg-transparent",
                        onClick: () => setMenuLateralOuvert(false),
                    }}
                    ouvertureMenuLateralVisibilite={{
                        ouvertureMenuLateral: menuLateralOuvert,
                        setOuvertureMenuLateral: setMenuLateralOuvert,
                        visibiliteMenuLateral: menuLateralVisible,
                        setVisibiliteMenuLateral: setMenuLateralVisible,
                    }}

                    className="gap-5 pt-4 bg-[#292B49]"
                >
                    <TitreAvecSeparation 
                        titreProps={{
                            titre: "Menu",
                            type: "h2",
                            className: "text-[#FFFFFF] text-md xs:text-lg sm:text-2xl",
                        }}
                        barreSeparationProps={{
                            className: "bg-[#FED17C] w-[60px] xs:w-[60px] sm:w-[90px] h-[4px] rounded-full",
                        }}
                    />
                    <ListeLiens
                        liens={[
                            { nom: "Accueil", href: "/" },
                            { nom: "La Carte", href: "/laCarte" },
                            { nom: "Notre Histoire", href: "/notreHistoire" },
                            { nom: "Les Aromes", href: "/lesAromes" },
                            { nom: "Réservation", href: "/reservation" },
                            { nom: "Contact", href: "/contact" },
                        ]}
                        classNameListe= "flex flex-col pl-4 pb-2 xs:pb-4 sm:pb-6 gap-5 xs:gap-6 sm:gap-7 text-md xs:text-lg sm:text-2xl"
                        classNameElementListe= "animation-glisser-gauche-fondu opacity-0"
                        animationDelayListe= {250}
                    />
                    <TitreAvecSeparation
                        titreProps={{
                            titre: "Réseaux sociaux",
                            type: "h2",
                            className: "text-[#FFFFFF] text-md xs:text-lg sm:text-2xl pb-1 sm:pb-2",
                        }}
                        barreSeparationProps={{
                            className: "bg-[#FED17C] w-[140px] xs:w-[155px] sm:w-[205px] h-[4px] rounded-full",
                        }}
                    />
                    <ListeIcones 
                        icones= {[
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
                        ]}
                        classNameListe= "flex justify-center gap-4 pb-2 xs:pb-4 sm:pb-6 text-md xs:text-lg sm:text-2xl text-[#FFFFFF]"
                        classNameElementListe= "animation-apparition-simple-fondu opacity-0"
                        animationDelayListe={250}
                    />
                    <GroupeImages 
                        lesImagesGroupe= {[
                            {
                                imageElementProps: {
                                    src: "/images/agrumes/oranges/orange_1.png",
                                    alt: "Quartier d'orange",
                                    width: 100,
                                    height: 73,
                                    className: "absolute top-[20%] right-[10%] xs:top-[20%] xs:right-[15%] sm:top-[15%] sm:right-[20%] scale-65 xs:scale-95 sm:scale-110 rotate-270 animation-levitation-haut-bas",
                                },
                            },
                            {
                                imageElementProps: {
                                    src: "/images/agrumes/oranges/orange_2.png",
                                    alt: "Quartier d'orange",
                                    width: 100,
                                    height: 93,
                                    className: "absolute top-[30%] left-[25%] xs:top-[35%] xs:left-[25%] sm:top-[35%] sm:left-[35%] scale-120 xs:scale-160 sm:scale-200 rotate-5 animation-levitation-haut-bas",
                                },
                            },
                        ]}
                        className= "relative h-screen"
                    />
                </MenuLateralMobile>
            )}
        </>
    );
}