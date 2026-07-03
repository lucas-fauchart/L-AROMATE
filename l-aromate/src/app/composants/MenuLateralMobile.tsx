/*MENU LATERALE MOBILE*/
"use client"

import Image from "next/image";
import Link from "next/link";
import { IconType } from "react-icons";

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
    couleurBarreSeparation: string;
    //Valeur : text-[#292B49]
    couleurTexteTitre: string;
    couleurTexteCategorieIconeReseauSocial: string;
    //Valeur : w-[60px] sm:w-[90px]
    largeurPremiereBarre: string;
    largeurDeuxiemeBarre: string;
};

//Props du menu latéral mobile
type MenuLateralMobileProps = {
    categoriesNavigations: CategorieNavigation[];
    iconesReseauxSociaux: IconeReseauSocial[];
    imagesDecorations: ImageDecoration[];
    stylesMenuLateralMobile: StyleMenuLateralMobile;
};

export default function MenuLateralMobile({categoriesNavigations, iconesReseauxSociaux, imagesDecorations, stylesMenuLateralMobile}: MenuLateralMobileProps) {
    return (
        <>
            <div className={`fixed left-0 top-0 h-screen z-index w-3/4 flex flex-col gap-5 pt-2 md:hidden ${stylesMenuLateralMobile.couleurFond}`}>

                {/*Titre et barre de séparation*/}
                <div className={`flex flex-col items-center`}>
                    <h2 className={`text-center pb-1 text-md xs:text-lg sm:text-2xl sm:pb-2 ${stylesMenuLateralMobile.couleurTexteTitre}`}>Menu</h2>

                    <div className={`${stylesMenuLateralMobile.largeurPremiereBarre} h-[4px] rounded-full ${stylesMenuLateralMobile.couleurBarreSeparation}`}/>
                </div>

                {/*Catégories de navigations*/}
                <ul className={`flex flex-col pl-4 text-md gap-5 xs:text-lg xs:gap-6 sm:text-2xl sm:gap-7 ${stylesMenuLateralMobile.couleurTexteCategorieIconeReseauSocial}`}>
                    {categoriesNavigations.map((uneCategorie, index) =>(
                        <li key={index}><Link href={uneCategorie.href}>{uneCategorie.nom}</Link></li>
                    ))}    
                </ul>

                {/*Titre et barre de séparation*/}
                <div className={`flex flex-col items-center`}>
                    <h2 className={`text-center pb-1 text-md xs:text-lg sm:text-2xl sm:pb-2 ${stylesMenuLateralMobile.couleurTexteTitre}`}>Nos réseaux</h2>

                    <div className={`${stylesMenuLateralMobile.largeurDeuxiemeBarre} h-[4px] rounded-full ${stylesMenuLateralMobile.couleurBarreSeparation}`}/>
                </div>

                {/*Icones réseaux sociaux*/}
                <div className={`flex justify-center gap-4 ${stylesMenuLateralMobile.couleurTexteCategorieIconeReseauSocial}`}>
                    {iconesReseauxSociaux.map((unReseauSocial, index) => {
                        const IconeReseauSocial = unReseauSocial.icone;
                        
                        return (
                            <Link key={index} href={unReseauSocial.href}>
                                <IconeReseauSocial className="w-5 xs:w-6 sm:w-7 h-auto"/>
                            </Link>
                        )
                    })}
                </div>

                {/*Images décorations*/}
                <div className={`relative h-screen`}>
                    {imagesDecorations.map((uneImageDecoration, index) => (
                        <Image key={index} className={uneImageDecoration.className} src={uneImageDecoration.src} alt={uneImageDecoration.alt} width={uneImageDecoration.width} height={uneImageDecoration.height} loading="eager"/>
                    ))}
                </div>
            </div>
        </>
    );
}

