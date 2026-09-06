/*MENU LATERALE MOBILE*/
"use client"

import { ReactNode } from "react";
import Overlay, { type OverlayProps } from "../ui/Overlay";

type OuvertureMenuLateralVisibilite = {
    //Valeur : false
    ouvertureMenuLateral: boolean;
    setOuvertureMenuLateral: React.Dispatch<React.SetStateAction<boolean>>;
    visibiliteMenuLateral: boolean;
    setVisibiliteMenuLateral: React.Dispatch<React.SetStateAction<boolean>>;
};

//Props du composant
type MenuLateralMobileProps = {
    overlayProps: OverlayProps;
    ouvertureMenuLateralVisibilite: OuvertureMenuLateralVisibilite;
    className: string;
    children: ReactNode;
};

export default function MenuLateralMobile({ children, overlayProps, ouvertureMenuLateralVisibilite, className }: MenuLateralMobileProps) {
    return (
        <>
            {/*Overlay*/}
            <Overlay {...overlayProps}/>

            {/*Menu latéral mobile*/}
            <div className={` @container fixed left-0 top-0 h-screen z-50 w-3/4 xs:w-3/4 sm:w-3/4 md:w-3/4 flex flex-col lg:hidden ${className} ${ouvertureMenuLateralVisibilite.ouvertureMenuLateral ? "animation-glisser-gauche" : "animation-glisser-droite"}`} onAnimationEnd={() => { if (!ouvertureMenuLateralVisibilite.ouvertureMenuLateral) { ouvertureMenuLateralVisibilite.setVisibiliteMenuLateral(false) }}}>
                {children}
            </div>
        </>
    );
}