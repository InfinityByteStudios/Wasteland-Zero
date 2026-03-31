import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const base = import.meta.env.BASE_URL || "/";
    const gamePath = base.endsWith("/") ? base + "game.html" : base + "/game.html";
    window.location.replace(gamePath);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: "#666", fontFamily: "monospace" }}>Loading WASTELAND ZERO...</p>
    </div>
  );
}
