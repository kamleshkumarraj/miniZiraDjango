import { RefreshCw, Home, AlertTriangle } from "lucide-react";

type GlobalErrorPageProps = {
  title?: string;
  message?: string;
  onRetry?: () => void;
};

export default function GlobalErrorPage({
  title = "Something went wrong",
  message = "We ran into an unexpected problem. Our team has been notified.",
  onRetry,
}: GlobalErrorPageProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">

      {/* Animated background glow */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 h-96 w-96 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Card */}
      <div className="relative z-10 max-w-lg w-full mx-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">

        {/* Icon */}
        <div className="flex items-center justify-center mb-6">
          <div className="h-14 w-14 rounded-full bg-red-500/10 flex items-center justify-center animate-bounce">
            <AlertTriangle className="h-7 w-7 text-red-400" />
          </div>
        </div>

        {/* Text */}
        <h1 className="text-2xl font-semibold text-center mb-2">
          {title}
        </h1>

        <p className="text-center text-slate-300 text-sm leading-relaxed mb-8">
          {message}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onRetry}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/30"
          >
            <RefreshCw className="h-4 w-4" />
            Try Again
          </button>

          <a
            href="/"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all"
          >
            <Home className="h-4 w-4" />
            Go to Dashboard
          </a>
        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-center text-slate-400">
          Error Code: <span className="font-mono text-slate-300">500</span> ·
          Zira Platform
        </p>
      </div>
    </div>
  );
}
