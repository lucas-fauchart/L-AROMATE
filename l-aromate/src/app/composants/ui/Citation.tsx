"use client";

import { ReactNode } from "react";
import AnimationScroll from "../animations/AnimationScroll";

export type CitationProps = {
    citation: ReactNode;
    auteur?: ReactNode;
    className?: string;
    classNameCitation?: string;
    classNameAuteur?: string;

    animationCitation?: {
        animation: string;
        delay?: number;
    };

    animationAuteur?: {
        animation: string;
        delay?: number;
    };
};

export default function Citation({
    citation,
    auteur,
    className = "",
    classNameCitation = "",
    classNameAuteur = "",
    animationCitation,
    animationAuteur,
}: CitationProps) {
    return (
        <blockquote className={className}>
            <AnimationScroll
                animation={animationCitation?.animation ?? ""}
                delay={animationCitation?.delay}
            >
                <p className={classNameCitation}>
                    « {citation} »
                </p>
            </AnimationScroll>

            {auteur && (
                <AnimationScroll
                    animation={animationAuteur?.animation ?? ""}
                    delay={animationAuteur?.delay}
                >
                    <cite className={classNameAuteur}>
                        — {auteur}
                    </cite>
                </AnimationScroll>
            )}
        </blockquote>
    );
}