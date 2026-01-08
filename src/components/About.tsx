import { motion } from "motion/react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center p-5"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 relative"
        >
          {/* Floating Background Icons */}
          <motion.img
            src="https://cdn.simpleicons.org/go/00ADD8"
            className="absolute bottom-10 left-5 md:bottom-20 md:left-[5%] w-12 h-12 md:w-20 md:h-20 opacity-30"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.img
            src="https://cdn.simpleicons.org/nuxt/00DC82"
            alt="Laravel"
            className="absolute -top-10 right-0 w-8 h-8 md:w-12 md:h-12 opacity-10"
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          <h2 className="text-4xl font-bold mb-4 relative inline-block text-gray-900">
            About Me
            <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-full"></span>
          </h2>

          <div className="text-lg text-gray-600 space-y-4 leading-relaxed">
            <p>
              I am a dedicated{" "}
              <span className="font-semibold text-blue-600">
                Full Stack Developer
              </span>{" "}
              with a passion for building scalable and user-friendly
              applications. I craft digital experiences with precision,
              expertise in modern web technologies, and a commitment to
              excellence. I focus on innovation and creating impactful
              solutions.
            </p>
            <p>
              My journey in tech has been driven by curiosity and a desire to
              solve real-world problems. I love exploring new tools,
              contributing to open source, and continuously learning to stay
              ahead in the ever-evolving tech landscape. I believe that great
              code brings joy and creates meaningful impact in people's lives.
            </p>
            <p>
              When I'm not coding, you can find me exploring new coffee shops,
              reading tech blogs, working on personal side projects, or spending
              quality time with family and friends.
            </p>
          </div>

          <div className="pt-4 flex justify-center gap-8">
            <div className="text-center p-4 bg-white rounded-2xl border-2 border-blue-600 shadow-lg shadow-blue-600/20">
              <h3 className="text-3xl font-bold text-blue-600">5+</h3>
              <p className="text-gray-500 text-sm">Years of experience</p>
            </div>
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="/raj-kumar.jpg"
              alt="Developer Workspace"
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          {/* Decorative background element */}
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-gray-100 rounded-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
