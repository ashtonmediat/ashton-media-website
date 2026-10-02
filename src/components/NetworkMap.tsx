import { TZ_PATH, TZ_VIEWBOX, project } from "./tanzania-path";
import { cities } from "@/content/site";

/**
 * Tanzania with the cities where the network has screens.
 * Natural Earth outline; markers only where inventory is confirmed.
 */
export function NetworkMap({ dark = true, className = "" }: { dark?: boolean; className?: string }) {
  const land = dark ? "#1f1f1f" : "#f2f2f2";
  const edge = dark ? "#ffffff" : "#000000";
  const text = dark ? "#ffffff" : "#000000";
  return (
    <svg viewBox={TZ_VIEWBOX} role="img" aria-labelledby="map-title map-desc" className={className}>
      <title id="map-title">Where Ashton Media’s screens are in Tanzania</title>
      <desc id="map-desc">
        Map of Tanzania marking {cities.map((c) => c.name).join(", ")}.
      </desc>
      <path d={TZ_PATH} fill={land} stroke={edge} strokeWidth={2} strokeLinejoin="round" />
      {cities.map((c) => {
        const [x, y] = project(c.lng, c.lat);
        const labelLeft = c.slug === "dar-es-salaam" || c.slug === "zanzibar";
        const dx = labelLeft ? -14 : 14;
        const anchor = labelLeft ? "end" : "start";
        const dy = c.slug === "zanzibar" ? -12 : c.slug === "dar-es-salaam" ? 20 : 5;
        return (
          <g key={c.slug}>
            <circle cx={x} cy={y} r={11} fill="#e3001b" opacity={0.25} />
            <circle cx={x} cy={y} r={5.5} fill="#e3001b" stroke={edge} strokeWidth={1.5} />
            <text
              x={x + dx}
              y={y + dy}
              textAnchor={anchor}
              fill={text}
              fontSize={17}
              fontWeight={700}
              style={{ fontFamily: "inherit", fontVariationSettings: '"wdth" 100' }}
            >
              {c.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
