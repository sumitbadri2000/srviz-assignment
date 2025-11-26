import { useEffect, useState } from "react";

function Toast({ message, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 2500);
    return () => clearTimeout(t);
  }, [onClose]);
  return (
    <div className="fixed top-4 right-4 z-50 rounded-lg bg-green-600 text-white px-4 py-2 shadow">
      {message}
    </div>
  );
}

export default function LeadFormModal({ open, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState("");

  if (!open) return null;

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!/^\+?[0-9\s-]{7,15}$/.test(form.phone)) e.phone = "Valid phone required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setToast("Thank you! We’ll contact you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
    onClose?.();
  };

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <form onSubmit={submit} className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
          <h3 className="text-lg font-semibold">Plan My Trip</h3>
          <p className="mt-1 text-sm text-zinc-600">Leave your details and we’ll get back to you.</p>
          <div className="mt-4 grid gap-3">
            <div>
              <label className="text-sm">Name</label>
              <input value={form.name} onChange={update("name")} className="mt-1 w-full rounded-lg border px-3 py-2"/>
              {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input type="email" value={form.email} onChange={update("email")} className="mt-1 w-full rounded-lg border px-3 py-2"/>
              {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
            </div>
            <div>
              <label className="text-sm">Phone</label>
              <input value={form.phone} onChange={update("phone")} className="mt-1 w-full rounded-lg border px-3 py-2"/>
              {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea value={form.message} onChange={update("message")} rows={4} className="mt-1 w-full rounded-lg border px-3 py-2"/>
              {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
            </div>
          </div>
          <div className="mt-5 flex gap-3">
            <button type="submit" className="rounded-full bg-black text-white px-5 py-2 text-sm">Submit</button>
            <button type="button" onClick={onClose} className="rounded-full border px-5 py-2 text-sm">Cancel</button>
          </div>
        </form>
      </div>
      {toast && <Toast message={toast} onClose={() => setToast("")} />}
    </div>
  );
}