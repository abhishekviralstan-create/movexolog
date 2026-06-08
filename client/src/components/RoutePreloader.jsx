import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Preloader from "./Preloader";

export default function RoutePreloader() {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return show ? <Preloader /> : null;
}