import Link from "next/link";

export default function Home() {
  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "50px" }}>
      <h1>🚀 Welcome to AI Gateway</h1>
      <p>Your portal to the world’s best AI prompts and updates.</p>

      <Link href="/test">
        <button style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#0070f3",
          color: "white",
          cursor: "pointer"
        }}>
          🔍 Run API Test
        </button>
      </Link>
    </div>
  );
}
