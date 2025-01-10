"use client";

import { TextEffect } from "@/components/motion-ui/text-effect";
import { Button } from "@/components/ui/button";
import { CircleArrowRight, Compass } from "lucide-react";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter()
  
  function handleSignIn() {
    router.push("/sign-in")
  }
  
  function handleExplore() {
    router.push("/docs")
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <TextEffect
        per="char"
        delay={0.5}
        className="text-8xl font-bold text-primary"
        variants={{
          container: {
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
              },
            },
          },
          item: {
            hidden: {
              opacity: 0,
              rotateX: 90,
              y: 10,
            },
            visible: {
              opacity: 1,
              rotateX: 0,
              y: 0,
              transition: {
                duration: 0.2,
              },
            },
          },
        }}
      >
        Mimir
      </TextEffect>
      <TextEffect
        per="char"
        delay={1.5}
        speedReveal={2}
        className="my-5 w-[90%] text-center text-xs md:w-[40%] md:text-base"
      >
        Elevate your skills with Mimir, the go-to hub for expert-led courses and
        certifications to fuel your growth in tech, design, and beyond.
      </TextEffect>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.5, delay: 3.5 } }}
        className="flex items-center space-x-2"
      >
        <Button
          effect="expandIcon"
          icon={CircleArrowRight}
          iconPlacement="right"
          onClick={handleSignIn}
        >
          Get Started
        </Button>
        <Button
          effect="expandIcon"
          icon={Compass}
          iconPlacement="right"
          variant="outline"
          onClick={handleExplore}
        >
          Explore More
        </Button>
      </motion.div>
    </div>
  );
}
