import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Consultation Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:info@infertilitylegalsolutions.in?subject=${subject}&body=${body}`;
    
    toast.success("Opening your email client...");
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              Get in Touch
            </h2>
            <div className="h-1 w-24 bg-gradient-gold mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Reach out for legal consultation and expert guidance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <div className="bg-card p-6 rounded-lg shadow-elegant border-l-4 border-gold">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:info@infertilitylegalsolutions.in"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      info@infertilitylegalsolutions.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-elegant border-l-4 border-gold">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg font-semibold text-primary mb-2">
                      Phone
                    </h3>
                    <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-hero p-8 rounded-lg text-center shadow-gold">
                <p className="text-primary-foreground text-lg font-medium">
                  "Providing expert legal solutions with integrity and professionalism"
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-2 focus:border-gold transition-colors"
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-2 focus:border-gold transition-colors"
                />
              </div>

              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border-2 focus:border-gold transition-colors"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-2 focus:border-gold transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-gold hover:opacity-90 text-primary font-bold text-lg py-6 shadow-gold hover:shadow-2xl transition-all"
              >
                <Send className="w-5 h-5 mr-2" />
                Request Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
