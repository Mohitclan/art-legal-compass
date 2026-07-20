import { CalendarClock, Clock, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { AUTHOR, LAST_UPDATED } from "@/content/authority";

const fmt = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });

const ArticleMeta = ({ readingMinutes, updatedAt = LAST_UPDATED }: { readingMinutes: number; updatedAt?: string }) => (
  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs md:text-sm text-ivory/80 border-y border-ivory/15 py-3">
    <span className="inline-flex items-center gap-1.5"><UserCheck className="w-4 h-4 text-gold" />
      Reviewed by <Link to={AUTHOR.reviewedBy.url} className="text-gold hover:underline">{AUTHOR.reviewedBy.name}</Link>
    </span>
    <span className="inline-flex items-center gap-1.5"><CalendarClock className="w-4 h-4 text-gold" /> Last updated {fmt(updatedAt)}</span>
    <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4 text-gold" /> {readingMinutes} min read</span>
  </div>
);

export default ArticleMeta;
