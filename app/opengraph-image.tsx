import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Mayi Gumafelix — Big Data Analytics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FDF3F8 0%, #EEE1FF 50%, #FFE1EE 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "#FF6FA5",
            }}
          />
          <div style={{ fontSize: 36, fontWeight: 700, color: "#E0417F" }}>
            mayi.exe
          </div>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#3A2340",
            textAlign: "center",
            padding: "0 80px",
            lineHeight: 1.2,
          }}
        >
          Mary Ann Gumafelix
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#8A7691",
            marginTop: 20,
            textAlign: "center",
          }}
        >
          Computer Engineering &middot; Big Data Analytics
        </div>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 40,
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#E0417F",
              background: "#FFE1EE",
              padding: "10px 24px",
              borderRadius: 999,
            }}
          >
            Open to data analyst roles
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
