export default function WhyChooseUs() {
  const stats = [
    { label: "Trips Planned", value: "12,000+" },
    { label: "Countries", value: "48+" },
    { label: "Partners", value: "60+" },
  ];
  const bullets = [
    "Choose your event",
    "We arrange travel + tickets",
    "Enjoy a seamless experience",
  ];
  return (
    <section id="why" className="bg-zinc-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold">Why Choose Us</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <div key={i} className="rounded-xl border border-zinc-200 bg-white p-6 text-center">
              <div className="text-2xl font-bold">{s.value}</div>
              <div className="mt-1 text-sm text-zinc-600">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {bullets.map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-green-600" />
              <p className="text-sm text-zinc-700">{b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}