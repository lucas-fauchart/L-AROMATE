import { cn } from "@/lib/utils";

interface SeparateurSectionProps {
  className?: string;
}

export function SeparateurSection({ className }: SeparateurSectionProps) {
  return (
    <div aria-hidden="true" className={cn("w-16 h-1 bg-primary mx-auto rounded-full", className )}/>
  );
}
