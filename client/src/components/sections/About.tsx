import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import { BrainCircuit, Users, Target, Sparkles } from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Research Focus",
    description: "Conducting cutting-edge research in machine learning and AI applications",
  },
  {
    icon: Users,
    title: "Collaborative Environment",
    description: "Working together with industry experts and academic professionals",
  },
  {
    icon: Target,
    title: "Innovation Driven",
    description: "Developing practical solutions to real-world challenges",
  },
  {
    icon: Sparkles,
    title: "Future Ready",
    description: "Preparing students for the future of AI technology",
  },
];

export default function About() {
  return (
    <Section id="about">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          About AI Club
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          LPCPS AI Club is a community of passionate researchers, developers, and innovators
          working together to advance the field of artificial intelligence.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="p-6 rounded-lg bg-card hover:bg-card/80 transition-colors"
          >
            <feature.icon className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
