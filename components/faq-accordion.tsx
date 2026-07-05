"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * World-class FAQ accordion. One question open at a time, smooth height reveal
 * (grid-template-rows 0fr→1fr — no max-height hacks), and an on-brand gradient
 * glow border + chevron fill on hover/open.
 */
export default function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq-acc">
      {items.map((faq, i) => {
        const isOpen = open === i;
        return (
          <div key={faq.q} className={`faq-item${isOpen ? " faq-open" : ""}`}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="faq-q-text">{faq.q}</span>
              <span className="faq-chevron" aria-hidden>
                <ChevronDown size={19} strokeWidth={2.5} />
              </span>
            </button>
            <div className="faq-a-wrap">
              <div className="faq-a-inner">
                <p className="faq-a">{faq.a}</p>
              </div>
            </div>
          </div>
        );
      })}

      <style>{`
        .faq-acc { max-width: 780px; margin: 0 auto; display: flex; flex-direction: column; gap: 14px; }
        .faq-item {
          position: relative;
          border-radius: 18px;
          border: 1px solid rgba(148, 163, 184, 0.14);
          background: linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.012));
          transition: transform .4s cubic-bezier(0.2,0.8,0.2,1), box-shadow .4s ease, border-color .4s ease;
        }
        /* gradient glow border, revealed on hover / open */
        .faq-item::before {
          content: "";
          position: absolute; inset: 0; border-radius: 18px; padding: 1px;
          background: linear-gradient(135deg, #8b5cf6, #3b82f6 55%, #22d3ee);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity .4s ease; pointer-events: none;
        }
        /* soft ambient glow behind the card */
        .faq-item::after {
          content: ""; position: absolute; inset: -1px; border-radius: 18px;
          box-shadow: 0 24px 60px -30px rgba(139,92,246,0.75);
          opacity: 0; transition: opacity .4s ease; pointer-events: none; z-index: -1;
        }
        .faq-item:hover { transform: translateY(-3px); border-color: transparent; }
        .faq-item:hover::before, .faq-open::before { opacity: 1; }
        .faq-item:hover::after, .faq-open::after { opacity: 1; }
        .faq-open { border-color: transparent; }

        .faq-q {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          gap: 18px; padding: 20px 22px; cursor: pointer; text-align: left;
          background: none; border: none; font-family: inherit;
        }
        .faq-q-text {
          font-weight: 700; font-size: 1.06rem; letter-spacing: -0.01em; color: #f1f5f9;
          transition: color .3s ease;
        }
        .faq-item:hover .faq-q-text, .faq-open .faq-q-text {
          background: linear-gradient(120deg, #c4b5fd, #93c5fd 60%, #67e8f9);
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
        }
        .faq-chevron {
          flex-shrink: 0; display: grid; place-items: center; width: 32px; height: 32px;
          border-radius: 50%; color: #a78bfa;
          background: rgba(139, 92, 246, 0.12); border: 1px solid rgba(139, 92, 246, 0.28);
          transition: transform .45s cubic-bezier(0.2,0.9,0.2,1), background .35s ease, color .35s ease, border-color .35s ease;
        }
        .faq-open .faq-chevron {
          transform: rotate(180deg);
          background: linear-gradient(135deg, #8b5cf6, #3b82f6); color: #fff; border-color: transparent;
          box-shadow: 0 6px 16px -6px rgba(139,92,246,0.9);
        }

        /* smooth height reveal */
        .faq-a-wrap { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .42s cubic-bezier(0.2,0.8,0.2,1); }
        .faq-open .faq-a-wrap { grid-template-rows: 1fr; }
        .faq-a-inner { overflow: hidden; }
        .faq-a {
          margin: 0; padding: 0 22px 22px; color: #94a3b8; line-height: 1.75; font-size: 0.98rem;
          opacity: 0; transform: translateY(-4px); transition: opacity .4s ease .06s, transform .4s ease .06s;
        }
        .faq-open .faq-a { opacity: 1; transform: none; }
      `}</style>
    </div>
  );
}
