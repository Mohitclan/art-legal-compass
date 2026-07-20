import { Card } from "@/components/ui/card";
import { Folder } from "lucide-react";
import { CASE_CATEGORIES } from "@/content/authority";

const CaseCategories = () => (
  <section className="py-16 bg-secondary/20">
    <div className="container mx-auto px-6 max-w-6xl">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary text-center mb-2">
        Case Categories We Handle
      </h2>
      <div className="h-1 w-24 bg-gradient-gold mx-auto mb-10" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CASE_CATEGORIES.map((c) => (
          <Card key={c.title} className="p-6 border-2 border-border hover:border-gold transition-colors">
            <div className="flex items-center gap-3 mb-2">
              <Folder className="w-5 h-5 text-gold" />
              <h3 className="font-playfair text-lg font-semibold text-primary">{c.title}</h3>
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">{c.body}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
export default CaseCategories;
