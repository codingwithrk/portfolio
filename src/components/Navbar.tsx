import { useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="sticky top-0 z-50 m-5">
        <div className="flex justify-between items-center border border-white/20 p-5 rounded-full bg-white/70 backdrop-blur-xl shadow-sm relative overflow-hidden">
          {/* Theme Gradient Border Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-blue-600 via-purple-600 to-blue-600"></div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-600 animate-pulse" />
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 flex">
              CodingwithRK
              <span className="hidden md:flex">✨</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-8 text-gray-600 font-medium">
              {["Home", "About", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.1 },
                    }}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="hover:text-black transition-colors relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-600 to-purple-600 transition-all group-hover:w-full"></span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
          {/* GitHub Button */}
          <a
            href="https://github.com/codingwithrk/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex p-2 rounded-full hover:bg-gray-100 transition"
          >
            <Github className="w-5 h-5 text-gray-800 hover:text-black me-2" />
            <span>Open source</span>
          </a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-800"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 mt-2 p-5 border border-white/20 rounded-3xl bg-white/90 backdrop-blur-xl shadow-lg md:hidden flex flex-col gap-4 items-center z-40"
            >
              {["Home", "About", "Skills", "Contact"].map((item) => (
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.1 },
                  }}
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-black text-lg font-medium w-full text-center py-2"
                >
                  {item}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
