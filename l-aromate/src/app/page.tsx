"use client"

import NavigationPC from "./composants/navigations/NavigationPC";
import NavigationMobile from "./composants/navigations/NavigationMobile";

import ImageElement from "./composants/ui/ImageElement";
import ImageRotationScroll from "./composants/animations/ImageRotationScroll";
import AnimationScroll from "./composants/animations/AnimationScroll";
import Introduction from "./composants/home/Introduction";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-[#21233C]">
      
      <NavigationPC/>
      <NavigationMobile/> 

      <main>
        <Introduction/>
      </main>
    
      <div className="h-1000"></div>
    </div>
  );
}
