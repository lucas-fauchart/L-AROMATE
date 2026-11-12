"use client"
 
//Importation
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollRotation } from "@/components/motion/scrollRotation"
import { FlottementItem } from "@/components/motion/flottementItem"
import { ArrowRight, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

//Composant
export function Introduction() {
    
    //Variable
    const router = useRouter()

    //Handle de redirection 
    const handleRedirectionReservation = () => {
        router.push("/reservation")
    }

    return(
        <section className="relative min-h-[calc(100vh-64px)] w-full flex flex-col md:gap-8 md:flex-row items-center justify-center px-6 md:px-10 py-16 overflow-hidden bg-gradient-to-b from-background to-muted/20">
           
            {/*Côté gauche*/}
            <div className="flex flex-col space-y-8 max-w-xl text-center md:text-left z-10">
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{duration: 0.4, delay: 0.2, ease: "easeOut" }} className="inline-flex items-center mx-auto md:mx-0 w-fit gap-2 px-3 py-1 rounded-full border bg-background/50 text-xs font-medium text-muted-foreground shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-primary"/>
                    <span>Nouvelle création du jour disponible</span>
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }} className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
                    L'AROMATE
                </motion.h1>

                <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }} className="text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
                    Une exploration des aromates essentiels de la cuisine, ou chaque herbe dévoile ses arôme uniques pour enrichir et sublimer l’expérience culinaire.
                </motion.p>

                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }} className="flex gap-4 justify-center md:justify-start pt-2">
                    <Button onClick={handleRedirectionReservation} size="lg" className="gap-2 h-12 px-6 text-base group/btn relative overflow-hidden transition-all duratio-300 horver:shadow-[0_0_20px_rgba(var(--primary), 0.30)] active:scale-95">
                        Réserver une table <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover/btn:translate-x-1"/>
                    </Button>
                </motion.div>
            </div>

            {/*Côté droite*/}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }} className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] flex items-center justify-center mt-16 md:mt-16">
                <ScrollRotation className="w-60 h-60 sm:w-68 sm:h-68 md:w-90 md:h-90 z-10">
                    <img 
                        src="/images/assiettes/assiette_sans_fond_saumon_aux_agrumes.png" 
                        alt="Bandes noires arrondies avec des chiffres." 
                        className="w-full h-wull object-contain drop-shadow-[0_0_35px_rgba(59, 130, 246, 0.3)]"
                    />
                
                </ScrollRotation>
                
                {/*
                <FlottementItem duree={2.6} delai={0.16} yOffset={14} className="hidden md:flex absolute bottom-16 left-12 w-12 h-12 bg-background rounded-xl flex items-center justify-center border shadow-sm z-0 text-lg">
                    <img 
                        src="/images/addition.png" 
                        alt="Signe addition noir de mathématique." 
                        className="w-full h-wull object-contain drop-shadow-md rotate-[15deg] block dark:hidden"
                    />
                    <img 
                        src="/images/addition-blanc.png" 
                        alt="BSigne addition noir de mathématique." 
                        className="w-full h-wull object-contain drop-shadow-md rotate-[15deg] hidden dark:block"
                    />
                </FlottementItem> */}
            </motion.div>
        </section>
    )
}