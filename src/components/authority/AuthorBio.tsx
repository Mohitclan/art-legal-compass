import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { AUTHOR } from "@/content/authority";
import { SITE } from "@/content/site";

const AuthorBio = ({ variant = "full" }: { variant?: "full" | "compact" }) => (
  <Card className="p-6 md:p-8 border-2 border-border">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 shrink-0 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold">
        <GraduationCap className="w-6 h-6 text-primary" />
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">About the Author</p>
        <h3 className="font-playfair text-xl md:text-2xl font-bold text-primary mt-1">
          <Link to="/about" className="hover:text-gold transition-colors">{AUTHOR.name}</Link>
        </h3>
        <p className="text-sm text-gold">{AUTHOR.jobTitle} · {SITE.person.court}</p>
        <p className="mt-3 text-foreground/85 leading-relaxed text-sm md:text-base">{AUTHOR.shortBio}</p>
        {variant === "full" && (
          <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm text-foreground/80 list-disc list-inside">
            {AUTHOR.credentials.map((c) => <li key={c}>{c}</li>)}
          </ul>
        )}
        <div className="mt-4 text-sm">
          <Link to="/about" className="text-gold hover:underline">Read full profile →</Link>
        </div>
      </div>
    </div>
  </Card>
);

export default AuthorBio;
