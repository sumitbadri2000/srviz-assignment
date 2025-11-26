export default function HowItWorks() {
  const steps = [
    { step: 1, title: "Tell us your event", desc: "Pick F1, tennis, football, or more." },
    { step: 2, title: "Get a curated plan", desc: "We craft travel, stay, and tickets." },
    { step: 3, title: "Enjoy the experience", desc: "Relax — we handle the details." },
  ];
  return (
    <section id="how" className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">How It Works</h2>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.step} className="rounded-xl border border-zinc-200 bg-white p-6">
            <div className="text-xs tracking-wide text-zinc-500 uppercase">Step {s.step}</div>
            <div className="mt-2 font-semibold">{s.title}</div>
            <p className="mt-1 text-sm text-zinc-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}