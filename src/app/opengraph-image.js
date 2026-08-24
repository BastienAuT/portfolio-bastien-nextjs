import { ImageResponse } from "next/og";

export const alt =
  "Portfolio de Bastien Autem, développeur full-stack orienté produit";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#111411",
          color: "#edf0e8",
          display: "flex",
          height: "100%",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "2px solid rgba(237, 240, 232, 0.18)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "54px",
            position: "relative",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "#246bfe",
              height: "12px",
              left: "54px",
              position: "absolute",
              top: "-7px",
              width: "150px",
            }}
          />
          <div
            style={{
              color: "#4f86ff",
              display: "flex",
              fontSize: "24px",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Bastien Autem · Portfolio
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: "68px",
                fontWeight: 800,
                letterSpacing: "-0.05em",
                lineHeight: 0.98,
                maxWidth: "940px",
              }}
            >
              Développeur full-stack orienté produit
            </div>
            <div
              style={{
                color: "#a9aea5",
                display: "flex",
                fontSize: "25px",
                marginTop: "32px",
              }}
            >
              React · Next.js · TypeScript · Node.js
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
