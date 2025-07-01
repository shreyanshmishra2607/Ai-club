import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import { Globe, Building2, GraduationCap } from "lucide-react";

const partners = [
  {
    type: "Universities",
    icon: GraduationCap,
    items: [
      "Massachusetts Institute of Technology",
      "Stanford University",
      "Carnegie Mellon University",
      "University of Oxford",
    ],
  },
  {
    type: "Companies",
    icon: Building2,
    items: [
      "Google Cloud AI",
      "Microsoft Research",
      "IBM Watson",
      "NVIDIA AI",
    ],
  },
  {
    type: "Research Labs",
    icon: Globe,
    items: [
      "DeepMind",
      "OpenAI",
      "Allen Institute for AI",
      "Facebook AI Research",
    ],
  },
];

export default function Collaborations() {
  return (
    <Section id="collaborations">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">International Collaborations</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Working with leading institutions and companies worldwide to advance AI research and development.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {partners.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="bg-card p-6 rounded-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <category.icon className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">{category.type}</h3>
            </div>
            <ul className="space-y-4">
              {category.items.map((item, itemIndex) => (
                <motion.li
                  key={itemIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: itemIndex * 0.1 }}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <h3 className="text-xl font-semibold mb-8">Trusted by Industry Leaders</h3>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {["Google Cloud", "Microsoft Azure", "IBM Watson"].map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.1 }}
              className="text-xl font-semibold text-muted-foreground hover:text-primary transition-colors"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}