import React from "react";
import { profile } from "../data";

/** The panel under the hero chart: dates, availability, and who he has shipped for. */
export default function Glance() {
  return (
    <div className="card rounded-xl p-5 sm:p-6">
      <p className="eyebrow m-0">At a glance</p>

      <dl className="m-0 mt-4 flex flex-col gap-3">
        {profile.glance.map(({ k, v }) => (
          <div key={k} className="flex items-baseline gap-4 justify-between">
            <dt className="mono text-[11.5px] shrink-0" style={{ color: "var(--faint)" }}>
              {k}
            </dt>
            <dd className="m-0 text-[13.5px] font-medium text-right leading-snug">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="rule mt-5 pt-5">
        <p className="eyebrow m-0 mb-3.5">Shipped at</p>
        <div className="flex items-center gap-3.5">
          {profile.shippedAt.map((c) => (
            <span
              key={c.name}
              title={c.name}
              className="logo-tile w-[62px] h-[62px] rounded-2xl overflow-hidden"
            >
              <img src={c.logo} alt={`${c.name} logo`} loading="lazy" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
