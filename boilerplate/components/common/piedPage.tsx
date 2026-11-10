"use client"

//Importation
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

//Configaration du pied de page
const configurationPiedPage = {
    nomEntreprise: "DevWeb",
    description: "Création de sites internet uniques et sur-mesure pour booster votre activité.",

    reseauxSociaux: [
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
    ],

    colonnes: [
        {
            titre: "Navigation",
            categories: [
                { label: "Accueil", href: "/" },
                { label: "Prestation", href: "#features" },
                { label: "À propos", href: "/a-propos" },
                { label: "Contact", href: "/contact" },
            ],
        },
    ],

    textesLegaux: {
        mentionsLegales: "Ce site est édité par la société [Nom]. Capital social de 1000€. Siège social : [Adresse]. Directeur de la publication : [Nom]. Hébergé par [Nom hébergeur], [Adresse hébergeur], [Ville hébergeur], [Code postal hébergeur], [Pays hébergeur].",

        confidentialite: "Nous collectons vos données uniquement via le formulaire de contact pour répondre à vos demandes. Vos données ne sont jamais vendues ni partagées à des tiers. Vous disposez d'un droit d'accès et de suppression sur simple demande par email.",
    },
};

//Composant
export function PiedPage() {
    //Variable
    const [anneeActuelle, setAnneeActuelle] = useState<number | null>(null);
    const pathname = usePathname()
    const estSurPageAdmin = pathname === "/admin"
    const { theme, setTheme } = useTheme()

    //Chargement au lancement du composant
    useEffect(() => {
        setAnneeActuelle(new Date().getFullYear());
    }, []);

    return(
        <footer className="w-full border-t bg-muted/30 pt-10 pb-3">
            <div className="container mx-auto px-4">

                {/* Haut du pied de page */}
                <div className="flex flex-col md:flex-row jutify-between gap-10 pb-4">

                    {/* Bloc de gauche : logo, texte et réseaux sociaux */}
                    <div  className="flex flex-col space-y-4 max-w-sm">
                        {/* Nom entreprise */}
                        <span className="font-extrabold text-xl tracking-tight">
                            {configurationPiedPage.nomEntreprise}
                        </span>
                        {/* Description */}
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {configurationPiedPage.description}
                        </p>

                        {/* Réseaux sociaux */}
                        <div className="flex space-x-4 pt-1">
                            {configurationPiedPage.reseauxSociaux.map((unReseauSocial) =>    
                                unReseauSocial.url ? (
                                    <a
                                        key={unReseauSocial.nom}
                                        href={unReseauSocial.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={unReseauSocial.nom}
                                        title={unReseauSocial.nom}
                                        className="text-muted-foreground transition-all hover:text-primary duration-200 hover:scale-110 active:scale-95 ease-out cursor-pointer"
                                    >
                                        <unReseauSocial.Icone className="h-5 w-5" />
                                    </a>
                                ) : null
                            )}
                        </div>
                    </div>
                    
                    {/* Bloc de droite : colonnes de liens */}
                    <div className="flex flex-wrap gap-10 md:gap-20">
                        {configurationPiedPage.colonnes.map((uneColonne) => (
                            <div key={uneColonne.titre}>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">{uneColonne.titre}</h3>
                                <ul className="space-y-2.5">
                                    {uneColonne.categories.map((uneCategorie) => (
                                        <li key={uneCategorie.label}>
                                            <Link href={uneCategorie.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors relative pb-1 block w-fit duration-200 group/link">
                                                {uneCategorie.label}
                                                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left ease-out"/>
                                            </Link>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bas du pied de page : copyright, mentions légales et confidentialité */}
                <div className="mt-8 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-4 w-full md:w-auto">
                    {/* Copyright */}
                    <div className=" text-xs text-muted-foreground text-center sm:text-left">
                        © {anneeActuelle} {configurationPiedPage.nomEntreprise}. Tous droits réservés.
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-x-3 gap-y-4 md:gap-y-0 w-full md:w-auto">
                        <div className="flex items-center justify-center gap-x-4 md:gap-x-3">
                            {/* Mentions légales */}
                            <Dialog>
                                <DialogTrigger className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                                    Mentions Légales
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[500px]">
                                    <DialogHeader>
                                        <DialogTitle className="text-xl font-bold mb-2">Mentions Légales</DialogTitle>
                                        <DialogDescription className="text-foreground leading-relaxed whitespace-pre-line text-sm">
                                            {configurationPiedPage.textesLegaux.mentionsLegales}
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                            <span className="text-muted-foreground/40 hidden md:inline">·</span>

                            {/* Confidentialité */}
                            <Dialog>
                                <DialogTrigger className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                                    Confidentialité
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[500px]">
                                    <DialogHeader>
                                        <DialogTitle className="text-xl font-bold mb-2">Confidentialité</DialogTitle>
                                        <DialogDescription className="text-foreground leading-relaxed whitespace-pre-line text-sm">
                                            {configurationPiedPage.textesLegaux.confidentialite}
                                        </DialogDescription>
                                    </DialogHeader>
                                </DialogContent>
                            </Dialog>

                            {/* Page d'administration */}
                            {!estSurPageAdmin && (
                                <>
                                    <span className="text-muted-foreground/40 hidden md:inline">·</span>

                                    <Link href="/admin" className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                                        Espace Admin
                                    </Link>
                                </>
                            )}
                        </div>

                         {/* Bouton dark mode */}
                        <div className="flex items-center justify-center">
                           <span className="text-muted-foreground/40 hidden md:inline">·</span>
                            <Button variant="ghost" size="icon" className="w-8 h-8 rounded-xl text-muted-foreground md:ml-1 hover:text-foreground opacity-60 hover:opacity-100 transition-all duration-200 active:scale-95 cursor-pointer hover:bg-muted/50 border border-transparent" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Changer de thème">
                                {theme === "dark" ? ( 
                                    <Sun className="w-4 h-4 text-muted-foreground"/> 
                                ) : ( 
                                    <Moon className="w-4 h-4 text-slate-700"/> 
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}