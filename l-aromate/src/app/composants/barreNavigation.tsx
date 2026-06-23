/*BARRE DE NAVIGATION MOBILE, LOGO/NOM GAUCHE, MENU BURGER DROITE*/
/*BARRE DE NAVIGATION PC, LOGO/NOM CENTRE*/
import Image from "next/image";
import { Menu } from "lucide-react";

type BarreNavigationProps = {
    categoriesGauche: string[];
    categoriesDroite: string[];

    margeHaute: string;
    espacementGlobale: string;
    espacementCategorie: string;

    tailleTexte: string;

    imageLogoNom: string;
    altImageLogoNom: string;
    tailleImageMobile: number;
    tailleImagePC: number;
};

export default function barreNavigation({categoriesGauche, categoriesDroite, tailleTexte}: BarreNavigationProps) {
    return (
        <>
            {/*Mobile*/}
            <nav className={`absolute inset-x-0 top-0 flex justify-between items-center ${tailleTexte} mt-4 px-6 md:hidden`}>
                <Image className="" src="/logo/logo_blanc_aromate.png" alt="Logo infusion de l'Aromate" width={30} height={30}/>
                <Menu/>
            </nav>

            {/*PC*/}
            <nav className={`absolute inset-x-0 top-0 hidden md:flex lg:gap-28 justify-center items-center ${tailleTexte} mt-2`}>
                <ul className="flex gap-24">
                    {categoriesGauche.map((uneCategorie, index) =>(
                        <li key={index}>{uneCategorie}</li>
                    ))}          
                </ul>

                <Image className="" src="/logo/logo_blanc_aromate.png" alt="Logo infusion de l'Aromate" width={40} height={40}/>

                <ul className="flex gap-24">
                    {categoriesDroite.map((uneCategorie, index) =>(
                        <li key={index}>{uneCategorie}</li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

