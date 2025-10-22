import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

const titleVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 }
};

export const SectionHeader = ({ title, subtitle, action }: SectionHeaderProps) => (
  <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
    <div>
      <motion.h2
        className="text-3xl font-semibold text-white tracking-tight"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={titleVariants}
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          className="mt-1 text-slate-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={titleVariants}
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
    {action}
  </div>
);
