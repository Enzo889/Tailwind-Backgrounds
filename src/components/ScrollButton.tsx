import { useState, useEffect } from "react";
import { SquareChevronUp } from "lucide-react";

const ScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      href="#header"
      className={`fixed max-md:right-2 right-10 bottom-6 ${
        showButton ? "block" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <SquareChevronUp className="text-emerald-400/80 bg-black hover:scale-110 hover:text-emerald-600 transition-colors duration-300" />
    </a>
  );
};

export default ScrollButton;
