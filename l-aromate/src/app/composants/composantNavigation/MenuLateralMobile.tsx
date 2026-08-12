/*MENU LATERALE MOBILE*/
"use client"

import TitreBarreSeparation, { type TitreBarreSeparationProps } from "../composantsReutilisables/TitreBarreSeparation";
import ListeCategorie, { type ListeNavigationProps } from "../composantsReutilisables/ListeCategorie";
import ImageDecoration, { type ImageDecorationProps } from "../composantsReutilisables/ImageDecoration";
import ListeIconesReseauxSociaux, { type ReseauxSociauxProps } from "../composantsReutilisables/ListeIconeReseauxSociaux";

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
    stylesMenuLateralMobile: StyleMenuLateralMobile;
    ouvertureMenuLateralVisibilite: OuvertureMenuLateralVisibilite;
    premiereTitreBarreSeparation: TitreBarreSeparationProps;
    deuxiemeTitreBarreSeparation: TitreBarreSeparationProps;
    listeCategorieNavigation: ListeNavigationProps;
    imageDecoration: ImageDecorationProps;
    listeIconeReseauxSociaux: ReseauxSociauxProps;
};

export default function MenuLateralMobile({premiereTitreBarreSeparation, deuxiemeTitreBarreSeparation, listeCategorieNavigation, listeIconeReseauxSociaux, imageDecoration, stylesMenuLateralMobile, ouvertureMenuLateralVisibilite}: MenuLateralMobileProps) {
    return (
        <>
            {/*Overlay*/}
            <div className="fixed inset-0 z-40 bg-transparent" onClick={() => ouvertureMenuLateralVisibilite.setOuvertureMenuLateral(false)}/>

            {/*Menu latéral mobile*/}
            <div className={`fixed left-0 top-0 h-screen z-50 w-3/4 flex flex-col gap-5 pt-4 md:hidden ${stylesMenuLateralMobile.couleurFond} ${ouvertureMenuLateralVisibilite.ouvertureMenuLateral ? "animation-glisser-gauche" : "animation-glisser-droite"}`} onAnimationEnd={() => { if (!ouvertureMenuLateralVisibilite.ouvertureMenuLateral) { ouvertureMenuLateralVisibilite.setVisibiliteMenuLateral(false) }}}>

                {/*Titre et barre de séparation*/}
                <TitreBarreSeparation {...premiereTitreBarreSeparation}/>

                {/*Catégories de navigations*/}
                <ListeCategorie {...listeCategorieNavigation}/>

                {/*Titre et barre de séparation*/}
                <TitreBarreSeparation {...deuxiemeTitreBarreSeparation}/>

                {/*Icones réseaux sociaux*/}
                <ListeIconesReseauxSociaux {...listeIconeReseauxSociaux}/>

                {/*Images décorations*/}
                <ImageDecoration {...imageDecoration}/>
            </div>
        </>
    );
}

