import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, 
  Search, 
  BarChart3, 
  FileSpreadsheet 
} from 'lucide-react';

export function Tools() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const toolCategories = [
    {
      icon: Globe,
      key: 'cms',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Search,
      key: 'seo',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: BarChart3,
      key: 'analytics',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: FileSpreadsheet,
      key: 'productivity',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const getToolsList = (key: string): string[] => {
    return t(`tools.categories.${key}.items`, { returnObjects: true }) as string[];
  };

  return (
    <section id="tools" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[100px]" />
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
            {t('tools.title')}
          </h2>
          <p className="text-emerald-400 text-lg">{t('tools.subtitle')}</p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toolCategories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="h-full bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {t(`tools.categories.${category.key}.title`)}
                  </h3>
                </div>

                {/* Tools List */}
                <div className="flex flex-wrap gap-2">
                  {getToolsList(category.key).map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-sm border border-slate-700 hover:border-sky-500/30 hover:text-sky-400 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500 text-sm">
            {t('tools.footer')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
