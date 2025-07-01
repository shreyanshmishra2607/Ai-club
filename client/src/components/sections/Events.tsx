import { motion } from "framer-motion";
import Section from "@/components/shared/Section";
import { Calendar, Clock } from "lucide-react";

const upcomingEvents = [
  {
    title: "AI Workshop Series",
    date: "April 15, 2024",
    time: "2:00 PM - 4:00 PM",
    description: "Hands-on workshop on implementing neural networks",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  },
  {
    title: "Guest Lecture: Future of AI",
    date: "April 22, 2024",
    time: "3:00 PM - 5:00 PM",
    description: "Industry experts discuss emerging AI trends",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
  },
];

const pastEvents = [
  {
    title: "Machine Learning Bootcamp",
    date: "March 10, 2024",
    description: "Intensive training on ML fundamentals",
    image: "https://images.unsplash.com/photo-1464047736614-af63643285bf",
  },
  {
    title: "AI Research Symposium",
    date: "February 25, 2024",
    description: "Presentation of student research projects",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176",
  },
];

export default function Events() {
  return (
    <Section id="events">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Events</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Join us for exciting events and learning opportunities in AI and machine learning.
        </p>
      </motion.div>

      <div className="mb-16">
        <h3 className="text-2xl font-semibold mb-8">Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors" />
              </div>
              <div className="relative p-6 flex flex-col h-full min-h-[300px] justify-end">
                <h4 className="text-xl font-semibold text-white mb-2">{event.title}</h4>
                <div className="flex items-center text-gray-300 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-300 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <p className="text-gray-200">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-8">Past Events</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pastEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${event.image})` }}
              />
              <div className="p-4">
                <h4 className="font-semibold mb-2">{event.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
