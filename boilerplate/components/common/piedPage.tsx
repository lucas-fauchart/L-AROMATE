"use client"

//Importation
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import { Button } from "../ui/button";
import { Mail, MapPin, Moon, Phone, Sun } from "lucide-react";

//Configaration du pied de page
const configurationPiedPage = {
    nomEntreprise: "L'AROMATE",
    description: "Une cuisine d’auteur moderne où chaque création est pensée et articulée autour d’aromates, d’herbes fraîches et de plantes sauvages.",

    contact: {
        adresse: "89 Bd Maillol, 66750 Saint-Cyprien",
        lienMaps: "https://share.google/Yzlv3taZj9PnEsSs6",
        telephone: "03.20.45.67.48",
        lienTelephone: "+33320456748",
        email: "l.aromate.saint.cyprien@gmail.com",
    },

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
                { label: "La Carte", href:"/la-carte" },
                { label: "Notre Histoire", href:"/notre-histoire" },
                { label: "Les Aromates", href: "/les-aromates" },
                { label: "Réservation", href:"/reservation" },
                { label: "Nous contacter", href:"/nous-contacter" },
            ],
        },
    ],

    horaires: [
        { jours: "Lundi - Jeudi", heures: "11h30 - 15h00 · 18h00 - 23h00", ferme: false},
        { jours: "Vendredi - Samedi", heures: "11h30 - 15h30 · 18h00 - 01h00", ferme: false},
        { jours: "Dimanche", heures: " Fermé", ferme: true },
    ],

    textesLegaux: {
        mentionsLegales: "Ce site est édité par la société L'Aromate. Capital social de 360 000€. Siège social : 89 Bd Maillol, 66750 Saint-Cyprien. Directeur de la publication : Sylvie Lagrand. Hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina (Californie), CA 91723, Etats-Unis (USA).",

        confidentialite: "Nous collectons vos données uniquement via le formulaire de réservation. Vos données ne sont jamais vendues ni partagées à des tiers. Vous disposez d'un droit d'accès et de suppression sur simple demande par email.",
    },
};

//Composant
export function PiedPage() {
    //Variable
    const [anneeActuelle, setAnneeActuelle] = useState<number | null>(null);
    const pathname = usePathname()
    const estSurPageAdmin = pathname === "/admin"
    const { theme, setTheme } = useTheme()
    const [estMonte, setEstMonte] = useState(false);

    //Chargement au lancement du composant
    useEffect(() => {
        setEstMonte(true);
    }, []);

    useEffect(() => {
        setAnneeActuelle(new Date().getFullYear());
    }, []);

    return(
        <footer className="w-full border-t bg-background pt-10 pb-3">
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
                                        className="text-muted-foreground transition-all hover:text-foreground duration-200 hover:scale-110 active:scale-95 ease-out cursor-pointer"
                                    >
                                        <unReseauSocial.Icone className="h-5 w-5" />
                                    </a>
                                ) : null
                            )}
                        </div>
                    </div>
                    
                    {/* Bloc de droite : colonnes de liens */}
                    <div className="flex flex-wrap gap-10 md:gap-20">
                        {/* Catégories du menu */}
                        {configurationPiedPage.colonnes.map((uneColonne) => (
                            <div key={uneColonne.titre}>
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-4">{uneColonne.titre}</h3>
                                <ul className="space-y-2">
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

                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Horaires</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                {configurationPiedPage.horaires.map((unHoraire) => (
                                    <li key={unHoraire.jours}>
                                        {unHoraire.ferme ? (
                                            <>
                                                <span className="font-medium text-foreground">{unHoraire.jours}</span>
                                                <span>{unHoraire.heures}</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="font-medium text-foreground block">{unHoraire.jours}</span>
                                                <span>{unHoraire.heures}</span>
                                            </>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Contact</h3>
                            <ul className="space-y-3 text-sm text-mded-foreground">
                                <li>
                                    <Link href={configurationPiedPage.contact.lienMaps} target="_blank" rel="noreferrer" className="flex items-start gap-2.5 hover:text-foreground transition-colors relative pb-1 block w-fit duration-200 group/link">
                                        <span className="text-muted-foreground hover:text-foreground">{configurationPiedPage.contact.adresse}</span>
                                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left ease-out"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`tel:${configurationPiedPage.contact.lienTelephone}`} className="flex items-start gap-2.5 hover:text-foreground transition-colors relative pb-1 block w-fit duration-200 group/link">
                                        <span className="text-muted-foreground hover:text-foreground">{configurationPiedPage.contact.telephone}</span>
                                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left ease-out"/>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`mailto:${configurationPiedPage.contact.email}`} className="flex items-start gap-2.5 hover:text-foreground transition-colors relative pb-1 block w-fit duration-200 group/link">
                                        <span className="text-muted-foreground hover:text-foreground">{configurationPiedPage.contact.email}</span>
                                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left ease-out"/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
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
                                <DialogTrigger className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                                    Mentions Légales
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[500px] [&>button]:bg-muted-foreground/10 [&>button]:hover:bg-muted-foreground [&>button]:active:scale-95">
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
                                <DialogTrigger className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                                    Confidentialité
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[500px] [&>button]:bg-muted-foreground/10 [&>button]:hover:bg-muted-foreground [&>button]:active:scale-95">
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

                                    <Link href="/admin" className="text-xs text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
                                        Espace Admin
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}