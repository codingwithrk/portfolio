import { motion } from "motion/react";
import { ArrowRight, FileText, Terminal } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center p-5 relative overflow-hidden"
    >
      {/* Background Blobs - Updated Colors & Intensity */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#777BB4] rounded-full blur-[120px] opacity-20 animate-pulse" />{" "}
        {/* PHP Purple */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#FF2D20] rounded-full blur-[120px] opacity-20 animate-pulse delay-1000" />{" "}
        {/* Laravel Red */}
      </div>

      {/* Floating Icons */}
      <motion.img
        src="https://cdn.simpleicons.org/php/777BB4"
        alt="PHP"
        className="absolute top-10 right-5 md:top-20 md:right-[10%] w-10 h-10 md:w-16 md:h-16 opacity-30 "
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="https://cdn.simpleicons.org/laravel/FF2D20"
        alt="Laravel"
        className="absolute bottom-10 left-5 md:bottom-20 md:left-[5%] w-12 h-12 md:w-20 md:h-20 opacity-30"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Content */}
        <div className="text-center md:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm md:text-base font-semibold tracking-wider text-[#FF2D20] uppercase mb-2">
              Full Stack Developer
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
              Building <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D20] to-[#777BB4]">
                Digital Experiences
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            Hi, I'm Raj Kumar. I transform complex problems into elegant,
            scalable, and user-friendly web applications using modern
            technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          >
            <Button asChild>
              <a href="https://codingwithrk.com/our-works" target="_blank">
                View Work <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="/PAPPALA_RAJ_KUMAR_Resume.pdf" download>
                My Resume <FileText className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Right Column: Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 bg-[#1e1e1e] text-gray-300 p-6 rounded-3xl shadow-2xl transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 border border-gray-800">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-auto text-xs text-gray-500 font-mono">
                web.php
              </div>
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex gap-2">
                <span className="text-[#F9322C]">Route</span>
                <span className="text-white">::</span>
                <span className="text-[#61AFEF]">get</span>
                <span className="text-white">(</span>
                <span className="text-[#98C379]">'/portfolio'</span>
                <span className="text-white">, </span>
                <span className="text-[#C678DD]">function</span>
                <span className="text-white"> () {"{"}</span>
              </div>
              <div className="pl-4 flex gap-2">
                <span className="text-[#C678DD]">return</span>
                <span className="text-[#61AFEF]"> view</span>
                <span className="text-white">(</span>
                <span className="text-[#98C379]">'welcome'</span>
                <span className="text-white">, [</span>
              </div>
              <div className="pl-8 flex gap-2">
                <span className="text-[#98C379]">'name'</span>
                <span className="text-white"> =&gt; </span>
                <span className="text-[#98C379]">'Raj Kumar'</span>,
              </div>
              <div className="pl-8 flex gap-2">
                <span className="text-[#98C379]">'role'</span>
                <span className="text-white"> =&gt; </span>
                <span className="text-[#98C379]">'Full Stack Dev'</span>,
              </div>
              <div className="pl-8 flex gap-2">
                <span className="text-[#98C379]">'stack'</span>
                <span className="text-white"> =&gt; [</span>
                <span className="text-[#98C379]">'Laravel'</span>,
                <span className="text-[#98C379]">'Vue'</span>
                <span className="text-[#98C379]">'Flutter'</span>
                <span className="text-white">]</span>
              </div>
              <div className="pl-4 text-white text-start">]);</div>
              <div className="text-white text-start">{"}"});</div>
            </div>
          </div>
          {/* Decorative Elements behind the card */}
          <div className="absolute top-10 right-10 w-full h-full bg-gradient-to-br from-[#FF2D20]/20 to-[#777BB4]/20 rounded-3xl -z-10 transform rotate-[5deg]" />
          <div className="absolute -bottom-10 -left-10 animate-bounce">
            <Terminal className="w-24 h-24 text-gray-200 opacity-50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
