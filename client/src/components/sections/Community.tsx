import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import { Heart, Users, Lightbulb, Share2 } from "lucide-react";

const initiatives = [
  {
    icon: Heart,
    title: "AI for Social Good",
    description: "Using AI technology to address social and environmental challenges in our community.",
  },
  {
    icon: Users,
    title: "Mentorship Program",
    description: "Connecting students with industry professionals for guidance and support.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Hub",
    description: "A space for collaboration and experimentation with AI technologies.",
  },
  {
    icon: Share2,
    title: "Knowledge Sharing",
    description: "Regular workshops and seminars to share knowledge and best practices.",
  },
];

const impactStats = [
  { number: "1000+", label: "Students Reached" },
  { number: "50+", label: "Community Projects" },
  { number: "30+", label: "Partner Organizations" },
  { number: "100+", label: "Workshop Hours" },
];

export default function Community() {
  return (
    <Section id="community" className="bg-card/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Local Community</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Building a stronger community through AI education and outreach programs.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {initiatives.map((initiative, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-card p-6 rounded-lg text-center"
          >
            <initiative.icon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
            <p className="text-muted-foreground">{initiative.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="bg-primary/5 rounded-lg p-8 md:p-12">
        <h3 className="text-2xl font-semibold text-center mb-12">Our Impact</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
