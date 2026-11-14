"use client"

//Importation
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Flame, Sparkles, Utensils } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separateur } from "../custom/separateur"
import { Button } from "@/components/ui/button"

//Composant
export function PlatDuJour() {
    
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
        <section className="w-full md:px-4 md:py-24 border-t bg-secondary overflow-hidden">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-16 items-center">
                    <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ duration: 0.5 }} className="order-1 md:order-2">
                        <div className="relative aspect-[4/3] md:rounded-4xl w-full overflow-hidden shadow-2xl">
                            <motion.img whileTap={{ scale: 1.05 }} src={"/images/platDuJour/pouletPimentCayenne.png"} alt="Poulet au piment de cayenne avec riz, poivre noir et ciboulette." className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"/>

                            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold shadow-sm border border-border flex items-center gap-1.5 pointer-events-none">
                                <Flame className="w-3.5 h-3.5 text-primary"/>
                                <span>Epicé & Savoureux</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div key={estPc ? "img-pc" : "img-mobile"} initial={ estPc ? { opacity: 0, x: -20} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-col text-center order-2 md:order-1 space-y-6 pb-12 px-6 sm:px-16 md:px-0 md:pb-0">
                        <div className="space-y-2">
                            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-secondary-foreground leading-tight">
                                Le Plat du Jour
                            </h2>
                            <Separateur className="bg-secondary-foreground w-38"/>
                        </div>

                        <div className="space-y-2">
                            <p className="text-lg md:text-lg font-medium text-secondary-foreground">
                                Poulet au piment de cayenne
                            </p>
                            <p className="text-sm md:text-base text-secondary-foreground/60 leading-relaxed">
                                Poulet relevé au piment de Cayenne, servi avec un riz blanc délicat, rehaussé de ciboulette fraîche et d’une touche de poivre pour un équilibre simple et intense.
                            </p>
                        </div>
                        <Separateur className="bg-secondary-foreground w-full h-0.5"/>

                        <div className="flex items-center justify-between ">
                            <div>
                                <span className="text-xs text-secondary-foreground/60 block">Prix du plat</span>
                                <span className="text-2xl font-entrabold text-secondary-foreground">28,00 €</span>
                            </div>
                            <Badge variant="secondary" className="rounded-xl px-3 py-1 text-xs">
                                Quantité limitée
                            </Badge>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 px-8 md:px-0">
                            <Button size="lg" className="gap-2 h-12 px-24 text-base bg-background text-foreground group/btn relative overflow-hidden transition-all duration-300 hover:bg-background/90 active:scale-95">
                                Voir la carte
                                <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-1"/>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}