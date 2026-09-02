/*BOUTON*/
"use client";

import { ReactNode } from "react";

export type BoutonProps = {
    children: ReactNode;
    onClick?: () => void;
    className?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
};

export default function Bouton({ children, onClick, className = "", type = "button", disabled = false }: BoutonProps) {
    return (
        <button type={type} onClick={onClick} disabled={disabled} className={className}>
            {children}
        </button>
    );
}