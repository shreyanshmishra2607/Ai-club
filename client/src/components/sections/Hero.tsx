import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Welcome to LPCPS AI Research Lab",
    description: "Advancing the frontiers of artificial intelligence through research and innovation",
    image: "https://images.unsplash.com/photo-1486475554424-2fa50cd59f18",
  },
  {
    title: "Cutting-edge Research",
    description: "Exploring the latest developments in machine learning and AI technologies",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
  },
  {
    title: "Collaborative Learning",
    description: "Join our community of passionate researchers and innovators",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{
            opacity: currentSlide === index ? 1 : 0,
            transition: { duration: 0.8 },
          }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="absolute inset-0 bg-black/60" />
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: currentSlide === index ? 0 : 20,
                  opacity: currentSlide === index ? 1 : 0,
                }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8">
                  {slide.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-md text-lg font-medium"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-primary" : "bg-gray-400/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
