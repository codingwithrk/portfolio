import { motion } from "motion/react";

type Skill = {
  name: string;
  percentage: number;
  iconSlug: string;
  color: string; // added color
};

type Category = {
  title: string;
  skills: Skill[];
};

const skillCategories: Category[] = [
  {
    title: "🎄 Languages",
    skills: [
      { name: "PHP", percentage: 99, iconSlug: "php", color: "#777BB4" },
      {
        name: "JavaScript",
        percentage: 95,
        iconSlug: "javascript",
        color: "#fbbf24",
      },
      { name: "GoLang", percentage: 60, iconSlug: "go", color: "#0891b2" },
    ],
  },
  {
    title: "🎅 Frameworks",
    skills: [
      {
        name: "Laravel",
        percentage: 99,
        iconSlug: "laravel",
        color: "#dc2626",
      },
      { name: "Yii2", percentage: 80, iconSlug: "yii", color: "#0891b2" },
      {
        name: "Vue.js",
        percentage: 90,
        iconSlug: "vuedotjs",
        color: "#16a34a",
      },
      { name: "Nuxt.js", percentage: 90, iconSlug: "nuxt", color: "#22c55e" },
      {
        name: "Alpine.js",
        percentage: 99,
        iconSlug: "alpinedotjs",
        color: "#0891b2",
      },
      {
        name: "Livewire",
        percentage: 97,
        iconSlug: "livewire",
        color: "#ec4899",
      },
    ],
  },
  {
    title: "✨ Frontend",
    skills: [
      { name: "HTML", percentage: 100, iconSlug: "html5", color: "#dc2626" },
      { name: "CSS", percentage: 100, iconSlug: "css", color: "#0891b2" },
      {
        name: "Bootstrap",
        percentage: 100,
        iconSlug: "bootstrap",
        color: "#7c3aed",
      },
      {
        name: "TailwindCSS",
        percentage: 100,
        iconSlug: "tailwindcss",
        color: "#06b6d4",
      },
      { name: "jQuery", percentage: 100, iconSlug: "jquery", color: "#0369a1" },
    ],
  },
  {
    title: "📱 Mobile/Desktop",
    skills: [
      {
        name: "Flutter",
        percentage: 80,
        iconSlug: "flutter",
        color: "#06b6d4",
      },
      { name: "NativePHP", percentage: 90, iconSlug: "php", color: "#777BB4" },
    ],
  },
  {
    title: "💾 Databases",
    skills: [
      { name: "MySQL", percentage: 96, iconSlug: "mysql", color: "#0891b2" },
      {
        name: "MongoDB",
        percentage: 80,
        iconSlug: "mongodb",
        color: "#47A248",
      },
      { name: "SQLite3", percentage: 95, iconSlug: "sqlite", color: "#003B57" },
      {
        name: "PgSQL",
        percentage: 90,
        iconSlug: "postgresql",
        color: "#336791",
      },
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
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            🎁 My Tech Arsenal 🎁
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A festive collection of technologies I use to build robust and
            magical applications. Each tool in my workshop helps me craft the
            perfect digital experience!
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
              <span className="border-b-4 border-red-600 inline-block pb-1">
                {category.title}
              </span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skill.name}
                  className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                  style={{
                    borderColor: skill.color,
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={`https://cdn.simpleicons.org/${skill.iconSlug}`}
                      alt={skill.name}
                      className="w-10 h-10 group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />

                    <div className="flex justify-between flex-1">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.percentage}%
                      </span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 * skillIndex }}
                      className="h-full rounded-full"
                      style={{
                        background: skill.color,
                      }}
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
