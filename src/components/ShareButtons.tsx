import { Share2, Twitter, Linkedin, MessageCircle, Link2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";

type Props = { url: string; title: string };

const ShareButtons = ({ url, title }: Props) => {
  const enc = encodeURIComponent;
  const intents = {
    twitter: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`,
    whatsapp: `https://wa.me/?text=${enc(`${title} ${url}`)}`,
  };

  const native = async () => {
    if (navigator.share) {
      try { await navigator.share({ url, title }); } catch { /* dismissed */ }
    } else {
      await navigator.clipboard.writeText(url);
      toast({ title: "Link copied", description: url });
    }
  };

  const copy = async () => {
    await navigator.clipboard.writeText(url);
    toast({ title: "Link copied", description: url });
  };

  const btn = "inline-flex items-center justify-center h-9 w-9 rounded-full border border-border text-muted-foreground hover:text-gold hover:border-gold transition-colors";

  return (
    <div className="flex items-center gap-2" aria-label="Share this article">
      <button onClick={native} className={btn} aria-label="Share"><Share2 className="h-4 w-4" /></button>
      <a href={intents.twitter} target="_blank" rel="noopener noreferrer" className={btn} aria-label="Share on Twitter/X"><Twitter className="h-4 w-4" /></a>
      <a href={intents.linkedin} target="_blank" rel="noopener noreferrer" className={btn} aria-label="Share on LinkedIn"><Linkedin className="h-4 w-4" /></a>
      <a href={intents.whatsapp} target="_blank" rel="noopener noreferrer" className={btn} aria-label="Share on WhatsApp"><MessageCircle className="h-4 w-4" /></a>
      <button onClick={copy} className={btn} aria-label="Copy link"><Link2 className="h-4 w-4" /></button>
    </div>
  );
};

export default ShareButtons;
