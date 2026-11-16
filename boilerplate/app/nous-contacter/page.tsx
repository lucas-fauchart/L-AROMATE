"use client"

import { Coordonnee } from "@/components/section/coordonnee"
//Importation
import { motion } from "framer-motion"

//Composant
export default function NousContacterPage() {
    return(
        <div className="w-full min-h-full bg-muted/10">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <Coordonnee/>
            </motion.div>
        </div>
    )
}