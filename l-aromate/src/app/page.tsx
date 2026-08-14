"use client"

import NavigationPC from "./composants/composantNavigation/NavigationPC";
import NavigationMobile from "./composants/composantNavigation/NavigationMobile"

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-[#21233C]">
      
      <NavigationPC/>
      <NavigationMobile/>

      <div className="h-1000"></div>
    </div>
  );
}
