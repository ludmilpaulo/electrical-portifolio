'use client';

import { PhoneCall, MessageCircle, Facebook } from 'lucide-react';

const BUSINESS_PHONE = process.env.NEXT_PUBLIC_BUSINESS_PHONE || '0734627545';
const DISPLAY_PHONE = process.env.NEXT_PUBLIC_BUSINESS_DISPLAY_PHONE || '073 462 7545';
const WHATSAPP_URL = process.env.NEXT_PUBLIC_WHATSAPP || `https://wa.me/27${BUSINESS_PHONE.replace(/\D/g, '').replace(/^0/, '')}`;
const FACEBOOK_URL = process.env.NEXT_PUBLIC_FACEBOOK || 'https://www.facebook.com/leoelectricalplumbing.co.za';

export default function PhoneWhatsAppBar() {
  return (
    <div className="bg-slate-900 text-white">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Layout: stack on mobile, row on sm+ */}
        <div className="flex flex-col items-stretch gap-2 py-2 sm:flex-row sm:items-center sm:justify-between">
          {/* Left tagline */}
          <p className="text-xs sm:text-sm text-slate-200 leading-tight">
            Fast, compliant installations. <span className="hidden xs:inline">Emergency call-outs available.</span>
          </p>

          {/* Actions */}
          <nav aria-label="Quick contact" className="flex items-center gap-2 sm:gap-3">
            {/* Call */}
            <a
              href={`tel:${BUSINESS_PHONE}`}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs sm:text-sm font-medium
                         hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              <span className="whitespace-nowrap">Call {DISPLAY_PHONE}</span>
            </a>

            {/* WhatsApp */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-3 py-1.5 text-xs sm:text-sm font-semibold
                         text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span className="whitespace-nowrap">WhatsApp</span>
            </a>

            {/* Facebook */}
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs sm:text-sm font-medium
                         hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40 transition"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
              <span className="whitespace-nowrap">Facebook</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}
