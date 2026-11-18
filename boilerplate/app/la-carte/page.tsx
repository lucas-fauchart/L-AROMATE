"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Utensils } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separateur } from "@/components/custom/separateur"

type Categories = "entrees" | "plats" | "desserts"

interface Plat {
    id: number
    titre: string
    aromate: string
    description: string
    prix: string
    image?: string
}

const menuData: Record<Categories, Plat[]> = {
    entrees: [
        {
            id: 1,
            titre: "Carpaccio de Saint-Jacques",
            aromate: "Citron caviar et Aneth",
            description: "Noix de Saint-Jacques fraîches tranchées finement, huile d'olive vierge et perles d'agrumes.",
            prix: "16,00 €",
            image: "/images/laCarte/entrees/carpaccioSaintJacques.jpg"
        },
        {
            id: 2,
            titre: "Velouté de Panais Rôti",
            aromate: "Sauge officinale",
            description: "Crème onctueuse de légumes anciens infusée aux feuilles de sauge fraîche et éclats de noisettes.",
            prix: "13,00 €",
            image: "/images/laCarte/entrees/veloutePanaisRoti.jpg"
        },
        {
            id: 3,
            titre: "Œuf Parfait & Crémeux de Champignons",
            aromate: "Ail des ours",
            description: "Œuf cuit à basse température, émulsion légère à l'ail des ours et croûtons dorés au beurre noisette.",
            prix: "14,00 €",
            image: "/images/laCarte/entrees/oeufParfaitCremeuxChampignons.jpg"
        },
        {
            id: 4,
            titre: "Tartare de Daurade Royale",
            aromate: "Verveine citronnelle",
            description: "Dés de daurade coupés au couteau, vinaigrette infusée à la verveine fraîche et jeunes pousses.",
            prix: "15,50 €",
            image: "/images/laCarte/entrees/tartareDauradeRoyale.jpg"
        },
        {
            id: 5,
            titre: "Burrata Crémeuse & Tomates Anciennes",
            aromate: "Basilic pourpre et Origan sauvage",
            description: "Burrata artisanale des Pouilles, déclinaison de tomates de saison, huile verte d'herbes fraîches et fleur de sel.",
            prix: "14,50 €",
            image: "/images/laCarte/entrees/burrataCremeuseTomatesAnciennes.jpg"
        },
        {
            id: 6,
            titre: "Gravlax de Saumon Maison",
            aromate: "Fenouil sauvage et Baies roses",
            description: "Saumon mariné 48 heures aux herbes de garrigue, crème acidulée au citron et blinis tièdes.",
            prix: "16,50 €",
            image: "/images/laCarte/entrees/gravlaxSaumonMaison.jpg"
        },
        {
            id: 7,
            titre: "Pressé de Foie Gras de Canard",
            aromate: "Thym citron",
            description: "Foie gras mi-cuit parfumé au thym citron, chutney de figues fraîches et brioche toastée.",
            prix: "18,00 €",
            image: "/images/laCarte/entrees/presseFoieGrasCanard.jpg"
        },
        {
            id: 8,
            titre: "Carpaccio de Betteraves Rôties",
            aromate: "Menthe poivrée et Chèvre frais",
            description: "Fines tranches de betteraves multicolores, mousse légère de chèvre frais, feuilles de menthe et noix torréfiées.",
            prix: "12,50 €",
            image: "/images/laCarte/entrees/carpaccioBetteravesRoties.jpg"
        },
    ],
    plats: [
        {
            id: 1,
            titre: "Suprême de Poulet Rôti",
            aromate: "Piment de Cayenne",
            description: "Volaille fermière dorée au four, jus corsé légèrement relevé et mousseline de pommes de terre.",
            prix: "24,00 €",
            image: "/images/laCarte/plats/supremePouletRoti.jpg"
        },
        {
            id: 2,
            titre: "Filet de Bar Sauvage",
            aromate: "Estragon du Mexique",
            description: "Cuisson nacrée à la plancha, émulsion légère à l'estragon et légumes croquants de saison.",
            prix: "27,00 €",
            image: "/images/laCarte/plats/filetBarSauvage.jpg"
        },
        {
            id: 3,
            titre: "Risotto Crémeux aux Champignons",
            aromate: "Thym serpolet et Romarin",
            description: "Riz Carnaroli cuit lentement au bouillon boisé, champignons des bois poêlés et copeaux de parmesan.",
            prix: "22,00 €",
            image: "/images/laCarte/plats/risottoCremeuxChampignons.jpg"
        },
        {
            id: 4,
            titre: "Magret de Canard Rôti",
            aromate: "Sauge officinale",
            description: "Magret rosé à la peau croustillante, jus réduit infusé à la sauge et déclinaison de carottes anciennes glacées.",
            prix: "26,00 €",
            image: "/images/laCarte/plats/magretCanardRoti.jpg"
        },
        {
            id: 5,
            titre: "Pavé de Cabillaud Nacré",
            aromate: "Verveine citronnelle",
            description: "Dos de cabillaud cuit à basse température, beurre blanc monté à la verveine et fenouil braisé.",
            prix: "25,00 €",
            image: "/images/laCarte/plats/paveCabillaudNacre.jpg"
        },
        {
            id: 6,
            titre: "Carré d'Agneau en Croûte d'Herbes",
            aromate: "Sarriette des montagnes",
            description: "Agneau tendre en croûte verte parfumée, jus d'ail doux et tian de légumes méditerranéens.",
            prix: "29,00 €",
            image: "/images/laCarte/plats/carreAgneauCrouteHerbes.jpg"
        },
        {
            id: 7,
            titre: "Noix de Saint-Jacques Snackées",
            aromate: "Cerfeuil et Ciboulette",
            description: "Saint-Jacques juste saisies, velouté léger de topinambours et huile verte d'herbes fraîches.",
            prix: "28,00 €",
            image: "/images/laCarte/plats/noixSaintJacquesSnackees.jpg"
        },
        {
            id: 8,
            titre: "Quasi de Veau Fondant",
            aromate: "Origan sauvage",
            description: "Pièce de veau rôtie au beurre noisette, jus parfumé à l'origan et écrasé de pommes de terre à l'huile d'olive.",
            prix: "27,50 €",
            image: "/images/laCarte/plats/quasiVeauFondant.jpg"
        },
        {
            id: 9,
            titre: "Gnocchis Maison Poêlés",
            aromate: "Basilic pourpre",
            description: "Gnocchis de pommes de terre dorés, crème légère de parmesan affiné, tomates confites et feuilles de basilic pourpre.",
            prix: "21,00 €",
            image: "/images/laCarte/plats/gnocchisMaisonPoeles.jpg"
        },
        {
            id: 10,
            titre: "Filet de Daurade Royale",
            aromate: "Fenouil sauvage",
            description: "Daurade grillée côté peau, vierge d'agrumes au fenouil sauvage et jeunes pousses d'épinards.",
            prix: "25,50 €",
            image: "/images/laCarte/plats/filetDauradeRoyale.jpg"
        },
    ],
    desserts: [
        {
            id: 1,
            titre: "Poire Pochée aux Épices Douces",
            aromate: "Badiane et Basilic pourpre",
            description: "Poire fondante infusée à l'anis étoilé, sirop léger et feuilles de basilic pourpre ciselées.",
            prix: "11,00 €",
            image: "/images/laCarte/desserts/poirePocheeEpicesDouce.jpg"
        },
        {
            id: 2,
            titre: "Crémeux Chocolat Noir 70%",
            aromate: "Poivre de Timut",
            description: "Ganache intense relevée d'une pointe d'agrumes poivrés et biscuit sablé maison.",
            prix: "12,00 €",
            image: "/images/laCarte/desserts/cremeuxChocolatNoir.jpg"
        },
        {
            id: 3,
            titre: "Panna Cotta Vanille & Fruits Rouges",
            aromate: "Verveine citronnelle",
            description: "Crème onctueuse infusée aux feuilles de verveine fraîche, coulis acidulé de framboises et éclats de pistache.",
            prix: "10,50 €",
            image: "/images/laCarte/desserts/pannaCottaVanilleFruitsRouges.jpg"
        },
        {
            id: 4,
            titre: "Tartelette Fine aux Pommes Caramélisées",
            aromate: "Romarin sauvage",
            description: "Pâte feuilletée croustillante, pommes fondantes rôties au beurre infusé au romarin et glace vanille.",
            prix: "11,50 €",
            image: "/images/laCarte/desserts/tarteletteFinePommesCaramelisees.jpg"
        },
        {
            id: 5,
            titre: "Pavlova Légère aux Agrumes",
            aromate: "Basilic citron",
            description: "Meringue craquante, chantilly mascarpone aérienne, suprêmes d'orange et feuilles de basilic citron.",
            prix: "12,00 €",
            image: "/images/laCarte/desserts/pavlovaLegereAgrumes.jpg"
        },
        {
            id: 6,
            titre: "Abricots Rôtis au Miel de Garrigue",
            aromate: "Lavande maritime et Thym citron",
            description: "Demi-abricots caramélisés au four, sirop délicat aux fleurs de lavande et amandes effilées grillées.",
            prix: "11,00 €",
            image: "/images/laCarte/desserts/abricotsRotisMielGarrigue.jpg"
        },
        {
            id: 7,
            titre: "Soufflé Glacé au Citron Jaune",
            aromate: "Mélisse officinale",
            description: "Mousse glacée vive et rafraîchissante, infusion de mélisse fraîche et tuile dentelle croustillante.",
            prix: "11,50 €",
            image: "/images/laCarte/desserts/souffleGlaceCitronJaune.jpg"
        },
        {
            id: 8,
            titre: "Fraises Gariguettes & Sablé Breton",
            aromate: "Menthe fraîche et Agastache",
            description: "Fraises de saison marinées aux feuilles d'agastache anisée, crème légère à la vanille et sablé pur beurre.",
            prix: "12,50 €",
            image: "/images/laCarte/desserts/fraisesGariguettesSableBreton.jpg"
        },
    ],

}

