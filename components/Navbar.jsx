import { useEffect, useState } from "react";

const menuItems = [
  { id: "packages", label: "Packages" },
  { id: "featured", label: "Featured" },
  { id: "why", label: "Why Us" },
  { id: "how", label: "How It Works" },
];

export default function Navbar({ onCta }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {}, [open]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-sm" : "bg-white/80"
      } backdrop-blur border-b border-zinc-200`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a
          href="#"
          className="font-bold text-xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>
          Sports Travel
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-blue-600 transition-colors duration-200 font-medium"
              onClick={(e) => handleNavClick(e, item.id)}>
              {item.label}
            </a>
          ))}
          <button
            onClick={onCta}
            className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity shadow-sm">
            Plan My Trip
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}>
          <div className="w-6 flex flex-col items-end space-y-1.5">
            <span
              className={`block h-0.5 bg-black transition-all duration-300 ${
                open ? "w-6 rotate-45 translate-y-2" : "w-6"
              }`}
            />
            <span
              className={`block h-0.5 bg-black transition-all duration-300 ${
                open ? "opacity-0" : "w-5"
              }`}
            />
            <span
              className={`block h-0.5 bg-black transition-all duration-300 ${
                open ? "w-6 -rotate-45 -translate-y-2" : "w-4"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-zinc-200">
          <nav className="px-6 pt-6 pb-8">
            <ul className="space-y-6 text-lg">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className="block py-3 font-medium text-zinc-800 hover:text-blue-600 transition-colors duration-200">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                setOpen(false);
                onCta?.();
              }}
              className="mt-8 w-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-4 text-base font-medium hover:opacity-90 transition-opacity shadow-md">
              Plan My Trip
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
