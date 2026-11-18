import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";
export const alt = `${profile.name} · ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#090909",
        color: "#f5f5f5",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 24,
          color: "#a3a3a3",
          marginBottom: 40,
        }}
      >
        {profile.availability}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 80,
          letterSpacing: -4,
          lineHeight: 1.1,
        }}
      >
        {profile.name}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 32,
          marginTop: 32,
          color: "#a3a3a3",
        }}
      >
        {profile.role}
      </div>
      <div
        style={{
          display: "flex",
          height: 1,
          background: "#292929",
          marginTop: 64,
        }}
      />
    </div>,
    size,
  );
}
