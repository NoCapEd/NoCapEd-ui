
"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/Spotlight";
import { Boxes } from "@/components/ui/background-boxes";

const Hero = () =>{

    return (
      
        <section id="home" className='pb-20 pt-36'>
        

    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        NoCapEd - f(s,q)=K+  
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
      NoCapEd's educational philosophy and formula f(s,q)=K+ represent <br/>
      the learning process (f) through <br/>
      Stories (s) that engage and inform, complemented by<br/> 
      Questions (q) that challenge and clarify, <br/>
      to promote continuous knowledge growth (K+).       
      </p>
    </div>
        </section>



    )
}

export default Hero


