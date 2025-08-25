
'use client';

import LeadForm from "@/components/LeadForm";
import { PhoneCall, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const phone = process.env.NEXT_PUBLIC_BUSINESS_DISPLAY_PHONE;
  const tel = process.env.NEXT_PUBLIC_BUSINESS_PHONE;
  const wa = process.env.NEXT_PUBLIC_WHATSAPP!;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Get a Free Quote</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <LeadForm />
        <div className="bg-white p-6 rounded-2xl shadow-soft">
          <h2 className="text-2xl font-semibold mb-4">Prefer to talk?</h2>
          <a className="inline-flex items-center gap-2 text-brand-700 hover:underline" href={`tel:${tel}`}>
            <PhoneCall className="w-5 h-5" /> Call {phone}
          </a>
          <a className="block mt-3 inline-flex items-center gap-2 text-green-700 hover:underline" href={wa} target="_blank">
            <MessageCircle className="w-5 h-5" /> WhatsApp us
          </a>
          <p className="mt-6 text-slate-600">
            We typically respond within minutes during business hours. Emergency? Call anytime.
          </p>
        </div>
      </div>
    </div>
  );
}
