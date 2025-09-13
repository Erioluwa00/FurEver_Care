import { useState, useEffect } from "react";

function VisitorsCount() {
  const baseVisitors = 5000;
  const [realVisitors, setRealVisitors] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem("visited")) {
      localStorage.setItem("visited", "true");
      setRealVisitors((prev) => prev + 1);
    }

    const interval = setInterval(() => {
      setRealVisitors((prev) => prev + Math.floor(Math.random() * 3)); // +0–2
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const totalVisitors = baseVisitors + realVisitors;

  return (
    <p
      style={{
        fontSize: "14px",
        color: "#888",
        textAlign: "center",
        marginTop: "10px",
      }}
    >
      Trusted by {totalVisitors.toLocaleString()} visitors
    </p>
  );
}

export default VisitorsCount;
