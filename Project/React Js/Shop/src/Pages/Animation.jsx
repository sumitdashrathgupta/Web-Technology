import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const AutoType = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["EveryThing", "EveryItems", "EveryWhere"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy(); // Cleanup on unmount
    };
  }, []);

  return (
    <span ref={typedRef} className="auto-type text-blue-500 font-bold"></span>
  );
};

export default AutoType;

