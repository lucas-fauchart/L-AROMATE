/* RESERVATION FIN PAGE */
"use client";

import { useRouter } from "next/navigation";
import ImageElement from "../ui/ImageElement";
import Bouton from "../ui/Bouton";

export default function RevervationFinPage() {
    const router = useRouter();

    const reserverTable = () => {
        router.push("/reservation");
    };

    return (
        <>
            {/*MOBILE / TABLETTE*/}
            <div className="lg:hidden">
                
            </div>

            {/*PC*/}
            <div className="hidden lg:block">
                
            </div>
        </>
    );
}