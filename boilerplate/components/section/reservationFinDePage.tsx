"use client"

//Importation
import React from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

//Component
export function ReservationFinDePage() {

    //Variable
    const router = useRouter()

    //Handle de redirection 
    const handleRedirectionReservation = () => {
        router.push("/reservation")
    }

    return(
        <section className="w-full py-12 md:py-16 bg-secondary">
            <div>
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="relative w-full h-64 sm:h-80 md:h-140 overflow-hidden shadaw-xl flex items-center justify-center">
                    <img src="/images/reservationFinPage/interieurRestaurent.png" alt="Intérieur du restaurent L'Aromate." className="absolute inset-0 w-full h-full object-cover"/>

                    <div className="absolute inset-0 bg-black/40"/>

                    <div className="relative z-10">
                        <Button size="lg" onClick={handleRedirectionReservation} className="gap-2 h-12 px-6 text-base group/btn relative overflow-hidden transition-all duration-300 horver:shadow-[0_0_20px_rgba(var(--primary), 0.30)] active:scale-95">
                            <span>Réserver une table</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-1"/>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}