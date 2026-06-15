import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[75vh] flex items-center justify-center px-6 overflow-hidden isolate">
      {/* ambient background to match the rest of the site */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/70 to-bg" />
      </div>
      <div className="text-center">
        <p className="font-heading text-7xl sm:text-8xl font-bold gradient-text mb-4">404</p>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold mb-2">Page not found</h1>
        <p className="text-text-muted mb-8 max-w-md mx-auto">This page doesn&apos;t exist. Maybe we should build it for you.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home <ArrowRight size={14} />
          </Link>
          <Link href="/contact" className="btn-ghost">
            Get a Free Quote <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
