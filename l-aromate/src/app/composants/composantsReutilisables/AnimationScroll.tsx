"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export type AnimationScrollProps = {
    children: ReactNode;
    animation: string;
    delay?: number;
};

export default function AnimationScroll({ children, animation, delay = 0 }: AnimationScrollProps) {
    //Variables
    const elementRef = useRef<HTMLDivElement>(null);
    const [declenchementAnimation, setDeclenchementAnimation] = useState(false);

    //
    useEffect(() => {
        //Fonction observateur
        const observateur = new IntersectionObserver(
            //Appel de la fonction qui détermine si quelque chose est entré ou non
            ([entry]) => {
                //Vérifie si l'élément est bien entré sur l'écran
                if (entry.isIntersecting) {
                    setDeclenchementAnimation(true);
                    //Arrête de surveiller l'élement entré sur l'écran pour maintenant et les autres fois (hors rechargement de la page)
                    observateur.disconnect();
                }
            },
            {
                //Valeur qui détermine à partir de quel pourcentage de visibilité de l'élément on déclenche une animation
                threshold: 0.1, //0.1 -> 10%
            }
        );

        //Vérifie si l'élément est visible à l'ecran
        if (elementRef.current) {
            //Observe l'élement
            observateur.observe(elementRef.current);
        }

        //Arrête de surveiller l'élement une fois plus visible sur l'écran
        return () => observateur.disconnect();
    }, []);

    return (
        //Applique l'animation à l'enfant de la balise div
        <div ref={elementRef} className={declenchementAnimation ? animation : "opacity-0"} style={{ animationDelay: `${delay}ms` }}>
            {children}
        </div>
    );
}