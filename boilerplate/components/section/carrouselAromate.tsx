"use client"

//Importation
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Flame, Sparkles, Utensils } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separateur } from "../custom/separateur"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card"

const familleSaveurAromate = [
    {
        nom: "Famille Herbacée",
        note: "Fraîche et Végétale",
        description: "Persil, cerfeuil, ciboulette, basilic, menthe, thym : des notes vertes et delicates qui apportent de la fraîcheur à nous entrées et jus.",
        image: "/images/vrac/herbaceesVrac.jpg"
    },
    {
        nom: "Famille Florale",
        note: "Délicate et Aromatique",
        description: "Lavande, sureau, capucine, bourrache, violette : des parfumssubtils qui signent nos création sucrées et infusions.",
        image: "/images/vrac/floralesVrac.jpg"
    },
    {
        nom: "Famille Agrumes",
        note: "Vive et Acidulée",
        description: "Citron jaune/vert, bergamote, orange, pamplemouse : des zeste et jus frais qui rêveillent nos entrées marines et nos désserts.",
        image: "/images/vrac/agrumesVrac.jpg"
    },
    {
        nom: "Famille Boissée",
        note: "Chaud et Rustique",
        description: "Cannelle, sarriette, genièvre, marjolaine, romarin, laurier : des arômes profonds de garrigue et de sous-bois parfaits pour nos viandes rôties et sauces mijotées.",
        image: "/images/vrac/boiseesVrac.jpg"
    },
    {
        nom: "Famille Epicée",
        note: "Intense et Relevée",
        description: "Piment de Cayenne, sariette, baie de Timur, piment d'espelette : une chaleur maîtrisée et parfumée qui donne du caractère à nos plats signatures.",
        image: "/images/vrac/epiceesVrac.jpg"
    },
]

//Composant
export function CarrouselAromate() {

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
        <section className="w-full py-12 md:py:24 bg-muted/50 border-t border-border ">
            <div className="container mx-auto px-4 max-w-6xl space-y-8">
                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="space-y-2 flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                        Notre sélection
                    </h2>
                    <Separateur className="bg-secondary w-4/10 md:w-2/14"/>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, ease: "easeOut" }}>
                    <Carousel opts={{ align: "start", loop: true }} className="w-full">
                        <CarouselContent className="-ml-4">
                            {familleSaveurAromate.map((uneFamilleSaveurAromate, index) => (
                                <CarouselItem key={index} className="pl-4 basis-[100%] sm:basis-1/2 lg:basis-1/3">
                                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="h-full p-1">
                                        <Card className="h-full rounded-3xl border bg-background shadow-sm hover:border-primary/50 transition-colors overflow/hidden p-0 flex flex-col select-none group">
                                            <div className="relative w-full h-48 overflow-hidden bg-muted">
                                                <motion.img whileTap={{ scale: 1.05 }} src={uneFamilleSaveurAromate.image} alt={uneFamilleSaveurAromate.nom} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"/>
                                            </div>

                                            <CardContent className="p-6 space-y-3 flex-1">
                                                <div className="space-y-1">
                                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                                        {uneFamilleSaveurAromate.note}
                                                    </span>
                                                    <h2 className="text-xl font-bold text-foreground"> 
                                                        {uneFamilleSaveurAromate.nom}
                                                    </h2>
                                                </div>
                                                
                                                <Separateur className="w-8 h-0.5 mx-0"/>
                                                
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {uneFamilleSaveurAromate.description}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="hidden md:flex items-center justify-between gap-6 pt-4 mx-4">
                            <CarouselPrevious className="static translate-y-0 active:scale-95"/>
                            <Separateur className="w-full h-0.5 border-dashed bg-muted"/>
                            <CarouselNext className="static translate-y-0 active:scale-95"/>
                        </div>
                    </Carousel>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="space-y-2 md:text-left">
                    <p className="text-center text-base sm:text-lg text-foreground/60 leading-relaxed md:px-12">
                        Une exploration des aromates essentiels de la cuisine, ou chaque herbe dévoile ses arôme uniques pour enrichir et sublimer l’expérience culinaire.
                    </p>
                </motion.div>

            </div>
        </section>
    )
}