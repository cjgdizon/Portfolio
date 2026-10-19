import { ImageResponse } from "next/og";

import { profile } from "@/lib/data";

export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64,
          background: "#e8ece8",
        }}
      >
        {/* A highway guide sign on concrete, with the yellow centre line underneath. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: 64,
            borderRadius: 24,
            background: "#0b6a3b",
            border: "6px solid #f4f7f4",
            color: "#f4f7f4",
          }}
        >
          <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: -2, lineHeight: 1, textTransform: "uppercase" }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, marginTop: 32, textTransform: "uppercase" }}>
            {profile.role}
          </div>
          <div style={{ fontSize: 30, marginTop: 12, maxWidth: 800 }}>{profile.tagline}</div>
        </div>
        <div style={{ display: "flex", marginTop: 40, height: 10, background: "#f6c90e" }} />
      </div>
    ),
    size,
  );
}
