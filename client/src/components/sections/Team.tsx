import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import { Mail, Linkedin, Twitter } from "lucide-react";

const facultyHead = {
  name: "Shreyansh",
  title: "Faculty Head, AI Research Lab",
  image: "https://images.unsplash.com/photo-1516880711640-ef7db81be3e1",
  bio: "Leading AI researcher with 15+ years of experience in machine learning and neural networks.",
};

const currentMembers = [
  {
    name: "Shreyansh",
    role: "Research Lead",
    image: "https://images.unsplash.com/photo-1521830101529-057b1dfd9784",
  },
  {
    name: "Shreyansh",
    role: "ML Engineer",
    image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31",
  },
  {
    name: "Shreyansh",
    role: "Data Scientist",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
  },
  {
    name: "Shreyansh",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5",
  },
];

const previousLeads = [
  {
    name: "Shreyansh",
    period: "2020-2022",
    achievement: "Led the development of our NLP research division",
  },
  {
    name: "Shreyansh",
    period: "2018-2020",
    achievement: "Established partnerships with leading tech companies",
  },
];

export default function Team() {
  return (
    <Section id="team">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Meet the passionate individuals driving innovation in AI research.
        </p>
      </motion.div>

      {/* Faculty Head */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center gap-8 mb-16 bg-card p-8 rounded-lg"
      >
        <div className="w-48 h-48 rounded-full overflow-hidden">
          <img
            src={facultyHead.image}
            alt={facultyHead.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2">{facultyHead.name}</h3>
          <p className="text-primary mb-4">{facultyHead.title}</p>
          <p className="text-muted-foreground mb-6">{facultyHead.bio}</p>
          <div className="flex justify-center md:justify-start gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-primary/10 text-primary"
            >
              <Mail size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-primary/10 text-primary"
            >
              <Linkedin size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-primary/10 text-primary"
            >
              <Twitter size={20} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Current Members */}
      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-8 text-center">Current Members</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card p-6 rounded-lg text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold mb-2">{member.name}</h4>
              <p className="text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Previous Leads */}
      <div>
        <h3 className="text-2xl font-semibold mb-8 text-center">Previous Leads</h3>
        <div className="max-w-2xl mx-auto">
          {previousLeads.map((lead, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-6 last:mb-0 bg-card p-6 rounded-lg"
            >
              <h4 className="text-lg font-semibold mb-2">{lead.name}</h4>
              <p className="text-primary mb-2">{lead.period}</p>
              <p className="text-muted-foreground">{lead.achievement}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
