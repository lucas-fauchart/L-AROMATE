"use client"
 
//Importation
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollRotation } from "@/components/motion/scrollRotation"
import { FlottementItem } from "@/components/motion/flottementItem"
import { ArrowRight, Mail, MapPin, Phone, Sparkles, Pointer, MousePointerClick } from "lucide-react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separateur } from "../custom/separateur"

const infoCoordonnees = [
    {
        titre: "Notre Adresse",
        valeur: "89 Bd Maillol, 66750 Saint-Cyprien",
        sousTexte: "À deux pas du front de mer, avec stationnement facile à proximité. Cliquez pour ouvrir l'itinéraire.",
        href: "https://share.google/Yzlv3taZj9PnEsSs6",
        externe: true,
        icon: MapPin,
    },
    {
        titre: "Téléphone",
        valeur: "03.20.45.67.48",
        sousTexte: "Joignable du lundi au samedi aux heures de service pour vos réservations de dernière minute ou renseignements.",
        href: "tel:+33320456748",
        externe: false,
        icon: Phone,
    },
    {
        titre: "E-mail",
        valeur: "l.aromate.saint.cyprien@gmail.com",
        sousTexte: "Pour toute demande particulière, allergie alimentaire ou privatisation de table. Réponse garantie sous 24h.",
        href: "mailto:l.aromate.saint.cyprien@gmail.com",
        externe: false,
        icon: Mail,
    },
]

//Composant
export function Coordonnee() {
    
    //Variable
    const router = useRouter()

    //Handle de redirection 
    const handleRedirectionReservation = () => {
        router.push("/reservation")
    }

    return(
        <section className="py-16 md:py-20 px-6 sm:px-8 md:px-0 bg-background">
            <div className="container mx-auto max-w-5xl flex flex-col">
                <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="text-center max-w-2xl mx-auto space-y-6 pb-16">
                    <div className="space-y-2">
                        {/* Titre */}
                        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                            Nous contacter
                        </h2>
                    
                        <Separateur className="bg-secondary w-5/10 md:w-4/14"/>
                    </div>

                    {/* Description */}
                    <div>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                            Une question sur notre carte, une allergie ou une demande particulière ? Notre équipe vous répond avec plaisir.
                        </p>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-8">
                    {infoCoordonnees.map((uneInfoCoordonnees, index) => {
                        const Icone = uneInfoCoordonnees.icon
                        {/* Cartes */}
                        return(
                            <motion.a key={uneInfoCoordonnees.titre} href={uneInfoCoordonnees.href} target={uneInfoCoordonnees.externe ? "_blank" : undefined} rel={uneInfoCoordonnees.externe ? "noreforrer" : undefined} initial={{ opacity: 0, y:15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.15, ease: "easeOut" }} className="flex group cursor-pointer">
                                 <Card className="relative w-full flex flex-col justifu-between border bg-card text-card-foreground shadow-none hover:shadow-sm transition-all duration-300 hover:border-primary/40 rounded-2xl overflow-hidden">
                                    <CardHeader className="pt-2 px-6">
                                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground duration-300">
                                            <Icone className="w-5 h-5"/>
                                        </div>
                                        <CardTitle className="text-lg font-bold tracking-tight text-foreground">
                                            {uneInfoCoordonnees.titre}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="pb-6 px-6 space-y-5">
                                        <p className="text-sm font-semibold text-foreground break-all group-hover:text-primary transition-colors">
                                            {uneInfoCoordonnees.valeur}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {uneInfoCoordonnees.sousTexte}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.a>
                        )
                    })}
                </div>
                     
                <p className="text-center gap-1.5 text-xs text-muted-foreground/80">
                    <span>Cliquez sur une carte pour ouvrir l'itinéraire, appeler ou envoyer un e-mail.</span>
                </p>     
            </div>
        </section>
    )
}