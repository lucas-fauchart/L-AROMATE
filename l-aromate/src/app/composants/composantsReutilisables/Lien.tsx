/*LIEN*/
"use client";

import Link from "next/link";
import { ReactNode } from "react";

//Props du composant
export type LienProps = {
    contenu: ReactNode;
    href: string;
    className?: string;
};

export default function Lien({ contenu, href, className}: LienProps) {
    return (
        <Link href={href} className={className}>
            {contenu}
        </Link>
    );
}