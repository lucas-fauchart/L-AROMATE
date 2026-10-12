/* RESERVATION FIN PAGE */
"use client";

import { useRouter } from "next/navigation";
import ImageElement from "../ui/ImageElement";
import Bouton from "../ui/Bouton";
import AnimationScroll from "../animations/AnimationScroll";

export default function RevervationFinPage() {
    const router = useRouter();

    const reserverTable = () => {
        router.push("/reservation");
    };

    return (
        <>
            {/*MOBILE / TABLETTE*/}
            <div className="lg:hidden">
                <div className="flex flex-col text-center py-10 xsm:py-14 md:py-16">
                    <div className="relative">
                        <AnimationScroll animation="animation-apparition-fondu" delay={200}>
                            <ImageElement
                                src="/images/reservationFinPage/interieurRestaurent.png"
                                alt="Intérieur du restaurant L'Aromate"
                                width={1792}
                                height={877}
                                className="block w-full object-cover"
                            />
                        </AnimationScroll>

                        <AnimationScroll animation="animation-apparition-fondu" delay={700}>
                            <Bouton className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-[#FED17C] py-4 px-6 xs:px-8 sm:px-10 text-md xs:text-xl sm:text-2xl rounded-full text-[#21233C]" onClick={reserverTable} type="button" disabled={false}>
                                Réserver une table
                            </Bouton>
                        </AnimationScroll>
                    </div>               
                </div>
            </div>

            {/*PC*/}
            <div className="hidden lg:block">
                <div className="flex flex-col text-center lg:py-24">
                    <div className="relative">
                        <AnimationScroll animation="animation-apparition-fondu" delay={200}>
                            <ImageElement
                                src="/images/reservationFinPage/interieurRestaurent.png"
                                alt="Intérieur du restaurant L'Aromate"
                                width={1792}
                                height={877}
                                className="block h-[100px] w-full object-cover"
                            />
                        </AnimationScroll>

                        <AnimationScroll animation="animation-apparition-fondu" delay={700}>
                            <Bouton className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-[#FED17C] rounded-full bg-[#FED17C] lg:px-8 xl:px-10 2xl:px-12 py-4 text-2xl text-[#21233C]" onClick={reserverTable} type="button" disabled={false}>
                                Réserver une table
                            </Bouton>
                        </AnimationScroll>
                    </div>               
                </div>
            </div>
        </>
    );
}