import { useState, useEffect } from "react";
import Image from "next/image";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState("");

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!/^\+?[0-9\s-]{7,15}$/.test(form.phone))
      e.phone = "Valid phone required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  async function submit(e) {
    e.preventDefault();
    if (!validate()) return;
    setToast("Submitted! We’ll reach out soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  }

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2500);
    return () => clearTimeout(t);
  }, [toast]);

  const collage = [
    "https://picsum.photos/id/1069/400/400",
    "https://picsum.photos/id/1072/400/400",
    "https://picsum.photos/id/1080/400/400",
    "https://picsum.photos/id/1047/400/400",
    "https://picsum.photos/id/1018/400/400",
    "https://picsum.photos/id/1020/400/400",
    "https://picsum.photos/id/1011/400/400",
    "https://picsum.photos/id/1035/400/400",
    "https://picsum.photos/id/1015/400/400",
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-semibold">ADD-ONS & VIP EXPERIENCES</h2>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {collage.map((src, i) => (
              <div
                key={i}
                className="relative h-24 sm:h-28 md:h-32 rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`addon-${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-zinc-600">
            Bundle hospitality, paddock walks, city tours, transfers, and
            premium lounges to elevate your trip.
          </p>
          <div className="mt-6 text-sm">
            <div className="font-medium">FAQ</div>
            <ul className="mt-2 flex gap-4 text-zinc-600">
              <li>Flexible options</li>
              <li>Clear FAQs</li>
              <li>Dedicated support</li>
            </ul>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
          <div className="text-lg font-semibold">Contact</div>
          <div className="mt-4 grid gap-3">
            <div>
              <label className="text-sm">Name</label>
              <input
                value={form.name}
                onChange={update("name")}
                className="mt-1 w-full rounded-lg border px-3 py-2"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                className="mt-1 w-full rounded-lg border px-3 py-2"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email}</p>
              )}
            </div>
            <div>
              <label className="text-sm">Phone</label>
              <input
                value={form.phone}
                onChange={update("phone")}
                className="mt-1 w-full rounded-lg border px-3 py-2"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
              )}
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={update("message")}
                className="mt-1 w-full rounded-lg border px-3 py-2"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-600">{errors.message}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 w-full rounded-full bg-black text-white px-5 py-2 text-sm">
            Send Enquiry
          </button>
          {toast && (
            <div className="mt-3 rounded-lg bg-green-600 text-white px-3 py-2 text-sm">
              {toast}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
