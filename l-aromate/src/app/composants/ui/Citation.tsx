import { ReactNode } from "react";

export type CitationProps = {
    citation: ReactNode;
    auteur?: ReactNode;
    className?: string;
    classNameCitation?: string;
    classNameAuteur?: string;
};

export default function Citation({ citation, auteur, className = "", classNameCitation = "", classNameAuteur = "" }: CitationProps) {
    return (
        <blockquote className={className}>
            <p className={classNameCitation}>
                « {citation} »
            </p>

            {auteur && (
                <cite className={classNameAuteur}>
                    — {auteur}
                </cite>
            )}
        </blockquote>
    );
}