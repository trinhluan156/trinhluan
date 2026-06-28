import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart2, Layers, Award, Code } from 'lucide-react';

export function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const approaches = [
    { icon: BarChart2, key: 'dataDriven' },
    { icon: Layers, key: 'semantic' },
    { icon: Award, key: 'authority' },
    { icon: Code, key: 'technical' }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-sky-500/5 to-transparent" />
      
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
            {t('about.title')}
          </h2>
          <p className="text-sky-400 text-lg">{t('about.subtitle')}</p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-lg leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              {t('about.description2')}
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              {t('about.description3')}
            </p>
          </motion.div>

          {/* Right - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-sky-500/10 to-emerald-500/10 rounded-3xl p-8 border border-slate-700/50">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-800/80 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-sky-400 mb-2">134K+</div>
                  <div className="text-slate-400 text-sm">{t('about.stats.traffic')}</div>
                </div>
                <div className="bg-slate-800/80 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">6+</div>
                  <div className="text-slate-400 text-sm">{t('about.stats.projects')}</div>
                </div>
                <div className="bg-slate-800/80 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">~3x</div>
                  <div className="text-slate-400 text-sm">{t('about.stats.growth')}</div>
                </div>
                <div className="bg-slate-800/80 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">Top 1</div>
                  <div className="text-slate-400 text-sm">{t('about.stats.keywords')}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Approach Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-10">
            {t('about.approach.title')}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.key}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-sky-500/30 hover:bg-slate-800/80 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <approach.icon className="w-6 h-6 text-sky-400" />
                </div>
                <h4 className="text-white font-semibold mb-2">
                  {t(`about.approach.${approach.key}.title`)}
                </h4>
                <p className="text-slate-400 text-sm">
                  {t(`about.approach.${approach.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
