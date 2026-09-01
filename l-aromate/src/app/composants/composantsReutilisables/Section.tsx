/*SECTION*/

//Props du composant
export type SectionProps = {
    children: React.ReactNode;
    className?: string;
};

export default function Section({ children, className = ""}: SectionProps) {
    return (
        <section className={className}>
            {children}
        </section>
    );
}