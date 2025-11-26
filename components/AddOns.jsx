import Image from "next/image";

const items = [
  { title: "VIP Lounge", img: "https://picsum.photos/id/1069/1200/800" },
  { title: "Track Walk", img: "https://picsum.photos/id/1072/1200/800" },
  { title: "Merch Bundle", img: "https://picsum.photos/id/1080/1200/800" },
  { title: "Airport Transfer", img: "https://picsum.photos/id/1047/1200/800" },
];

export default function AddOns() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold">Add-ons & VIP Experiences</h2>
        <div className="mt-6 overflow-x-auto">
          <div className="flex gap-4 min-w-max">
            {items.map((i, idx) => (
              <div key={idx} className="w-64 shrink-0 rounded-xl overflow-hidden border border-zinc-200 bg-white">
                <div className="relative h-36">
                  <Image src={i.img} alt={i.title} fill className="object-cover" />
                </div>
                <div className="p-3 font-medium">{i.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}