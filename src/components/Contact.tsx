import { motion } from "motion/react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Instagram,
  Youtube,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center p-5 py-20 bg-gray-50"
    >
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Connect in 2026 🌟</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have an exciting project in mind or just want to connect? I'd love
            to hear from you! Let's build something amazing together!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 relative"
        >
          {/* Floating Background Icons */}
          <motion.img
            src="https://cdn.simpleicons.org/flutter/02569B"
            className="absolute bottom-80 left-5 md:bottom-20 md:left-[45%] w-12 h-12 md:w-20 md:h-20 opacity-30"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600">
              📬 Get In Touch
            </h3>

            <div className="flex items-center gap-4">
              <div className="bg-blue-600/10 p-3 rounded-full text-blue-600">
                <Mail size={24} />
              </div>
              <div className="w-full text-center">
                <p className="text-sm text-gray-500">Email</p>
                <a
                  href="mailto:connect@codingwithrk.com"
                  className="font-medium hover:text-blue-600 transition-colors"
                >
                  connect@codingwithrk.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-600/10 p-3 rounded-full text-blue-600">
                <MapPin size={24} />
              </div>
              <div className="w-full text-center">
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">Visakhapatnam, INDIA 🇮🇳 </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-600/10 p-3 rounded-full text-blue-600">
                <Phone size={24} />
              </div>
              <div className="w-full text-center">
                <p className="text-sm text-gray-500">Phone</p>
                <a
                  href="tel:+917036118293"
                  className="font-medium hover:text-blue-600 transition-colors"
                >
                  +91 703 611 8293
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600">
              🤝 Follow My Journey
            </h3>
            <p className="text-gray-600 mb-8">
              Connect with me on social media for tech updates, coding insights,
              and exciting project announcements!
            </p>
            <div className="flex gap-4 flex-wrap">
              {[
                {
                  icon: Github,
                  href: "https://github.com/codingwithrk",
                  color: "hover:bg-gray-900 hover:text-white",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/pappalarajkumar/",
                  color: "hover:bg-[#0077B5] hover:text-white",
                },
                {
                  icon: Twitter,
                  href: "https://x.com/CodingwithRK",
                  color: "hover:bg-black hover:text-white",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/codingwithrk/",
                  color: "hover:bg-[#E1306C] hover:text-white",
                },
                {
                  icon: Youtube,
                  href: "https://www.youtube.com/@codingwith-rk",
                  color: "hover:bg-[#FF0000] hover:text-white",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 bg-gray-50 rounded-full transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
