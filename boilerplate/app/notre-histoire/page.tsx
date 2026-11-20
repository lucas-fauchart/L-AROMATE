"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, ChefHat, ConciergeBell, Utensils, Wine } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separateur } from "@/components/custom/separateur"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const equipiersAromate = [
    {
        titre: "En cuisine",
        description: "Nos cuisiniers imaginent et préparent des plats précis et créatifs, où les aromates sont au cœur de chaque association de saveurs. Chaque herbe fraîche, infusion et épice est travaillée avec soin pour sublimer les produits de saison.",
        image: "/images/notreHistoire/cuisinier.jpg",
        alt: "Notre brigade en cuisine préparant les plats avec des aromates frais.",
        icon: ChefHat,
    },
    {
        titre: "En salle",
        description: "Nos serveurs assurent un accueil attentif et discret, accompagnent les clients tout au long du repas et veillent à une expérience agréable et fluide. Toujours à l’écoute, l’équipe prend plaisir à présenter la carte dans un cadre chaleureux.",
        image: "/images/notreHistoire/serveur.jpg",
        alt: "Le service en salle attentif et chaleureux à L'Aromate.",
        icon: ConciergeBell,
    },
    {
        titre: "La sommellerie",
        description: "Notre sommelier complète cette harmonie en sélectionnant des vins qui s’accordent parfaitement aux plats, afin de sublimer les arômes. Puisant notamment dans les vignobles du Roussillon, il propose des accords équilibrés et sur mesure.",
        image: "/images/notreHistoire/sommelier.jpg",
        alt: "Notre sommelier sélectionnant une bouteille pour un accord mets-vins.",
        icon: Wine,
    },
]

