import { ImageResponse } from "next/og";

export const alt = "ellam.in has moved to naamaa.in";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const OpengraphImage = () =>
  new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#ededed",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Eyebrow: old → new */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 30,
            letterSpacing: 8,
            color: "#e0b53c",
          }}
        >
          <span style={{ color: "#a1a1aa" }}>ELLAM</span>
          <span style={{ width: 56, height: 3, background: "#e0b53c" }} />
          <span>NAAMAA</span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: 96,
            fontWeight: 800,
            lineHeight: 1.05,
            marginTop: 36,
            letterSpacing: "-0.03em",
          }}
        >
          <span>ellam.in has moved to&nbsp;</span>
          <span style={{ color: "#e0b53c" }}>naamaa.in</span>
        </div>

        {/* Subtitle */}
        <div style={{ display: "flex", fontSize: 34, color: "#a1a1aa", marginTop: 36 }}>
          Every temple &amp; service has migrated — old links redirect
          automatically.
        </div>
      </div>
    ),
    { ...size },
  );

export default OpengraphImage;
