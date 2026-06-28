import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  TrendingUp,
  Target,
  Briefcase,
  Calendar,
  Building2,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

export function Projects() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const otherProjects = t('projects.other.items', { returnObjects: true }) as Array<{
    name: string;
    desc: string;
    category: string;
  }>;

  const websiteStrategy = t('projects.featured.strategy.website.items', { returnObjects: true }) as string[];
  const seoStrategy = t('projects.featured.strategy.seo.items', { returnObjects: true }) as string[];

  return (
    <section id="projects" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 right-0 w-1/3 h-1/2 bg-gradient-to-l from-emerald-500/5 to-transparent" />
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
            {t('projects.title')}
          </h2>
          <p className="text-sky-400 text-lg">{t('projects.subtitle')}</p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl p-8 md:p-12 border border-slate-700/50 relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-6 right-6">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-sky-500/20 text-emerald-400 text-sm font-medium border border-emerald-500/30">
                {t('projects.featured.label')}
              </span>
            </div>

            {/* Project Info */}
            <div className="mb-10">
              <div className="flex items-center gap-2 text-slate-400 mb-3">
                <Building2 className="w-5 h-5" />
                <span>{t('projects.featured.industry')}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Calendar className="w-5 h-5" />
                <span>{t('projects.featured.duration')}</span>
              </div>
            </div>

            {/* Results */}
            <h3 className="text-2xl font-bold text-white mb-8">{t('projects.featured.results')}</h3>
            <div className="grid sm:grid-cols-3 gap-6 mb-12">
              {/* Traffic */}
              <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-500/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-sky-400" />
                  </div>
                  <span className="text-slate-400">{t('projects.featured.traffic.label')}</span>
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-slate-500 text-lg">{t('projects.featured.traffic.from')}</span>
                  <span className="text-2xl text-slate-500">→</span>
                  <span className="text-3xl font-bold text-sky-400">{t('projects.featured.traffic.to')}</span>
                </div>
                <p className="text-slate-500 text-sm">{t('projects.featured.traffic.desc')}</p>
              </div>

              {/* Keywords */}
              <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-slate-400">{t('projects.featured.keywords.label')}</span>
                </div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">
                  {t('projects.featured.keywords.value')}
                </div>
                <p className="text-slate-500 text-sm">{t('projects.featured.keywords.desc')}</p>
              </div>

              {/* Revenue */}
              <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-slate-400">{t('projects.featured.revenue.label')}</span>
                </div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {t('projects.featured.revenue.value')}
                </div>
                <p className="text-slate-500 text-sm">{t('projects.featured.revenue.desc')}</p>
              </div>
            </div>

            {/* Strategy */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">{t('projects.featured.strategy.title')}</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Website Strategy */}
                <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800 h-full">
                  <h4 className="text-lg font-semibold text-white mb-5 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/30 to-sky-600/30 flex items-center justify-center text-sky-400 text-sm font-bold border border-sky-500/30">
                      1
                    </span>
                    {t('projects.featured.strategy.website.title')}
                  </h4>
                  <ul className="space-y-3">
                    {websiteStrategy.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-400 hover:text-slate-300 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SEO Strategy */}
                <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800 h-full">
                  <h4 className="text-lg font-semibold text-white mb-5 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/30 to-emerald-600/30 flex items-center justify-center text-emerald-400 text-sm font-bold border border-emerald-500/30">
                      2
                    </span>
                    {t('projects.featured.strategy.seo.title')}
                  </h4>
                  <ul className="space-y-3">
                    {seoStrategy.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-400 hover:text-slate-300 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-4">
            {t('projects.other.title')}
          </h3>
          <p className="text-slate-400 text-center mb-10">{t('projects.other.subtitle')}</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className="h-full bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50 hover:border-sky-500/30 hover:bg-slate-800/80 transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-700/50 text-slate-400 text-xs">
                      {project.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-sky-400 transition-colors" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-sky-400 transition-colors">
                    {project.name}
                  </h4>
                  <p className="text-slate-400 text-sm">{project.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
