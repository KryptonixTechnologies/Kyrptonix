"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type HeroBackgroundVideoProps = {
  className?: string;
};

function playVideo(video: HTMLVideoElement) {
  video.play().catch(() => {
    // Browsers may delay autoplay until the first interaction.
  });
}

export function HeroBackgroundVideo({ className }: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    video.muted = true;
    video.loop = true;
    playVideo(video);
  }, []);

  return (
    <video
      ref={videoRef}
      className={cn("pointer-events-none absolute inset-0 h-full w-full object-cover", className)}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      onEnded={(event) => {
        event.currentTarget.currentTime = 0;
        playVideo(event.currentTarget);
      }}
    >
      <source src="/13522186-uhd_3840_2160_25fps.mp4" type="video/mp4" />
    </video>
  );
}
