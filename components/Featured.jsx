import Image from "next/image";

export default function Featured({ onCta }) {
  return (
    <section id="featured" className="container mx-auto px-4 py-12">
      <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-sm">
        <div className="grid md:grid-cols-2">
          <div className="relative h-64 md:h-full">
            <Image
              src="https://picsum.photos/id/1020/1400/800"
              alt="F1 Japan"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-8 bg-white">
            <h3 className="text-xl md:text-2xl font-semibold">F1 Japan</h3>
            <p className="mt-2 text-sm text-zinc-600">Experience the thrill at Suzuka with curated hospitality and travel.</p>
            <div className="mt-4 flex gap-3 items-center">
              <span className="text-xs uppercase tracking-wide text-zinc-500">Starting</span>
              <span className="font-bold">$2,499</span>
            </div>
            <div className="mt-6">
              <button onClick={onCta} className="rounded-full bg-black text-white px-5 py-2 text-sm">Plan My Trip</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}