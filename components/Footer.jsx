export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-semibold">Sports Travel</div>
            <p className="mt-2 text-sm text-zinc-600">Build memories at world events.</p>
          </div>
          <div className="text-sm">
            <div className="font-medium">Links</div>
            <div className="mt-2 flex flex-col gap-1 text-zinc-600">
              <a href="#packages">Packages</a>
              <a href="#featured">Featured</a>
              <a href="#how">How it works</a>
            </div>
          </div>
          <div className="text-sm">
            <div className="font-medium">Follow</div>
            <div className="mt-2 flex gap-3 text-zinc-600">
              <span>Twitter</span>
              <span>Instagram</span>
              <span>LinkedIn</span>
            </div>
          </div>
        </div>
        <div className="mt-8 text-xs text-zinc-500">© {new Date().getFullYear()} Sports Travel — All rights reserved.</div>
      </div>
    </footer>
  );
}