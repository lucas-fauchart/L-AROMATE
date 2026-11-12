//Importation
import Image from "next/image";
import { Introduction } from "@/components/section/introduction";
import { Prestation } from "@/components/section/prestation";
import { PlatDuJour } from "@/components/section/platDuJour";

export default function Home() {
  return (
    <>
      <Introduction/>
      <PlatDuJour/>
      <Prestation/>
    </>
  );
}
