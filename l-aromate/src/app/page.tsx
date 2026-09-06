"use client"

import NavigationPC from "./composants/navigations/NavigationPC";
import NavigationMobile from "./composants/navigations/NavigationMobile";

import Introduction from "./composants/home/Introduction";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full items-center justify-center bg-zinc-50 font-sans dark:bg-[#21233C]">
      
      
      <NavigationPC/>
      <NavigationMobile/> 

      <main className="w-full">
        <Introduction/>
        <div className="h-1000 bg-[#FED17C]"></div>
      </main>
    
      
    </div>
  );
}
