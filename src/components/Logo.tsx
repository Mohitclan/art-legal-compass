import logoMark from "@/assets/logo-mark.png";

type Props = { compact?: boolean; className?: string };

const Logo = ({ compact = false, className = "" }: Props) => (
  <span className={`flex items-center gap-3 ${className}`}>
    <span className="w-11 h-11 shrink-0 rounded-full bg-ivory ring-1 ring-gold/50 flex items-center justify-center overflow-hidden">
      <img
        src={logoMark}
        alt="Barkha Dwivedi Advocate logo"
        width="44"
        height="44"
        className="w-8 h-8 object-contain"
      />
    </span>
    {!compact && (
      <span className="flex flex-col leading-tight text-left">
        <span className="font-playfair font-semibold text-base md:text-lg">
          Infertility Legal Solutions
        </span>
        <span className="text-[11px] tracking-wide opacity-80">
          Advocate Barkha Dwivedi
        </span>
      </span>
    )}
  </span>
);

export default Logo;
