import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/shared/Section";
import { X } from "lucide-react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    title: "AI Workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    title: "Research Presentation",
  },
  {
    src: "https://images.unsplash.com/photo-1464047736614-af63643285bf",
    title: "Team Collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1513151233558-d860c5398176",
    title: "Conference",
  },
  {
    src: "https://images.unsplash.com/photo-1513623935135-c896b59073c1",
    title: "Lab Work",
  },
  {
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
    title: "Group Discussion",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <Section id="gallery" className="bg-card/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Gallery</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Capturing moments of innovation, collaboration, and discovery.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(index)}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{image.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-10 right-0 text-white hover:text-primary"
              >
                <X size={24} />
              </button>
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-white text-center mt-4 text-lg font-semibold">
                {galleryImages[selectedImage].title}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
