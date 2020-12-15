import React, {
  forwardRef,
  useState,
  createRef,
  useRef,
  useEffect,
} from "react";
import Header from "../molecules/header";
import Navbar from "../molecules/navbar";
import Footer from "../molecules/footer";
// import ChooseLanguage from "../molecules/choose-language";
import ScrollReveal from "../special/ScrollReveal";

export default function Layout({ visibleNow, children, isVisibleBanner }) {
  const scrollReveal = useRef(null);

  useEffect(() => {
    document.body.classList.add("is-revealed");
    document.body.classList.add("is-loaded");

    scrollReveal.current.init();
  }, []);

  return (
    <>
      <ScrollReveal
        ref={scrollReveal}
        children={() => (
          <>
            <Header />
            <div className="cursor">
              <Navbar
                visibleNow={visibleNow}
                isVisibleBanner={isVisibleBanner}
              />

              {children}

              <Footer />
            </div>
          </>
        )}
      />
    </>
  );
}
