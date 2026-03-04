"use client";

export default function StepContact({ formData, setFormData }: any) {
  const update = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className="max-w-3xl">

      <h1 className="text-4xl font-display font-semibold mb-4 text-gray-900">
        Contact Details
      </h1>

      <p className="text-gray-600 text-lg mb-12">
        Our team will reach out to verify your property.
      </p>

      <div className="space-y-8">

        <input
          type="text"
          placeholder="Full Name"
          value={formData.full_name || ""}
          onChange={(e) => update("full_name", e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-black outline-none"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone || ""}
          onChange={(e) => update("phone", e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-black outline-none"
        />

        <input
          type="tel"
          placeholder="WhatsApp Number"
          value={formData.whatsapp || ""}
          onChange={(e) => update("whatsapp", e.target.value)}
          className="w-full bg-white border border-gray-300 rounded-xl px-5 py-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-black outline-none"
        />

      </div>
    </div>
  );
}