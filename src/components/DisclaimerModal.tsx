import { useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Scale } from "lucide-react";

interface DisclaimerModalProps {
  onAccept: () => void;
  onReject: () => void;
}

const DisclaimerModal = ({ onAccept, onReject }: DisclaimerModalProps) => {
  const [open, setOpen] = useState(true);

  const handleAccept = () => {
    setOpen(false);
    onAccept();
  };

  const handleReject = () => {
    setOpen(false);
    onReject();
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="max-w-2xl bg-card border-2 border-gold">
        <AlertDialogHeader>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center">
              <Scale className="w-8 h-8 text-primary" />
            </div>
          </div>
          <AlertDialogTitle className="text-2xl font-playfair text-center text-primary">
            Important Legal Disclaimer
          </AlertDialogTitle>
          <AlertDialogDescription className="text-base leading-relaxed text-foreground space-y-4 pt-4">
            <p>
              Lawyers and law offices are not allowed to solicit clients or advertise, 
              according to the Bar Council of India's guidelines.
            </p>
            <p>
              By clicking <span className="font-semibold text-gold">"I AGREE"</span>, 
              you confirm that you are independently seeking information about{" "}
              <span className="font-semibold">Infertility Legal Solutions</span> (Adv. Barkha Dwivedi) 
              and that no solicitation or advertisement has been made by her or her associates.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            onClick={handleReject}
            className="border-2 hover:bg-destructive hover:text-destructive-foreground transition-colors"
          >
            EXIT SITE
          </Button>
          <Button
            onClick={handleAccept}
            className="bg-gradient-gold hover:opacity-90 text-primary font-semibold shadow-gold transition-all"
          >
            I AGREE
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DisclaimerModal;
