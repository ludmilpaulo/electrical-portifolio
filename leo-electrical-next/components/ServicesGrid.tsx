
'use client';

import { useGetServicesQuery } from "@/redux/api";
import { Wrench, ShieldCheck, Plug, SunMedium, Zap, FlameKindling } from "lucide-react";

const icons: Record<string, any> = {
  "Electrical Installations": Plug,
  "Solar Installations": SunMedium,
  "Compliance (COC)": ShieldCheck,
  "Fault Finding": Zap,
  "Plumbing": Wrench,
  "Geyser/Heatpump": FlameKindling
};

export default function ServicesGrid({ detailed = false }: { detailed?: boolean }) {
  const { data } = useGetServicesQuery();

  return (
    <section className="container mx-auto px-4 py-12">
      {!detailed && <h2 className="text-3xl font-bold mb-8">Our Services</h2>}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {(data ?? []).map((s) => {
          const Icon = icons[s.name] ?? Plug;
          return (
            <div key={s.id} className="bg-white p-6 rounded-2xl shadow-soft border border-slate-100">
              <div className="flex items-center gap-3">
                <Icon className="w-6 h-6 text-brand-700" />
                <h3 className="text-xl font-semibold">{s.name}</h3>
              </div>
              <p className="text-slate-600 mt-3">{s.description}</p>
              {detailed && s.benefits?.length ? (
                <ul className="mt-3 list-disc list-inside text-slate-600">
                  {s.benefits.map((b: string, idx: number) => <li key={idx}>{b}</li>)}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
