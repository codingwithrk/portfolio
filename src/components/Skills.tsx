import { motion } from "motion/react";

type Skill = {
  name: string;
  percentage: number;
  iconSlug: string;
};

type Category = {
  title: string;
  skills: Skill[];
};

const skillCategories: Category[] = [
  {
    title: "Languages",
    skills: [
      { name: "PHP", percentage: 99, iconSlug: "php" },
      { name: "JavaScript", percentage: 95, iconSlug: "javascript" },
      { name: "GoLang", percentage: 60, iconSlug: "go" },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Laravel", percentage: 99, iconSlug: "laravel" },
      { name: "Yii2", percentage: 80, iconSlug: "yii" },
      { name: "Vue.js", percentage: 90, iconSlug: "vuedotjs" },
      { name: "Nuxt.js", percentage: 90, iconSlug: "nuxt" },
      { name: "Alpine.js", percentage: 99, iconSlug: "alpinedotjs" },
      { name: "Livewire", percentage: 97, iconSlug: "livewire" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", percentage: 100, iconSlug: "html5" },
      { name: "CSS", percentage: 100, iconSlug: "css" },
      { name: "Bootstrap", percentage: 100, iconSlug: "bootstrap" },
      { name: "TailwindCSS", percentage: 100, iconSlug: "tailwindcss" },
      { name: "jQuery", percentage: 100, iconSlug: "jquery" },
    ],
  },
  {
    title: "Mobile/Desktop",
    skills: [
      { name: "Flutter", percentage: 80, iconSlug: "flutter" },
      { name: "NativePHP", percentage: 90, iconSlug: "php" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", percentage: 96, iconSlug: "mysql" },
      { name: "MongoDB", percentage: 80, iconSlug: "mongodb" },
      { name: "SQLite3", percentage: 95, iconSlug: "sqlite" },
      { name: "PgSQL", percentage: 90, iconSlug: "postgresql" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-5 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A curated list of technologies I use to build robust applications.
          </p>
        </motion.div>

        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              <span className="border-b-2 border-[#FF2D20] inline-block">
                {category.title}
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:border-[#FF2D20]/30 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={`https://cdn.simpleicons.org/${skill.iconSlug}/${
                        skill.name === "PHP"
                          ? "777BB4"
                          : skill.name === "Laravel"
                          ? "FF2D20"
                          : "default"
                      }`}
                      alt={skill.name}
                      className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                    <div className="flex justify-between flex-1">
                      <span
                        className={`font-medium ${
                          skill.name === "PHP" || skill.name === "Laravel"
                            ? "text-[#FF2D20] font-bold"
                            : "text-gray-700"
                        }`}
                      >
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 * skillIndex }}
                      className={`h-full rounded-full ${
                        skill.name === "PHP"
                          ? "bg-[#777BB4]"
                          : skill.name === "Laravel"
                          ? "bg-[#FF2D20]"
                          : "bg-gradient-to-r from-[#FF2D20] to-[#777BB4]"
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
