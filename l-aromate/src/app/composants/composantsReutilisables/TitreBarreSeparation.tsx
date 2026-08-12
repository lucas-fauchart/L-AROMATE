/*TITRE ET BARRE DE SEPARATION*/
"use client"

//Style du titre et de la barre de séparation
export type StyleTitreBarreSeparation = {
    //Valeur : text-[#FFFFFF]
    couleurTexteTitre: string;
    //Valeur : text-md xs: text-lg
    tailleTexteTitre : string; 
    //Valeur : bg-[#FED17C]
    couleurBarreSeparation: string;
    //Valeur : w-[60px] xs: w-[90px] 
    largeurBarre: string;
};

//Props pour le titre et la barre de séparation
export type TitreBarreSeparationProps = {
    //Valeur : Menu
    titre: string;
    styleTitreBarreSeparation: StyleTitreBarreSeparation;
};

export default function TitreBarreSeparation({ titre, styleTitreBarreSeparation }: TitreBarreSeparationProps) {
    return (
        <div className="flex flex-col items-center">
            <h2 className={`text-center pb-1 sm:pb-2 ${styleTitreBarreSeparation.couleurTexteTitre} ${styleTitreBarreSeparation.tailleTexteTitre}`}>
                {titre}
            </h2>

            <div className={`${styleTitreBarreSeparation.largeurBarre} h-[4px] rounded-full ${styleTitreBarreSeparation.couleurBarreSeparation}`}/>
        </div>
    );
}