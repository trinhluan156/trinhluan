import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="text-slate-500 text-sm">
            {t('footer.copyright')}
          </div>

          {/* Made With */}
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>{t('footer.madeWith')}</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center transition-colors"
          >
            <ArrowUp className="w-5 h-5 text-slate-400" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
