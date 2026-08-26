/*BARRE SEPARATION*/
"use client";

//Props du composant
export type BarreSeparationProps = {
    className: string;
};

export default function BarreSeparation({ className }: BarreSeparationProps) {

    return (
        <div className={className}/>
    );
}