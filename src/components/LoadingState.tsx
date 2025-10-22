import { motion } from 'framer-motion';

interface LoadingStateProps {
  message?: string;
}

export const LoadingState = ({ message = 'Cargando información...' }: LoadingStateProps) => (
  <div className="flex h-48 items-center justify-center">
    <motion.div
      className="h-10 w-10 rounded-full border-4 border-secondary/40 border-t-secondary"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
      role="status"
      aria-label="Cargando"
    />
    <span className="ml-4 text-slate-300">{message}</span>
  </div>
);
