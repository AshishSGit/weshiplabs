import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="font-heading text-6xl font-bold gradient-text mb-4">404</p>
        <h1 className="font-heading text-2xl font-bold mb-2">Page not found</h1>
        <p className="text-text-muted mb-8">This page doesn&apos;t exist. Maybe we should build it for you.</p>
        <Link href="/" className="btn-primary">
          Back to Home <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