export default function LaCarte() {
    const [categorieActive, setCategorieActive] = useState<Categories>("plats")
    const platsAffiches = menuData[categorieActive]

    return(
        <section className="w-full py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4 max-w-5xl space-y-10 flex flex-col">
                <motion.div initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="flex flex-col items-center text-center mx-auto max-w-2xl sm:max-w-xl md:max-w-2xl space-y-6 md:space-y-8">
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{duration: 0.4, delay: 0.2, ease: "easeOut" }} className="inline-flex items-center mx-auto md:mx-0 w-fit gap-2 px-3 py-1 rounded-full border bg-background/50 text-xs font-medium text-muted-foreground shadow-sm">
                        <Utensils className="w-3.5 h-3.5 text-primary"/>
                        <span>Nouvelle carte disponible</span>
                    </motion.div>

                    <div className="space-y-2">
                        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
                            La Carte
                        </h1>
                        <Separateur className="bg-secondary w-7/10 md:w-5/8"/>

                    </div>

                    <div>
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                            Une cuisine de saison entièrement faite maison, où chaque entrée, plat et dessert est imaginé pour révéler la fraicheur et le caractère de nos plantes aromatiques.
                        </p>
                    </div>
                    
                    <div className="w-full max-w-xs pt-8 md:pt-10 px-8 md:px-0">
                        <Select value={categorieActive} onValueChange={(valeur) => setCategorieActive(valeur as Categories)}>
                            <SelectTrigger className="h-11 w-full py-6 px-6 bg-card text-sm rounded-full border border-transparent shadow-none + hover:text-foreground data-[state=open]:bg-background data-[state=open]:border-ring data-[state=open]:ring-[3px] data-[state=open]:ring-ring/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50">
                                <SelectValue placeholder="Choisir une catégories"/>
                            </SelectTrigger>
                            <SelectContent position="popper" side="bottom" sideOffset={-88} avoidCollisions={false} className="rounded-xl bg-card p-2">
                                <SelectItem value="entrees" className="cursor-pointer font-medium">Les Entrées</SelectItem>
                                <SelectItem value="plats" className="cursor-pointer font-medium">Les Plats</SelectItem>
                                <SelectItem value="desserts" className="cursor-pointer font-medium">Les Desserts</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </motion.div>

                
                    <motion.div key={categorieActive} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
                        {platsAffiches.map((unPlat, index) => (
                             <motion.div key={unPlat.id}  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.04, ease: "easeOut" }} className="rounded-2xl border border-border bg-card p-6 shadow-sm space-y-4 hover:border-primary/40 transition-colors">
                                <div className="space-y-1">
                                    <h2 className="text-xl font-bold text-foreground">
                                        {unPlat.titre}
                                    </h2>
                                    <span className="inline-block text-xs font-bold text-primary uppercase tracking-wider">
                                        {unPlat.aromate}
                                    </span>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {unPlat.description}
                                </p>

                                <div className="pt-2 border-t border-border/60">
                                    <span className="text-lg font-extrabold text-foreground">
                                        {unPlat.prix}
                                    </span>
                                </div>

                                {unPlat.image && (
                                    <div className="pt-2">
                                        <div className="relative w-full h-70 sm:h-110 rounded-xl overflow-hidden border border-border">
                                            <img src={unPlat.image} alt={unPlat.titre} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
              
            </div>
        </section>
    )
}