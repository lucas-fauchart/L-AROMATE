/*MENU LATERALE MOBILE*/
"use client"

import EnTeteSection, { type EnTeteSectionProps } from "../composantsReutilisables/EnTeteSection";
import ListeNavigation, { type ListeNavigationProps } from "../composantsReutilisables/ListeNavigation";
import GroupeImages, { type GroupeImagesProps } from "../composantsReutilisables/GroupeImages";
import Overlay, { type OverlayProps } from "../composantsReutilisables/Overlay";
import ListeReseauxSociaux, { type ListeReseauxSociauxProps } from "../composantsReutilisables/ListeReseauxSociaux";

type OuvertureMenuLateralVisibilite = {
    //Valeur : false
    ouvertureMenuLateral: boolean;
    setOuvertureMenuLateral: React.Dispatch<React.SetStateAction<boolean>>;
    visibiliteMenuLateral: boolean;
    setVisibiliteMenuLateral: React.Dispatch<React.SetStateAction<boolean>>;
};

//Props du menu latéral mobile
type MenuLateralMobileProps = {
    premiereEnTeteSection: EnTeteSectionProps;
    deuxiemeEnTeteSection: EnTeteSectionProps;
    listeNavigationProps: ListeNavigationProps;
    groupeImagesProps: GroupeImagesProps;
    listeReseauxSociaux: ListeReseauxSociauxProps;
    overlayProps: OverlayProps;
    ouvertureMenuLateralVisibilite: OuvertureMenuLateralVisibilite;
    className: string;
};

export default function MenuLateralMobile({premiereEnTeteSection, deuxiemeEnTeteSection, listeNavigationProps, groupeImagesProps, listeReseauxSociaux, overlayProps, ouvertureMenuLateralVisibilite, className}: MenuLateralMobileProps) {
    return (
        <>
            {/*Overlay*/}
            <Overlay {...overlayProps}/>

            {/*Menu latéral mobile*/}
            <div className={`fixed left-0 top-0 h-screen z-50 w-3/4 flex flex-col md:hidden ${className} ${ouvertureMenuLateralVisibilite.ouvertureMenuLateral ? "animation-glisser-gauche" : "animation-glisser-droite"}`} onAnimationEnd={() => { if (!ouvertureMenuLateralVisibilite.ouvertureMenuLateral) { ouvertureMenuLateralVisibilite.setVisibiliteMenuLateral(false) }}}>

                {/*En tête section*/}
                <EnTeteSection {...premiereEnTeteSection}/>

                {/*Catégories de navigations*/}
                <ListeNavigation {...listeNavigationProps}/>

                {/*En tête section*/}
                <EnTeteSection {...deuxiemeEnTeteSection}/>

                {/*Icones réseaux sociaux*/}
                <ListeReseauxSociaux {...listeReseauxSociaux}/>

                {/*Groupe d'images*/}
                <GroupeImages {...groupeImagesProps}/>
            </div>
        </>
    );
}