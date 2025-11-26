import Image from "next/image";

const items = [
  { title: "Hospitality", img: "https://picsum.photos/id/1060/1200/800" },
  { title: "Race Day", img: "https://picsum.photos/id/1062/1200/800" },
  { title: "Entertainment", img: "https://picsum.photos/id/1059/1200/800" },
  { title: "City Tour", img: "https://picsum.photos/id/1056/1200/800" },
];

export default function Itinerary() {
  return (
    <section className="bg-zinc-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold">Sample Itinerary</h2>
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