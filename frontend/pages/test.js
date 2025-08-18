import { useEffect, useState } from "react";

export default function TestPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((json) => setData(json.message));
  }, []);

  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "50px" }}>
      <h1>AI Gateway Test Page ✅</h1>
      <p>API Response:</p>
      <pre style={{ fontSize: "18px", color: "green" }}>
        {data || "Loading..."}
      </pre>
    </div>
  );
}
