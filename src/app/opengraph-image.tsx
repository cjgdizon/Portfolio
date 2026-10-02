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
          padding: 96,
          background: "#ffffff",
          color: "#171717",
        }}
      >
        <div style={{ fontSize: 28, color: "#737373" }}>{profile.role}</div>
        <div style={{ fontSize: 96, fontWeight: 600, letterSpacing: -3, marginTop: 16 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 32, color: "#737373", marginTop: 24, maxWidth: 800 }}>
          {profile.tagline}
        </div>
      </div>
    ),
    size,
  );
}
