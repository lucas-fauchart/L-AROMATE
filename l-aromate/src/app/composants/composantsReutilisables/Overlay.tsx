/*OVERLAY*/
"use client";

//Props du composant
export type OverlayProps = {
    className: string;
    onClick: () => void;
};

export default function Overlay({ className, onClick }: OverlayProps) {
    return (
        <div className={`fixed inset-0 z-40 ${className}`} onClick={onClick} />
    );
}