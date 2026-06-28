import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Code, Globe, TrendingUp } from 'lucide-react';

interface Job {
  company: string;
  role: string;
  period: string;
  periodEn: string;
  type: string;
  icon: React.ElementType;
  color: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
}

export function Experience() {
  const { i18n } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEn = i18n.language === 'en';

  const jobs: Job[] = [
    {
      company: 'Pixel Perfect',
      role: isEn ? 'SEO Specialist' : 'SEO Specialist',
      period: '03/2026 – Hiện tại',
      periodEn: 'Mar 2026 – Present',
      type: isEn ? 'International SEO · Web Dev' : 'International SEO · Web Dev',
      icon: Globe,
      color: 'from-sky-500 to-cyan-500',
      highlights: isEn
        ? [
            'Scaled 9proxy.com from ~10K to 32K+/month in just 3 months (~3x growth)',
            'Fully independent project management — strategy, onpage, offpage, technical SEO',
            'Built custom in-house tools and plugins to automate SEO workflows',
            'Handled front-end DEV: speed optimization, bug fixes, new feature deployment',
            'Integrated AI (ChatGPT, Claude) across all stages of the workflow',
          ]
        : [
            'Phát triển 9proxy.com từ ~10K lên 32K+/tháng chỉ trong 3 tháng (~3x)',
            'Quản lý dự án hoàn toàn độc lập — chiến lược, onpage, offpage, technical SEO',
            'Tự build tool và plugin nội bộ phục vụ tự động hóa quy trình SEO',
            'Đảm nhiệm DEV front-end: tối ưu tốc độ, sửa lỗi kỹ thuật, deploy tính năng mới',
            'Tích hợp AI (ChatGPT, Claude) vào toàn bộ quy trình làm việc',
          ],
      metrics: [
        { label: isEn ? 'Traffic growth' : 'Tăng traffic', value: '~3x' },
        { label: isEn ? 'In 3 months' : 'Trong 3 tháng', value: '32K+/mo' },
      ],
    },
    {
      company: 'Ecomkey JSC',
      role: 'SEO Specialist',
      period: '06/2025 – 03/2026',
      periodEn: 'Jun 2025 – Mar 2026',
      type: isEn ? 'International SEO · Web Dev' : 'International SEO · Web Dev',
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500',
      highlights: isEn
        ? [
            'Managed full-cycle SEO for 6+ projects simultaneously (APK download niche)',
            'Built 3 websites from new domains — happymod.cx peaked at 134K+/month, dlmod.me at 127K+/month',
            'Ranked hundreds of keywords in Top 1–3 Google in the international APK market',
            'Handled both front-end DEV and SEO in parallel — no dev team dependency',
          ]
        : [
            'Quản lý SEO toàn diện cho 6+ dự án cùng lúc (ngành APK download)',
            'Xây 3 website từ domain mới — happymod.cx đạt 134K+/tháng, dlmod.me đạt 127K+/tháng',
            'Đưa hàng trăm từ khóa lên Top 1–3 Google trên thị trường APK quốc tế',
            'Tự DEV front-end và SEO song song — không phụ thuộc team kỹ thuật',
          ],
      metrics: [
        { label: isEn ? 'Peak traffic' : 'Traffic đỉnh', value: '134K+' },
        { label: isEn ? 'Simultaneous' : 'Cùng lúc', value: '6+ dự án' },
      ],
    },
    {
      company: 'Golinks LLC',
      role: 'SEO Executive',
      period: '03/2025 – 06/2025',
      periodEn: 'Mar 2025 – Jun 2025',
      type: isEn ? 'Agency SEO (VI & EN)' : 'Agency SEO (VI & EN)',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
      highlights: isEn
        ? [
            'Executed SEO for both Vietnamese and English websites under an agency model',
            'Built onpage and technical SEO foundations from scratch for new domains',
            'Gained deep exposure to front-end development workflows — foundation for later DEV skills',
          ]
        : [
            'Triển khai SEO cho website tiếng Việt lẫn tiếng Anh theo mô hình agency',
            'Xây dựng nền tảng onpage và technical SEO từ đầu cho các domain mới',
            'Tiếp xúc chuyên sâu với quy trình front-end — nền tảng kỹ năng DEV giai đoạn sau',
          ],
      metrics: [],
    },
    {
      company: 'Agency Marketing ECXO',
      role: 'SEO Executive',
      period: '09/2024 – 03/2025',
      periodEn: 'Sep 2024 – Mar 2025',
      type: isEn ? 'Multi-industry Agency SEO' : 'Agency SEO đa ngành',
      icon: Briefcase,
      color: 'from-orange-500 to-amber-500',
      highlights: isEn
        ? [
            'Managed SEO for 4 client websites across: auto parts, custom bags & apparel, marketing, mother & baby',
            'Achieved #1 Google ranking for "custom bag manufacturer" and "Michelin tires NAT Center"',
            'Built quality backlink systems and ran simultaneous offpage SEO and Social Media campaigns',
          ]
        : [
            'Quản lý SEO cho 4 website khách hàng: phụ tùng ô tô, may mặc & balo, marketing, mẹ & bé',
            'Đạt Top 1 Google: "may balo theo yêu cầu", "lốp Michelin NAT Center"',
            'Xây dựng hệ thống backlink chất lượng; triển khai offpage SEO và Social Media đồng thời',
          ],
      metrics: [
        { label: isEn ? 'Keywords' : 'Từ khóa', value: 'Top 1' },
        { label: isEn ? 'Clients' : 'Khách hàng', value: '4 sites' },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-l from-sky-500/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-r from-emerald-500/5 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {isEn ? 'Work Experience' : 'Kinh Nghiệm Làm Việc'}
          </h2>
          <p className="text-sky-400 text-lg">
            {isEn ? 'Nearly 2 years · 4 companies · Domestic & International' : 'Gần 2 năm · 4 công ty · Thị trường trong và ngoài nước'}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-emerald-500/30 to-transparent transform md:-translate-x-px" />

          <div className="space-y-12">
            {jobs.map((job, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
                  className={`relative flex items-start gap-8 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${job.color} flex items-center justify-center shadow-lg shadow-sky-500/20`}>
                      <job.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Card — left or right */}
                  <div className={`ml-16 md:ml-0 w-full md:w-[calc(50%-3rem)] ${isLeft ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-slate-600 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5 hover:-translate-y-1">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <div>
                          <h3 className="text-xl font-bold text-white">{job.company}</h3>
                          <span className={`text-sm font-semibold bg-gradient-to-r ${job.color} bg-clip-text text-transparent`}>
                            {job.role}
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 whitespace-nowrap mt-1 bg-slate-800 px-2 py-1 rounded-full">
                          {isEn ? job.periodEn : job.period}
                        </span>
                      </div>

                      <p className="text-xs text-slate-500 mb-4">{job.type}</p>

                      {/* Metrics */}
                      {job.metrics && job.metrics.length > 0 && (
                        <div className="flex gap-3 mb-4">
                          {job.metrics.map((m, i) => (
                            <div key={i} className="bg-slate-800/80 rounded-lg px-3 py-2 text-center">
                              <div className={`text-lg font-bold bg-gradient-to-r ${job.color} bg-clip-text text-transparent`}>
                                {m.value}
                              </div>
                              <div className="text-xs text-slate-500">{m.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {job.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${job.color} flex-shrink-0 mt-1.5`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for the other side on desktop */}
                  <div className="hidden md:block w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