export default function LaCartePage() {
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
        <div>
            <section className="w-full py-16 md:px-4 md:py-24 border-t overflow-hidden bg-background">
                <div className="container mx-auto max-w-6xl flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-16 items-center">

                        <motion.div key={estPc ? "img-pc" : "img-mobile"} initial={ estPc ? { opacity: 0, x: -20} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="flex flex-col text-center order-1 md:order-1 space-y-6 md:space-y-8 px-8 sm:px-16 md:px-0">
                            
                            <div className="inline-flex items-center mx-auto md:mx-0 w-fit gap-2 px-3 py-1 rounded-full border bg-background/50 text-xs font-medium text-muted-foreground shadow-sm">
                                <BookOpen className="w-3.5 h-3.5 text-primary"/>
                                <span>Nos origines</span>
                            </div>

                            <div className="w-fit mx-auto md:mx-0 space-y-2">
                                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                                    Notre histoire
                                </h1>
                                <Separateur className="bg-secondary md:mx-0 w-5/8 md:w-4/8"/>
                            </div>

                            <div className="space-y-2 md:text-left">
                                <p className="text-base sm:text-lg text-foreground/60 leading-relaxed">
                                   De la passion des jardins botaniques à l'ouverture de L'Aromate, découvrez le parcours de ce restaurant aussi incroyable que déliceux.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once:true }} transition={{ duration: 0.5 }} className="order-2 md:order-2 px-8 sm:px-16 md:px-0">
                            <div className="relative aspect-[15/10] rounded-4xl w-full overflow-hidden shadow-2xl">
                                <motion.img whileTap={{ scale: 1.05 }} src={"/images/notreHistoire/deventure.jpg"} alt="Poulet au piment de cayenne avec riz, poivre noir et ciboulette." className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"/>
                            </div>
                        </motion.div>
                    </div>

                    <div className="px-8 sm:px-16 md:px-0">
                         <motion.div key={estPc ? "histoire-p1-pc" : "histoire-p1-mobile"} initial={ estPc ? { opacity: 0, x: -20} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-6 pt-14 sm:pt-16 leading-relaxed">
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground">L'origine et la vision</h2>

                        <p className="text-sm md:text-base text-foreground/60 leading-relaxed">Fondé en 2004, L’Aromate est né d’une ambition simple mais exigeante : repenser la gastronomie contemporaine en plaçant les plantes aromatiques au cœur même de la création culinaire. Loin de les cantonner à un simple rôle de décoration ou d’assaisonnement final, la maison a fait le pari audacieux d’en faire le fil conducteur de chaque assiette.</p>
                        <p className="text-sm md:text-base text-foreground/60 leading-relaxed">Depuis plus de vingt ans, cette philosophie guide le travail quotidien en cuisine, où chaque feuille fraîche, chaque fleur comestible et chaque plante sauvage est sélectionnée avec soin pour révéler la justesse et la profondeur des produits travaillés.</p>
                    </motion.div>

                    <motion.div key={estPc ? "histoire-p2-pc" : "histoire-p2-mobile"} initial={ estPc ? { opacity: 0, x: -20} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-6 pt-12 sm:pt-16 leading-relaxed">
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground">La démarche créative et sensorielle</h2>

                        <p className="text-sm md:text-base text-foreground/60 leading-relaxed">Porté par une passion sincère pour les saveurs naturelles et le respect absolu des saisons, le restaurant développe une cuisine d’auteur résolument créative et sensorielle. Chaque recette est pensée comme une composition parfumée où l’équilibre des goûts, des textures et des arômes prime avant tout.</p>
                        <p className="text-sm md:text-base text-foreground/60 leading-relaxed">En mariant des techniques culinaires modernes à la richesse brute du monde végétal — infusions délicates, huiles d’herbes maison, émulsions légères ou cuissons douces — l’équipe cherche à éveiller la curiosité des papilles et à offrir à chaque convive une expérience gustative authentique, surprenante et mémorable.</p>
                    </motion.div>

                    <motion.div key={estPc ? "histoire-p3-pc" : "histoire-p3-mobile"} initial={ estPc ? { opacity: 0, x: -20} : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="space-y-6 pt-12 sm:pt-16 leading-relaxed">
                        <h2 className="text-xl sm:text-2xl font-bold text-foreground">L'ancrage local à Perpignan</h2>

                        <p className="text-sm md:text-base text-foreground/60 leading-relaxed">Implanté à Perpignan, au cœur du département des Pyrénées-Orientales, l’établissement puise directement son inspiration dans la richesse exceptionnelle du terroir catalan, entre mer Méditerranée, plaine fertile et garrigue sauvage. Cette proximité avec les producteurs locaux et les cueilleurs de la région permet de travailler des ingrédients d’une fraîcheur irréprochable tout au long de l’année.</p>
                        <p className="text-sm md:text-base text-foreground/60 leading-relaxed">Au fil des années, L’Aromate s’est ainsi imposé comme une adresse singulière et incontournable, reconnue pour son identité culinaire affirmée où les herbes fraîches, les épices subtiles et les arômes naturels signent le caractère unique de chaque plat.</p>
                    </motion.div>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 md:px-4 md:py-24 border-t overflow-hidden bg-muted/50">
                <div className="container mx-auto max-w-6xl flex flex-col">
                
                    <motion.div initial={ { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }} className="flex flex-col justify-centertext-center space-y-6 md:space-y-8 px-6 sm:px-16">         
                        <div className="w-fit mx-auto  space-y-2">
                            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
                                L'équipe de L'Aromate
                            </h2>
                            <Separateur className="bg-secondary mx-auto w-5/8 md:w-4/8"/>
                        </div>

                        <div className="space-y-2 md:text-left">
                            <p className="text-base text-center sm:text-lg text-foreground/60 leading-relaxed">
                                Portée par l’énergie et la complicité de ses membres en cuisine et en salle, notre équipe veille chaque jour à transformer chaque visite en une parenthèse gourmande et chaleureuse.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 pt-12 md:pt-20 px-6 sm:px-16 md:px-0 gap-6">
                        {equipiersAromate.map((unEquipierAromate, index) => {
                            const Icone = unEquipierAromate.icon
                            {/* Cartes */}
                            return(
                                <motion.div key={unEquipierAromate.titre} initial={{ opacity: 0, y:15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.15, ease: "easeOut" }} className="flex group cursor-pointer">
                                    <Card className=" py-0 mb-0 h-full rounded-3xl border bg-background shadow-sm hover:border-primary/50 transition-colors overflow-hidden flex flex-col select-none group">
                                        <div className="relative w-full aspect-[4/3] overflow-hidden bg-muted">
                                            <motion.img whileTap={{ scale: 1.05 }} src={unEquipierAromate.image} alt={unEquipierAromate.titre} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"/>
                                        </div>
                                    
                                        <CardContent className="p-6 space-y-3 flex-1">
                                            <div className=" flex gap-2 items-center">
                                                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                                    <Icone className="w-5 h-5"/>
                                                </span>
                                                <h2 className="text-xl font-bold text-foreground"> 
                                                    {unEquipierAromate.titre}
                                                </h2>
                                            </div>
                                                                                    
                                            <Separateur className="w-18 h-0.5 mx-0"/>
                                                                                    
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {unEquipierAromate.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </div>    
                </div>
            </section>
        </div>
    )
}