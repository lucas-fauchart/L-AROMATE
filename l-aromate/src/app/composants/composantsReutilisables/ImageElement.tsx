/*IMAGE ELEMENT*/

import Image from "next/image";

//Props du composant
export type ImageElementProps = {
    src: string;
    alt: string;
    className: string;
    height: number;
    width: number;
};

export default function ImageElement({ src, alt, className, height, width } : ImageElementProps ) {
    return (
        <Image src={src} alt={alt} width={width} height={height} className={`h-auto ${className}`} loading="eager"/>
    );
}