import Image from "next/image";

export default function Hero({ onCta }) {
  return (
    <section className="relative h-[70vh] md:h-[80vh]" id="hero">
      <Image
        src="https://picsum.photos/id/1018/1600/900"
        alt="Mountain background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Sports Travel Packages for Global Events
            </h1>
            <p className="mt-3 md:mt-4 text-sm md:text-base opacity-90">
              Plan premium experiences to F1, Wimbledon, Olympics and more.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button onClick={onCta} className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium">
                Plan My Trip
              </button>
              <a href="#packages" className="rounded-full border border-white/60 text-white px-6 py-3 text-sm font-medium hover:bg-white/10">
                Explore Packages
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}