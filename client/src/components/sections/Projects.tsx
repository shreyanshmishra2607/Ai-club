import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import { 
  Rocket, 
  Code2, 
  CheckCircle2 
} from "lucide-react";

const projectCategories = [
  {
    title: "Upcoming Projects",
    icon: Rocket,
    projects: [
      {
        title: "AI-Powered Healthcare Assistant",
        description: "Developing an AI system to assist in medical diagnosis",
        status: "Planning Phase",
      },
      {
        title: "Smart City Infrastructure",
        description: "AI solutions for urban planning and management",
        status: "Research Phase",
      },
    ],
  },
  {
    title: "Ongoing Projects",
    icon: Code2,
    projects: [
      {
        title: "Natural Language Processing Engine",
        description: "Building advanced NLP models for text analysis",
        status: "Development",
      },
      {
        title: "Computer Vision System",
        description: "Real-time object detection and recognition",
        status: "Testing",
      },
    ],
  },
  {
    title: "Completed Projects",
    icon: CheckCircle2,
    projects: [
      {
        title: "Sentiment Analysis Tool",
        description: "AI-based social media sentiment analyzer",
        status: "Completed",
      },
      {
        title: "Autonomous Robot Navigation",
        description: "ML algorithms for robot path planning",
        status: "Deployed",
      },
    ],
  },
];

export default function Projects() {
  return (
    <Section id="projects" className="bg-card/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Exploring the boundaries of artificial intelligence through innovative research projects.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projectCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <category.icon className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">{category.title}</h3>
            </div>

            {category.projects.map((project, projectIndex) => (
              <motion.div
                key={projectIndex}
                whileHover={{ scale: 1.02 }}
                className="bg-card p-6 rounded-lg shadow-lg"
              >
                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                  {project.status}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
