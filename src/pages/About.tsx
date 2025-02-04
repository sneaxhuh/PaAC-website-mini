import { Rocket, Star, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16 bg-slate-950"
    >
      {/* Hero Section */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative py-20"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="Space nebula"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            About PaAC
          </motion.h1>
          <motion.p
            variants={item}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Founded in 1970, we've been inspiring generations of astronomers and space enthusiasts
            through education, observation, and community.
          </motion.p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 bg-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div variants={item} className="text-center p-6 bg-slate-800 rounded-lg transform transition-all hover:scale-105">
              <Rocket className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To inspire and educate the next generation of astronomers and space enthusiasts
                through hands-on experiences and community engagement.
              </p>
            </motion.div>
            <motion.div variants={item} className="text-center p-6 bg-slate-800 rounded-lg transform transition-all hover:scale-105">
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To create a vibrant community where anyone can explore the wonders of the universe
                and contribute to astronomical discoveries.
              </p>
            </motion.div>
            <motion.div variants={item} className="text-center p-6 bg-slate-800 rounded-lg transform transition-all hover:scale-105">
              <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-gray-300">
                Excellence in education, inclusivity in our community, and dedication to
                scientific exploration and discovery.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* History Section */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 bg-slate-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={item}>
              <h2 className="text-3xl font-bold text-white mb-6">Our History</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Since our founding in 1970, PaAC has been at the forefront of amateur
                  astronomy and space education. What started as a small group of enthusiasts
                  has grown into a thriving community of stargazers and scientists.
                </p>
                <p>
                  Over the years, we've organized hundreds of observation sessions, workshops,
                  and educational programs. Our members have contributed to citizen science
                  projects and even made several notable astronomical discoveries.
                </p>
                <p>
                  Today, we continue to grow and adapt, embracing new technologies and
                  methods while maintaining our commitment to hands-on learning and
                  community engagement.
                </p>
              </div>
            </motion.div>
            <motion.div variants={item} className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&q=80"
                alt="Vintage telescope"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}