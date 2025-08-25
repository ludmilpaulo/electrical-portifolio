
'use client';

import { useGetProjectsQuery } from "@/redux/api";

export default function Projects() {
  const { data } = useGetProjectsQuery();
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Recent Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {(data ?? []).map((p) => (
          <article key={p.id} className="bg-white rounded-2xl p-6 shadow-soft border border-slate-100">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="text-slate-600 mt-2">{p.description}</p>
            <p className="text-sm text-slate-500 mt-2">Location: {p.location}</p>
            <p className="text-sm text-slate-500">Completed: {p.completed_date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
