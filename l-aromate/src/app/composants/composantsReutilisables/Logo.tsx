import Image from "next/image";

type Logo = {
    src: string;
    alt: string;
    className: string;
    height: number;
    width: number;
};

export type LogoProps = {
    logo: Logo;
};

export default function Logo({ logo }: LogoProps) {
    return (
        <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className={`h-auto ${logo.className}`} loading="eager"/>
    );
}