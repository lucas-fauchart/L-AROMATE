"use client"

import NavigationPC from "./composants/navigations/NavigationPC";
import NavigationMobile from "./composants/navigations/NavigationMobile";

import Introduction from "./composants/home/Introduction";
import SignaturesAromatiques from "./composants/home/SignaturesAromatiques"
import CreationJour from "./composants/home/CreationJour";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full items-center justify-center bg-zinc-50 font-sans dark:bg-[#21233C]">
      
      
      <NavigationPC/>
      <NavigationMobile/> 

      <main className="w-full">
        <Introduction/>
        
        <div className="bg-[#FED17C]">
          <SignaturesAromatiques/>
        </div>

        <CreationJour/>

        <div className="h-[500px]"></div>
      </main>
    
      
    </div>
  );
}
