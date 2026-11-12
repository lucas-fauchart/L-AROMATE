"use client"

/* Importation */
import { cn } from "@/lib/utils";

interface SeparateurProps {
  className?: string;
}

/* Composant */
export function Separateur({ className }: SeparateurProps) {
  return (
    <div aria-hidden="true" className={cn("w-16 h-1 bg-primary mx-auto rounded-full", className )}/>
  );
}
