import { AlertTriangle } from "lucide-react";

// Renders a visible amber TODO block IN DEV ONLY. In production the section
// is hidden entirely — ServicePageTemplate simply skips the surrounding UI.
// This keeps the live site free of AI filler while shipping a writing
// roadmap in git.

type Props = { title: string; note: string };

const ContentGap = ({ title, note }: Props) => {
  if (!import.meta.env.DEV) return null;
  return (
    <div
      role="note"
      className="my-4 flex items-start gap-3 rounded-md border-2 border-dashed border-amber-500/60 bg-amber-500/5 p-4 text-sm text-amber-900 dark:text-amber-200"
    >
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
      <div>
        <p className="font-semibold">Content gap — {title}</p>
        <p className="mt-1 opacity-90">{note}</p>
        <p className="mt-1 text-xs opacity-70">
          (Visible in dev only — hidden in production.)
        </p>
      </div>
    </div>
  );
};

export default ContentGap;