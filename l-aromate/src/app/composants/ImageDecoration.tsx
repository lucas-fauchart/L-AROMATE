"use client";

import Image from "next/image";

//Image de décoration
type ImageDecoration = {
    src: string;
    alt: string;
    width: number;
    height: number;
    style: {
        //Valeur : top-[20%] right-[10%] xs:top-[20%] xs:right-[15%]
        positionImage: string,
        //Valeur :  scale-65 xs:scale-95
        tailleImage: string,
        //Valeur : rotate-270
        rotationImage : string,
    }
    animation: string,
};

//Props pour les images de décoration
export type ImageDecorationProps = { 
    imagesDecoration: ImageDecoration[],
};

export default function ImageDecoration({ imagesDecoration }: ImageDecorationProps) {
    return (
        <div className="relative h-screen">
            {imagesDecoration.map((uneImageDecoration, index) => (
                <Image key={index} src={uneImageDecoration.src} alt={uneImageDecoration.alt} width={uneImageDecoration.width} height={uneImageDecoration.height} className={`absolute ${uneImageDecoration.style.positionImage} ${uneImageDecoration.style.tailleImage} ${uneImageDecoration.style.rotationImage} ${uneImageDecoration.animation}`} loading="eager"/>
            ))}
        </div>
    );
}