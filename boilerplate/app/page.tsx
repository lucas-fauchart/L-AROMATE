//Importation
import Image from "next/image";
import { Introduction } from "@/components/section/introduction";
import { Prestation } from "@/components/section/prestation";
import { PlatDuJour } from "@/components/section/platDuJour";
import { NotrePhilosophie } from "@/components/section/notrePhilosophie";
import { ReservationFinDePage } from "@/components/section/reservationFinDePage";

export default function Home() {
  return (
    <>
      <Introduction/>
      <PlatDuJour/>
      <NotrePhilosophie/>
      <ReservationFinDePage/>
    </>
  );
}
