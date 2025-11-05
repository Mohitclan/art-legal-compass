import { useState } from "react";
import { Mail, Phone, Send, MapPin, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number must be less than 15 digits"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Validate form data
      contactSchema.parse(formData);
      
      // Create mailto link with validated and encoded data
      const subject = encodeURIComponent(`Consultation Request from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
      );
      
      window.location.href = `mailto:barkha.abha2@gmail.com?subject=${subject}&body=${body}`;
      
      toast.success("Opening your email client...");
      
      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
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
    <section id="contact" className="py-24 bg-gradient-to-br from-primary via-navy to-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-20 w-80 h-80 bg-gold rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-gold rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header with Professional Card */}
          <div className="mb-16 animate-fade-in">
            <div className="bg-black/40 backdrop-blur-sm border-2 border-gold/30 rounded-lg p-8 md:p-12 shadow-gold hover:shadow-2xl transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
                {/* Left side - Name and Title */}
                <div className="text-center md:text-left">
                  <h2 className="font-playfair text-4xl md:text-5xl font-bold text-ivory mb-2 tracking-wide">
                    BARKHA TIWARI
                  </h2>
                  <div className="h-0.5 w-32 bg-gradient-gold mb-4 mx-auto md:mx-0"></div>
                  <p className="text-2xl text-ivory/90 font-light">Advocate</p>
                </div>

                {/* Right side - Legal Symbol */}
                <div className="w-32 h-32 border-4 border-ivory rounded-full flex items-center justify-center shrink-0 animate-float">
                  <Scale className="w-16 h-16 text-ivory" />
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-ivory/20">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <a 
                    href="tel:+919899499227"
                    className="flex items-start gap-4 group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-ivory text-lg font-medium group-hover:text-gold transition-colors">
                        +91-9899499227
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:barkha.abha2@gmail.com"
                    className="flex items-start gap-4 group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-ivory text-lg font-medium group-hover:text-gold transition-colors break-all">
                        barkha.abha2@gmail.com
                      </p>
                    </div>
                  </a>

                  {/* Chamber Address */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-ivory/70 text-sm font-semibold mb-1">Chamber</p>
                      <p className="text-ivory text-base leading-relaxed">
                        Chamber No.-920, Lawyers Chamber Block,<br />
                        Rohini Court, Complex, Rohini, Delhi-110085
                      </p>
                    </div>
                  </div>

                  {/* Office Address */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-ivory/70 text-sm font-semibold mb-1">Office</p>
                      <p className="text-ivory text-base leading-relaxed">
                        Flat No. 737, Baghban Appartment,<br />
                        Pocket-GH2, Sector-28, Rohini, Delhi-110042
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-ivory mb-4">
              Request a Consultation
            </h3>
            <div className="h-1 w-24 bg-gradient-gold mx-auto mb-4"></div>
            <p className="text-lg text-ivory/80">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>

          <div className="max-w-3xl mx-auto">

            <form 
              onSubmit={handleSubmit} 
              className="bg-black/40 backdrop-blur-sm border-2 border-gold/30 rounded-lg p-8 shadow-gold animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-ivory/10 border-2 border-ivory/30 text-ivory placeholder:text-ivory/50 focus:border-gold transition-colors h-12"
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
                    className="bg-ivory/10 border-2 border-ivory/30 text-ivory placeholder:text-ivory/50 focus:border-gold transition-colors h-12"
                  />
                </div>

                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-ivory/10 border-2 border-ivory/30 text-ivory placeholder:text-ivory/50 focus:border-gold transition-colors h-12"
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
                    className="bg-ivory/10 border-2 border-ivory/30 text-ivory placeholder:text-ivory/50 focus:border-gold transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-gold hover:opacity-90 hover:scale-105 text-primary font-bold text-lg py-6 shadow-gold hover:shadow-2xl transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
