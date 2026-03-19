import { motion } from "framer-motion";

const packages = [
  {
    name: "VIP",
    price: "3$ / tháng",
    perks: ["Prefix VIP", "Kit VIP hằng ngày", "Hàng chờ ưu tiên"],
    accent: "from-emerald-500/40 to-emerald-500/5",
  },
  {
    name: "MVP",
    price: "7$ / tháng",
    perks: ["Tất cả từ VIP", "Plot /hat /nick", "Particle cosmetic"],
    accent: "from-cyan-400/40 to-cyan-500/5",
  },
  {
    name: "LEGEND",
    price: "15$ / tháng",
    perks: ["Tất cả từ MVP", "Cosmetic độc quyền", "Hỗ trợ ưu tiên"],
    accent: "from-amber-400/40 to-rose-500/10",
  },
];

export default function Store() {
  return (
    <section id="store" className="bg-mcBg">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="pixel-title text-sm text-[#ADD8E6]">
          STORE • DONATE
        </h2>
        <p className="mt-1 text-xs text-slate-300 md:text-sm">
          Ủng hộ server và nhận rank đẹp, không phải pay‑to‑win.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {packages.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="panel relative overflow-hidden p-4"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.accent} opacity-60`}
              />
              <div className="relative space-y-2 text-xs">
                <h3 className="pixel-title text-[11px] text-[#ADD8E6]">
                  {p.name}
                </h3>
                <div className="text-sm font-semibold text-slate-100">
                  {p.price}
                </div>
                <ul className="mt-2 space-y-1 text-[11px] text-slate-200">
                  {p.perks.map((perk) => (
                    <li key={perk}>• {perk}</li>
                  ))}
                </ul>
                <button className="mt-3 w-full rounded-md border border-emerald-400/70 bg-slate-900/80 py-2 text-[11px] font-semibold text-[#ADD8E6] shadow-glowSoft transition hover:bg-emerald-500/20">
                  Mua (demo UI)
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
