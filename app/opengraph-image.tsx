import { ImageResponse } from "next/og";

export const alt = "Mingyang Li - Backend & AI Platform Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07090d",
          color: "#f8fafc",
          padding: "72px",
          fontFamily: "Inter, Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 20%, rgba(34,211,238,0.22), transparent 34%), radial-gradient(circle at 86% 68%, rgba(16,185,129,0.18), transparent 30%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(148,163,184,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.12) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.5,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column", gap: "24px", position: "relative" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#a5f3fc",
              fontSize: 24,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: 999,
                background: "#67e8f9",
              }}
            />
            Enterprise RAG / Backend Systems
          </div>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 0.95 }}>
            Mingyang Li
          </div>
          <div style={{ maxWidth: 920, fontSize: 38, lineHeight: 1.22, color: "#cbd5e1" }}>
            Backend & AI Platform Engineer focused on retrieval infrastructure, reactive services, and production-ready AI workflows.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            position: "relative",
            color: "#e2e8f0",
            fontSize: 24,
          }}
        >
          <span>Spring Boot</span>
          <span style={{ color: "#64748b" }}>{"//"}</span>
          <span>Project Reactor</span>
          <span style={{ color: "#64748b" }}>{"//"}</span>
          <span>PgVector</span>
          <span style={{ color: "#64748b" }}>{"//"}</span>
          <span>Hybrid Retrieval</span>
        </div>
      </div>
    ),
    size
  );
}
