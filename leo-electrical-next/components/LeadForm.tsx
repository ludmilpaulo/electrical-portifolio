
'use client';

import { useForm } from "react-hook-form";
import { useCreateLeadMutation } from "@/redux/api";
import { useState } from "react";

type LeadPayload = {
  name: string;
  email: string;
  phone: string;
  address?: string;
  service_type?: string;
  preferred_date?: string;
  message?: string;
};

export default function LeadForm() {
  const { register, handleSubmit, reset } = useForm<LeadPayload>();
  const [createLead, { isLoading, isSuccess, error }] = useCreateLeadMutation();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: LeadPayload) => {
    try {
      await createLead(data).unwrap();
      setSubmitted(true);
      reset();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-2xl shadow-soft border border-slate-100">
      <h2 className="text-2xl font-semibold mb-4">Tell us about your job</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <input className="input" placeholder="Name *" {...register("name", { required: true })} />
        <input type="email" className="input" placeholder="Email *" {...register("email", { required: true })} />
        <input className="input" placeholder="Phone *" {...register("phone", { required: true })} />
        <input className="input" placeholder="Address" {...register("address")} />
        <input className="input" placeholder="Service Type (e.g., COC, Solar, Wiring)" {...register("service_type")} />
        <input type="date" className="input" placeholder="Preferred Date" {...register("preferred_date")} />
      </div>
      <textarea className="input mt-4" rows={4} placeholder="Message" {...register("message")} />
      <button disabled={isLoading} className="mt-4 bg-brand-600 hover:bg-brand-700 text-white px-5 py-3 rounded-xl font-semibold">
        {isLoading ? "Submitting..." : "Request Quote"}
      </button>
      {isSuccess && submitted && <p className="text-green-700 mt-3">Thanks! We'll contact you shortly.</p>}
      {error && <p className="text-red-600 mt-3">Something went wrong. Please try again.</p>}
      <style jsx>{`
        .input {
          @apply w-full rounded-xl border border-slate-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-600 bg-white;
        }
      `}</style>
    </form>
  );
}
