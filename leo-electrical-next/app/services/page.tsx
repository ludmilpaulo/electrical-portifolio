
'use client';
import ServicesGrid from "@/components/ServicesGrid";

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Electrical & Plumbing Services</h1>
      <p className="text-lg text-slate-600 mb-8">
        From new builds and renovations to emergency call-outs, our certified technicians deliver safe, compliant, and long-lasting work.
      </p>
      <ServicesGrid detailed />
    </div>
  );
}
