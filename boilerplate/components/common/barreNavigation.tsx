"use client"

//Importation
import Link from "next/link"
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { ArrowRight, Menu, ShieldAlert } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Separateur } from "@/components/custom/separateur";
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

//Liste des catégories
const categoriesGauche = [
    { label: "Accueil", href: "/" },
    { label: "La Carte", href:"/la-carte" },
    { label: "Notre Histoire", href:"/notre-histoire" },
]

const categoriesDroite = [
    { label: "Les Aromates", href: "/les-aromates" },
    { label: "Réservation", href:"/reservation" },
    { label: "Nous contacter", href:"/nous-contacter" },
]

const categories = [
    { label: "Accueil", href: "/" },
    { label: "La Carte", href:"/la-carte" },
    { label: "Notre Histoire", href:"/notre-histoire" },
    { label: "Les Aromates", href: "/les-aromates" },
    { label: "Réservation", href:"/reservation" },
    { label: "Nous contacter", href:"/nous-contacter" },
]

const reseauxSociaux = [ 
    {
        nom: "Instagram",
        url: "https://www.instagram.com/",
        Icone: FaInstagram,
    },
    {
        nom: "LinkedIn",
        url: "https://www.linkedin.com/",
        Icone: FaLinkedin,
    },
    {
        nom: "Facebook",
        url: "https://www.facebook.com/",
        Icone: FaFacebook,
    },
    {
        nom: "YouTube",
        url: "https://www.youtube.com/",
        Icone: FaYoutube,
    },
    {
        nom: "TikTok",
        url: "https://www.tiktok.com/",
        Icone: FaTiktok,
    },
]

//Composant
export function BarreNavigation(){
    //Variable
    const [alerteOuverte, setAlerteOuverte] = useState(false)
    const pathname = usePathname()
    const estSurPageAccueil = pathname === "/"
    const router = useRouter()

    useEffect(() => {
        const minuteur = setTimeout(() => {
            setAlerteOuverte(true)
        }, 1500)

        return () => clearTimeout(minuteur)
    }, [])

    const handleRedirectionDevis = () => {
        router.push("/contact")
    }

    return(
        <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="sticky top-0 z-50 w-full border-b bg-background">

            {/*Boite de dialog
            <AlertDialog open={alerteOuverte} onOpenChange={setAlerteOuverte}>
                <AnimatePresence>
                    {alerteOuverte && estSurPageAccueil && (
                        <AlertDialogContent asChild className="rounded-2xl max-w-md border bg-card p-6 shadow-xl">
                            <motion.div initial={{ opacity: 0, scale: 0.90 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity : 0, scale: 0.90 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                                <AlertDialogHeader className="space-y-3"> 
                                    <AlertDialogTitle className="text-lg font-bold tracking-tight flex items-center gap-2">
                                        <ShieldAlert className="w-5 h-5 text-primary shrink-0"/> Espace Admin
                                    </AlertDialogTitle>
                                    <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                                        <p> 
                                            Si vous souhaitez accéder à l'interface d'administration simulée, descendez tout en bas dans <span className="text-foreground font-semibold">le pied de page</span> et cliquez sur le lien <span className="text-foreground font-semibold">Espace Admin</span>, à côté des mentions légales en bas à gauche.
                                        </p>
                                    </div>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogAction className="rounded-xl py-4 px-4 h-9 text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer w-full sm:w-auto active:scale-95">
                                        Compris, voir le site
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </motion.div>
                        </AlertDialogContent>
                    )}
                </AnimatePresence>
            </AlertDialog>
            */}

            <div className="container mx-auto flex h-16 items-center justify-between md:justify-center px-4 md:gap-14 lg:gap-28">

                {/* Navigation PC */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="md:gap-2 lg:gap-6">
                        {categoriesGauche.map((uneCategorieGauche, index) => (
                            <motion.div key={uneCategorieGauche.label} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut"}}> 
                                <NavigationMenuItem> 
                                    <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} relative bg-transparent hover:bg-tranparent text-muted-foreground hover:text-foreground transition-colors cursor-pointer py-2 group/link`}>
                                        <Link href={uneCategorieGauche.href}>
                                            {uneCategorieGauche.label}
                                            <span className="absolute bottom-1 left-2 right-2 h-[2px] bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-center ease-out"/>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </motion.div>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Logo */}
                <Link href="/" className="flex items-center shrink-0">
                    <Image src="/images/logo/logo_blanc_aromate.png" alt="Logo du restaurent L'Aromate." width={224} height={405} priority className="h-12 w-auto object-contain"/>
                </Link>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="md:gap-2 lg:gap-6">
                        {categoriesDroite.map((uneCategorieDroite, index) => (
                            <motion.div key={uneCategorieDroite.label} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut"}}> 
                                <NavigationMenuItem> 
                                    <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} relative bg-transparent hover:bg-tranparent text-muted-foreground hover:text-foreground transition-colors cursor-pointer py-2 group/link`}>
                                        <Link href={uneCategorieDroite.href}>
                                            {uneCategorieDroite.label}
                                            <span className="absolute bottom-1 left-2 right-2 h-[2px] bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-center ease-out"/>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </motion.div>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Navigation mobile */}
                <div className="flex md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            {/* Ouverture menu */}
                            <Button variant="ghost" size="icon" aria-label="Ouvrir le menu">
                                <Menu className="size-5"/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] [&>button]:bg-muted-foreground/10">

                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay:0.1, ease: "easeOut"}}> 
                                <SheetTitle className="text-center font-extrabold text-xl pt-4 pb-2">Menu</SheetTitle>
                                <Separateur className="w-18" />
                            </motion.div>

                            {/* Catégories */}
                            <nav className="flex flex-col space-y-3 pt-4">
                                {categories.map((uneCategorie, index ) => (
                                    <motion.div key={uneCategorie.label} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 260, damping: 22, delay: index * 0.10 }}>
                                        <SheetClose asChild>
                                            <Link href={uneCategorie.href} className="text-lg font-medium transition-colors py-1 pl-4 relative block w-fit group/mobile-link">
                                                {uneCategorie.label}
                                                <span className="absolute bottom-1 left-4 right-0 h-[2px] bg-primary scale-x-0 group-hover/mobile-link:scale-x-100 transition-transform duration-300 origin-left ease-out"/>
                                            </Link>
                                        </SheetClose>
                                    </motion.div>
                                ))}
                            </nav>
                            
                            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1, ease: "easeOut"}}>
                                <SheetTitle className="text-center font-extrabold text-xl pt-8 pb-2">Réseaux sociaux</SheetTitle>
                                <Separateur className="w-40"/>
                            </motion.div>

                            {/* Réseaux sociaux */}
                            <div className="flex flex-wrap justify-center pt-4 gap-6">
                                {reseauxSociaux.map((unReseauSocial, index) =>    
                                    unReseauSocial.url ? (
                                        <motion.div key={unReseauSocial.nom} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 260, damping: 22, delay: index * 0.10 }}>
                                            <SheetClose asChild>
                                                <a
                                                    key={unReseauSocial.nom}
                                                    href={unReseauSocial.url}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    aria-label={unReseauSocial.nom}
                                                    title={unReseauSocial.nom}
                                                    className="text-foreground transition-all hover:text-primary duration-200 hover:scale-110 active:scale-95 ease-out cursor-pointer"
                                                >
                                                    <unReseauSocial.Icone className="h-5 w-5" />
                                                </a>
                                            </SheetClose>
                                        </motion.div>
                                    ) : null
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    )
}