/* INTRODUCTION */
"use client";

import AnimationScroll from "../animations/AnimationScroll";
import GroupeImages from "../ui/GroupeImages";
import ImageElement from "../ui/ImageElement";
import TitreAvecSeparation from "../ui/TitreAvecSeparation";
import TitreTexte from "../ui/TitreTexte";

export default function NotrePhilosophie() {
    return (
        <>
            {/*MOBILE / TABLETTE*/}
            <div className="lg:hidden">
                <div className="flex flex-col text-center">
                    <div className="relative">
                        
                    </div>
                </div>
            </div>

            {/*PC*/}
            <div className="hidden lg:block">
                <div className="mx-auto flex max-w-[1600px] text-center items-center justify-center gap-12 px-8 py-8 xl:gap-20 xl:px-12 2xl:px-16">   
                    
                </div>
            </div>
        </>
    );
}