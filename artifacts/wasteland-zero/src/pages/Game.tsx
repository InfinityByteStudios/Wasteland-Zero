import { useEffect, useRef } from "react";

export default function Game() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const iframe = document.createElement("iframe");
    iframe.src = import.meta.env.BASE_URL + "game.html";
    iframe.style.cssText = "width:100%;height:100%;border:none;display:block;";
    iframe.title = "Wasteland Zero";
    container.appendChild(iframe);

    return () => {
      container.removeChild(iframe);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#000" }}
    />
  );
}
