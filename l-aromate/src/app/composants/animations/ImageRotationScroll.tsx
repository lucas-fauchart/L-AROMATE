/*IMAGE ROTATION SCROLL*/
"use client";

import { useEffect, useRef, useState } from "react";
import ImageElement, { type ImageElementProps } from "../ui/ImageElement";

export type ImageRotationScrollProps = {
    imageElement: ImageElementProps;
    vitesse?: number;
};

export default function ImageRotationScroll({ imageElement, vitesse = 1 }: ImageRotationScrollProps) {
    //Variables
    const imageRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState(0);

    //Ecoute du scroll
    useEffect(() => {
        const gererScroll = () => {
            //Vérifie si la balise div est sur l'écran
            if (!imageRef.current) return;

            //Récupération de la position
            const position = imageRef.current.getBoundingClientRect();

            //Vérifie si l'image est sur l'écran
            if (position.bottom <= 0 || position.top >= window.innerHeight) {
                return;
            }

            //Calcul la rotation que l'image doit avoir en fonction de la vitesse établie
            setRotation(window.scrollY * vitesse);
        };

        //Appel de la fonction à chaque scroll
        window.addEventListener("scroll", gererScroll);

        return () => {
            //Arrête l'écoute du scroll
            window.removeEventListener("scroll", gererScroll);
        };
    }, [vitesse]);

    return (
        //Applique la rotation à la balise div
        <div ref={imageRef}>
            <ImageElement {...imageElement} style={{transform: `rotate(${rotation}deg)`, transformOrigin: "center center" }}/>
        </div>
    );
}