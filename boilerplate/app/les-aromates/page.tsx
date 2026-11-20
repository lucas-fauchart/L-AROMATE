"use client"

//Importation
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Flame, Leaf, Sparkles, Utensils } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separateur } from "@/components/custom/separateur"
import { Button } from "@/components/ui/button"
import { CarrouselAromate } from "@/components/section/carrouselAromate"

//Composant
export default function LesAromatesPage() {

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
        <div className="w-full min-h-full bg-muted/10">
            <section className="w-full py-16 md:px-4 md:py-24 border-t overflow-hidden bg-background">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 lg:gap-16 items-center">

                        <motion.div key={estPc ? "img-pc" : "img-mobile"} initial={ estPc ? { opacity: 0, x: -20} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-col text-center order-1 md:order-1 space-y-6 md:space-y-8 px-6 sm:px-16 md:px-0">
                            
                            <div className="inline-flex items-center mx-auto md:mx-0 w-fit gap-2 px-3 py-1 rounded-full border bg-background/50 text-xs font-medium text-muted-foreground shadow-sm">
                                <Leaf className="w-4 h-4 text-primary"/>
                                <span>Notre jardin</span>
                            </div>

                            <div className="w-fit mx-auto md:mx-0 space-y-2">
                                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                                    Nos Aromates
                                </h1>
                                <Separateur className="bg-secondary md:mx-0 w-5/8 md:w-4/8"/>
                            </div>

                            <div className="space-y-2 md:text-left">
                                <p className="text-base sm:text-lg text-foreground/60 leading-relaxed">
                                    Chaque aromate possède sa propre identité. En les associant avec précision, nous créons des accords subtils qui donnent à chaque assiette son caractère unique.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ duration: 0.5 }} className="order-2 md:order-2 px-8 md:px-0">
                            <div className="relative rounded-4xl w-full overflow-hidden shadow-2xl">
                                <motion.img whileTap={{ scale: 1.05 }} src={"/images/lesAromates/cuillereAromates.png"} alt="Poulet au piment de cayenne avec riz, poivre noir et ciboulette." className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"/>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <CarrouselAromate/>
        </div>
    )
}