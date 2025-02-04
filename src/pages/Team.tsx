import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    email: string;
    github?: string;
    linkedin?: string;
  };
}

export default function Team() {
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

  const teamMembers: TeamMember[] = [
    {
      name: "Dr. Sarah Chen",
      role: "Club President",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      bio: "Ph.D. in Astrophysics with 15 years of experience in astronomy education and research.",
      social: {
        email: "",
        linkedin: "",
        github: ""
      }
    },
    {
      name: "James Wilson",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
      bio: "Aerospace engineer specializing in telescope operations and maintenance.",
      social: {
        email: "",
        linkedin: "",
        github: ""
      }
    },
    {
      name: "Maria Rodriguez",
      role: "Events Coordinator",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      bio: "Professional event planner with a passion for astronomy outreach programs.",
      social: {
        email: "",
        linkedin: "",
        github: ""
      }
    }
  ];

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
            src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031?auto=format&fit=crop&q=80"
            alt="Stars in the night sky"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-950"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Meet Our Team
          </motion.h1>
          <motion.p
            variants={item}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Our dedicated team of astronomers, educators, and space enthusiasts working
            together to bring the universe closer to you.
          </motion.p>
        </div>
      </motion.div>

      {/* Team Members Grid */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 bg-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={item}
                className="bg-slate-800 rounded-xl overflow-hidden transform transition-all hover:scale-105"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-yellow-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    {member.social.github && (
                      <a
                        href={`https://github.com/${member.social.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${member.social.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}