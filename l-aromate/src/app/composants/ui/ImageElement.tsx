/* IMAGE ELEMENT */

import Image from "next/image";

export type ImageElementProps = { src: string; alt: string; className: string; height: number; width: number; style?: React.CSSProperties; classNameConteneur?: string };

export default function ImageElement({ src, alt, className, height, width, style, classNameConteneur }: ImageElementProps) {

    const image = (
        <Image src={src} alt={alt} width={width} height={height} className={`h-auto ${className}`} style={style} loading="eager"/>
    );

    if (classNameConteneur) {
        return (
            <div className={classNameConteneur}>
                {image}
            </div>
        );
    }

    return image;
}