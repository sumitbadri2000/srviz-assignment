import Image from "next/image";

const items = [
  {
    title: "Wimbledon",
    price: 1899,
    img: "https://picsum.photos/id/1041/1200/800",
  },
  {
    title: "Moto GP",
    price: 1299,
    img: "https://picsum.photos/id/1011/1200/800",
  },
  {
    title: "Athens 2024",
    price: 999,
    img: "https://picsum.photos/id/1035/1200/800",
  },
  {
    title: "Alpine 2024",
    price: 1199,
    img: "https://picsum.photos/id/1015/1200/800",
  },
];

export default function Packages({ onCta }) {
  return (
    <section className="py-12" aria-labelledby="packages-title">
      <div className="flex items-end justify-between">
        <h2 id="packages-title" className="text-2xl font-semibold">Top Packages</h2>
        <a href="#" className="text-sm text-zinc-600 hover:text-black">View all</a>
      </div>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, idx) => (
          <article key={idx} className="rounded-xl overflow-hidden border border-zinc-200 shadow-sm bg-white hover:shadow-md transition-shadow">
            <div className="relative h-40">
              <Image src={item.img} alt={item.title} fill className="object-cover"/>
            </div>
            <div className="p-4">
              <h3 className="font-medium">{item.title}</h3>
              <p className="mt-1 text-sm text-zinc-600">Starting at <span className="font-semibold">${item.price}</span></p>
              <button onClick={onCta} className="mt-3 w-full rounded-full bg-black text-white px-4 py-2 text-sm">Plan</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}