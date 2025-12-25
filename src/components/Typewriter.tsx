"use client";

import { useEffect, useRef, useState } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
};

export default function Typewriter({ text, speed = 20 }: TypewriterProps) {
  const [displayed, setDisplayed] = useState("");
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayed}</span>;
}
