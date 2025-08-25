
export default function PhoneWhatsAppBar() {
  return (
    <div className="bg-slate-900 text-white text-sm">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <span>Fast, compliant installations. Emergency call-outs available.</span>
        <div className="flex gap-4">
          <a href={`tel:${process.env.NEXT_PUBLIC_BUSINESS_PHONE}`} className="hover:underline">
            Call {process.env.NEXT_PUBLIC_BUSINESS_DISPLAY_PHONE}
          </a>
          <a href={process.env.NEXT_PUBLIC_WHATSAPP!} target="_blank" className="hover:underline">
            WhatsApp us
          </a>
        </div>
      </div>
    </div>
  );
}
