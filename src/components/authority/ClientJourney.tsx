import { CLIENT_JOURNEY } from "@/content/authority";

const ClientJourney = () => (
  <section className="py-16">
    <div className="container mx-auto px-6 max-w-4xl">
      <h2 className="font-playfair text-3xl md:text-4xl font-bold text-primary text-center mb-2">
        Your Client Journey
      </h2>
      <div className="h-1 w-24 bg-gradient-gold mx-auto mb-10" />
      <ol className="space-y-6 border-l-2 border-gold/40 pl-6">
        {CLIENT_JOURNEY.map((s, i) => (
          <li key={s.title} className="relative">
            <span className="absolute -left-[34px] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-gold text-primary font-bold text-sm">
              {i + 1}
            </span>
            <h3 className="font-playfair text-lg font-semibold text-primary">{s.title}</h3>
            <p className="text-foreground/80 mt-1 leading-relaxed">{s.body}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
export default ClientJourney;
