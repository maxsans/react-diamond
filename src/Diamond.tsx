import React, { useLayoutEffect, useRef } from "react";
import styles from "./Diamond.module.scss";
import DiamondContainerStart from "./DiamondContainerStart";
import DiamondContainer from "./DiamondContainer";
import DiamondContainerEnd from "./DiamondContainerEnd";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FullPageContainer from "./FullPageContainer";

gsap.registerPlugin(ScrollTrigger);

interface DiamondItem {
  image: string;
  title: string;
  onClick: () => void;
}

interface DiamondProps {
  items: DiamondItem[];
}

const Diamond: React.FC<DiamondProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  const initializeGsap = () => {
    const ctx = gsap.context(() => {
      if (window.innerWidth >= 1070) {
        const horizontalSections = gsap.utils.toArray<HTMLElement>("#panels");
        const percent =
          horizontalSections.length > 4
            ? -100 * (horizontalSections.length - 4) -
              ((100 * 3) / 22.75) * (horizontalSections.length - 5)
            : 0;
        const length =
          horizontalSections.length > 4
            ? (window.innerWidth / 4) * (horizontalSections.length - 4) +
              window.innerHeight
            : window.innerWidth;

        gsap.to(horizontalSections, {
          xPercent: percent,
          ease: "none",
          scrollTrigger: {
            trigger: "#container",
            pin: true,
            scrub: 1,
            end: "+=" + length,
            invalidateOnRefresh: true,
            // markers: true,
          },
        });
      }
    });
    ctxRef.current = ctx;
  };

  useLayoutEffect(() => {
    initializeGsap();

    const handleResize = () => {
      if (ctxRef.current) {
        ctxRef.current.revert();
      }
      initializeGsap();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (ctxRef.current) {
        ctxRef.current.revert();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [items]);

  if (items.length === 1) {
    items[0].onClick();
    return (
      <div className={styles.container} id="container " ref={containerRef}>
        <FullPageContainer
          image={items[0].image}
          title={items[0].title}
          onClick={items[0].onClick}
        />
      </div>
    );
  }

  return (
    <div className={styles.container} id="container" ref={containerRef}>
      <div className={styles.containerItem} id="containerItem" ref={sliderRef}>
        {items.map((item, index) => {
          if (index === 0) {
            return (
              <DiamondContainerStart
                key={index}
                image={item.image}
                title={item.title.toUpperCase()}
                onClick={item.onClick}
              />
            );
          } else if (index === items.length - 1) {
            return (
              <DiamondContainerEnd
                key={index}
                image={item.image}
                title={item.title.toUpperCase()}
                onClick={item.onClick}
              />
            );
          } else {
            return (
              <DiamondContainer
                key={index}
                image={item.image}
                title={item.title.toUpperCase()}
                onClick={item.onClick}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Diamond;
