/*MENU LATERALE MOBILE*/
"use client"

import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";
import TitreBarreSeparation, {
    type TitreBarreSeparationProps,
} from "./titreBarreSeparation";

//Catégories de navigation
type CategorieNavigation = {
    //Valeur : Accueil
    nom: string;
    //Valeur : /accueil
    href: string;
};

//Reseau social
type IconeReseauSocial = {
    //Valeur : /accueil
    href: string;
    //Valeur : <FaYoutube />
    icone: IconType;
    //Valeur : w-5 xs:w-6 sm:w-7 h-auto
    className: string;
};

//Image de décoration
type ImageDecoration = {
    //Valeur : /images/agrumes/oranges/orange_1.png
    src: string;
    //Valeur : Quartier d'orange
    alt: string;
    //Valeur : 100
    width: number;
    //Valeur : 93
    height: number;
    //Valeur : right-[10%] scale-65 rotate-270  
    className: string;
};

//Style du menu latérale mobile
type StyleMenuLateralMobile = {
    //Valeur : bg-[#292B49]
    couleurFond: string;
    //Valeur : text-[#292B49]
    couleurTexteCategorieIconeReseauSocial: string;
};

type OuvertureMenuLateralVisibilite = {
    //Valeur : false
    ouvertureMenuLateral: boolean;
    setOuvertureMenuLateral: React.Dispatch<React.SetStateAction<boolean>>;
    visibiliteMenuLateral: boolean;
    setVisibiliteMenuLateral: React.Dispatch<React.SetStateAction<boolean>>;
};

//Props du menu latéral mobile
type MenuLateralMobileProps = {
    categoriesNavigations: CategorieNavigation[];
    iconesReseauxSociaux: IconeReseauSocial[];
    imagesDecorations: ImageDecoration[];
    stylesMenuLateralMobile: StyleMenuLateralMobile;
    ouvertureMenuLateralVisibilite: OuvertureMenuLateralVisibilite;
    premiereTitreBarreSeparation: TitreBarreSeparationProps;
    deuxiemeTitreBarreSeparation: TitreBarreSeparationProps;
};

export default function MenuLateralMobile({premiereTitreBarreSeparation, deuxiemeTitreBarreSeparation, categoriesNavigations, iconesReseauxSociaux, imagesDecorations, stylesMenuLateralMobile, ouvertureMenuLateralVisibilite}: MenuLateralMobileProps) {
    return (
        <>
            {/*Overlay*/}
            <div className="fixed inset-0 z-40 bg-transparent" onClick={() => ouvertureMenuLateralVisibilite.setOuvertureMenuLateral(false)}/>

            {/*Menu latéral mobile*/}
            <div className={`fixed left-0 top-0 h-screen z-50 w-3/4 flex flex-col gap-5 pt-4 md:hidden ${stylesMenuLateralMobile.couleurFond} ${ouvertureMenuLateralVisibilite.ouvertureMenuLateral ? "animation-glisser-gauche" : "animation-glisser-droite"}`} onAnimationEnd={() => { if (!ouvertureMenuLateralVisibilite.ouvertureMenuLateral) { ouvertureMenuLateralVisibilite.setVisibiliteMenuLateral(false) }}}>

                {/*Titre et barre de séparation*/}
                <TitreBarreSeparation {...premiereTitreBarreSeparation}/>

                {/*Catégories de navigations*/}
                <ul className={`flex flex-col pl-4 pb-2 xs:pb-4 sm:pb-6 text-md gap-5 xs:text-lg xs:gap-6 sm:text-2xl sm:gap-7 ${stylesMenuLateralMobile.couleurTexteCategorieIconeReseauSocial}`}>
                    {categoriesNavigations.map((uneCategorie, index) =>(
                        <li className="animation-glisser-gauche-fondu opacity-0" style={{ animationDelay: `${index * 250}ms`}} key={index}>
                            <Link href={uneCategorie.href}>
                                {uneCategorie.nom}
                            </Link>
                        </li>
                    ))}    
                </ul>

                {/*Titre et barre de séparation*/}
                <TitreBarreSeparation {...deuxiemeTitreBarreSeparation}/>

                {/*Icones réseaux sociaux*/}
                <div className={`flex justify-center gap-4 pb-2 xs:pb-4 sm:pb-6 ${stylesMenuLateralMobile.couleurTexteCategorieIconeReseauSocial}`}>
                    {iconesReseauxSociaux.map((unReseauSocial, index) => {
                        const IconeReseauSocial = unReseauSocial.icone;
                        
                        return (
                            <Link  key={index} href={unReseauSocial.href} className="animation-apparition-simple-fondu opacity-0" style={{ animationDelay: `${index * 250}ms`}}>
                                <IconeReseauSocial className="w-5 xs:w-6 sm:w-7 h-auto"/>
                            </Link>
                        )
                    })}
                </div>

                {/*Images décorations*/}
                <div className={`relative h-screen`}>
                    {imagesDecorations.map((uneImageDecoration, index) => (
                        <Image key={index} className={`${uneImageDecoration.className} animation-levitation-haut-bas`} src={uneImageDecoration.src} alt={uneImageDecoration.alt} width={uneImageDecoration.width} height={uneImageDecoration.height} loading="eager"/>
                    ))}
                </div>
            </div>
        </>
    );
}

