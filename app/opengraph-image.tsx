import { ImageResponse } from "next/og";
import { SITE } from "@/lib/config";

export const alt = `${SITE.nom} — ${SITE.promesse}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Image d'aperçu générée par le serveur : légère, aucune image à stocker.
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
          background: "#0F3D2E",
          color: "#F6F2EA",
          padding: 72,
        }}
      >
        <div style={{ fontSize: 44, fontWeight: 700, color: "#D9A441" }}>
          {SITE.nom}
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
          {SITE.promesse}
        </div>
        <div style={{ fontSize: 34, color: "#DDD6C6" }}>
          Récolte d&apos;avis automatique pour l&apos;immobilier
        </div>
      </div>
    ),
    size,
  );
}
