import React, { useState, useEffect, useRef, useCallback } from "react";

import { useScroll } from "./hooks/useScroll";
import Presenter from "./Presenter";
import Intro from "./components/intro";

function App() {
  const { scrollY } = useScroll();

  const [showModal, setShowModal] = useState<boolean>(false);

  const secContRef = useRef<HTMLDivElement>(null);
  const currentSecRef = useRef<number>(0);
  const currentSecScrollRef = useRef<number>(0);

  const animationRefs = useRef<
    Array<{
      start: number;
      end: number;
      scrollHeight: number;
    }>
  >([]);

  const scrollCalculator = useCallback(() => {
    if (secContRef.current?.childNodes) {
      const firstSec = secContRef.current
        .childNodes[0] as HTMLTableSectionElement;

      const firstSecEnd = secContRef?.current.offsetTop + firstSec.offsetHeight;

      animationRefs.current = [
        {
          start: secContRef?.current.offsetTop,
          end: firstSecEnd,
          scrollHeight: firstSec.offsetHeight,
        },
      ];

      animationRefs.current.forEach((timing, index) => {
        if (
          secContRef.current &&
          timing.start < scrollY &&
          timing.end >= scrollY
        ) {
          currentSecRef.current = index;
          currentSecScrollRef.current =
            (scrollY - timing.start) / timing.scrollHeight;
        }
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollCalculator);
    scrollCalculator();

    return () => window.removeEventListener("scroll", scrollCalculator);
  });

  return <Presenter />;
}

export default App;
