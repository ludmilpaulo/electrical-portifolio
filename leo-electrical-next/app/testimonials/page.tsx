"use client";

import { useState } from "react";
import {
  useListTestimonialsQuery,
  useCreateTestimonialMutation,
} from "@/redux/services/testimonials";

type FormState = { author: string; quote: string; rating: number };

export default function TestimonialsPage() {
  const { data: items = [], isFetching } = useListTestimonialsQuery();
  const [createTestimonial, { isLoading: isSubmitting }] = useCreateTestimonialMutation();

  const [form, setForm] = useState<FormState>({
    author: "",
    quote: "",
    rating: 5,
  });
  const [msg, setMsg] = useState<{ ok?: string; err?: string }>({});

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg({});
    if (form.author.trim().length < 2) {
      setMsg({ err: "Please enter your name." });
      return;
    }
    if (form.quote.trim().length < 10) {
      setMsg({ err: "Please share a few more details about your experience." });
      return;
    }
    if (form.rating < 1 || form.rating > 5) {
      setMsg({ err: "Rating must be between 1 and 5." });
      return;
    }

    try {
      await createTestimonial(form).unwrap();
      setMsg({ ok: "Thanks! Your testimonial was received." });
      setForm({ author: "", quote: "", rating: 5 });
    } catch (err) {
      setMsg({ err: "Something went wrong. Please try again." });
    }
  }

  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid lg:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h1 className="text-2xl font-bold">Share your experience</h1>
          <p className="text-slate-600 mt-1">
            Your feedback helps others choose LEO Electrical & Plumbing with confidence.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input
                value={form.author}
                onChange={(e) => setForm((s) => ({ ...s, author: e.target.value }))}
                className="w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="e.g. Sarah M."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    type="button"
                    key={n}
                    aria-label={`${n} star${n > 1 ? "s" : ""}`}
                    onClick={() => setForm((s) => ({ ...s, rating: n }))}
                    className={`h-9 w-9 rounded-full border grid place-content-center
                      ${form.rating >= n ? "bg-yellow-400/90" : "bg-white"}
                      hover:scale-105 transition`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Your Testimonial</label>
              <textarea
                value={form.quote}
                onChange={(e) => setForm((s) => ({ ...s, quote: e.target.value }))}
                className="w-full min-h-[120px] rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                placeholder="Tell us what stood out…"
                required
              />
            </div>

            {msg.err && <p className="text-red-600 text-sm">{msg.err}</p>}
            {msg.ok && <p className="text-emerald-600 text-sm">{msg.ok}</p>}

            <div className="flex gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 rounded-2xl bg-sky-600 px-5 py-2.5 text-white font-semibold hover:bg-sky-700 focus:ring-2 focus:ring-sky-300 disabled:opacity-60"
              >
                {isSubmitting ? "Submitting…" : "Submit Testimonial"}
              </button>
              <button
                type="button"
                onClick={() => setForm({ author: "", quote: "", rating: 5 })}
                className="rounded-2xl border px-5 py-2.5 hover:bg-slate-50"
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        {/* List */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Testimonials</h2>
          {isFetching ? (
            <p className="text-slate-600">Loading…</p>
          ) : items.length === 0 ? (
            <p className="text-slate-600">No testimonials yet. Be the first!</p>
          ) : (
            <ul className="space-y-4">
              {items.map((t) => (
                <li key={t.id} className="bg-white rounded-2xl shadow p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{t.author}</h3>
                    <div className="text-yellow-500" aria-label={`${t.rating} stars`}>
                      {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                    </div>
                  </div>
                  <p className="mt-2 text-slate-700">{t.quote}</p>
                  <p className="mt-2 text-xs text-slate-500">
                    {new Date(t.created).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
