import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Settings, 
  FileText, 
  PenTool, 
  Wrench, 
  LineChart 
} from 'lucide-react';

export function Skills() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    {
      icon: Settings,
      key: 'technical',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FileText,
      key: 'onpage',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: PenTool,
      key: 'content',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Wrench,
      key: 'tools',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: LineChart,
      key: 'analytics',
      color: 'from-rose-500 to-red-500'
    }
  ];

  return (
    <section id="skills" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-emerald-500/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-emerald-400 text-lg">{t('skills.subtitle')}</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-1">
                {/* Header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-lg`}>
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t(`skills.${skill.key}.title`)}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3">
                  {[0, 1, 2, 3, 4].map((itemIndex) => (
                    <li 
                      key={itemIndex}
                      className="flex items-center gap-3 text-slate-400 group-hover:text-slate-300 transition-colors"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.color}`} />
                      <span className="text-sm">
                        {t(`skills.${skill.key}.items.${itemIndex}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
