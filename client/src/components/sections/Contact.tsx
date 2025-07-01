import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Mail,
  Phone,
  Globe,
  Clock,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    content: "LPCPS AI Research Lab, Building A, Room 301",
    detail: "123 University Avenue, Tech District",
  },
  {
    icon: Mail,
    title: "Email",
    content: "ai.research@lpcps.edu",
    detail: "For general inquiries and collaborations",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+1 (555) 123-4567",
    detail: "Monday to Friday, 9:00 AM - 5:00 PM",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday - Friday",
    detail: "9:00 AM - 5:00 PM EST",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/lpcps-ai",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/company/lpcps-ai",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/lpcps_ai",
  },
  {
    icon: Globe,
    label: "Website",
    href: "https://ai.lpcps.edu",
  },
];

export default function Contact() {
  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Get in touch with us to learn more about our research, collaborations,
          and upcoming events.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <info.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-foreground mb-1">{info.content}</p>
                  <p className="text-sm text-muted-foreground">{info.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Map Location */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative h-full min-h-[300px] rounded-lg overflow-hidden bg-card"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.7!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQyJzI4LjIiTiA3M8KwNTQnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
        <div className="flex justify-center gap-4 flex-wrap">
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="flex items-center gap-2"
                asChild
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
