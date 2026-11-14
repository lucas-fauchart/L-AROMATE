"use client"

//Importation
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Flame, Quote, Sparkles, Utensils } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separateur } from "../custom/separateur"

//Composant
export function NotrePhilosophie() {
    
    //Variable
    const [estPc, setEstPC] = useState(false)

    //Lancement au chargement du composant
    useEffect(() => {
        const verificationEcran = () => setEstPC(window.innerWidth >= 768)
        verificationEcran()
        window.addEventListener("resize", verificationEcran)
        return () => window.removeEventListener("resize", verificationEcran)
    })

    return(
        <section className="w-full sm:px-16 md:px-4 py-8 md:py-24 border-t bg-background overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-16 items-center">     

                    <motion.div key={estPc ? "img-pc" : "img-mobile"} initial={ estPc ? { opacity: 0, x: 20} : { opacity: 0, y: -20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-col text-center order-1 md:order-2 space-y-6 py-8 px-6 md:py-0 md:px-0">
                        <div className="space-y-2">
                            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                                Notre Philosophie
                            </h2>
                            <Separateur className="w-38"/>
                        </div>

                        <blockquote className="relative rounded-2xl bg-background space-y-3">
                            <Quote className="w-6 h-6 text-primary/40"/>
                            <p className="text-base md:text-lg font-medium italic text-foreground leading-relaxed">
                                « Cuisiner avec les aromates, c'est capturer le parfum d'un jardin ou d'une épice pour réveiller un souvenir à chaque bouchée. »
                            </p>
                            <footer className="pt-1 flex items-center justify-end gap-3">
                                <div className="w-8 h-0.5 bg-primary rounded-full"/>

                                <cite className="not-italic text-sm font-bold text-foraground">
                                    L'AROMATE
                                </cite>
                            </footer>
                        </blockquote>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ duration: 0.5 }} className="order-2 md:order-1 px-8 pb-8 md:px-0 md:pb-0">
                        <div className="relative aspect-[4/3] rounded-4xl w-full overflow-hidden shadow-2xl">
                            <motion.img whileTap={{ scale: 1.05 }} src={"/images/notrePhilosophie/chefCuisineAromate.png"} alt="Poulet au piment de cayenne avec riz, poivre noir et ciboulette." className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}