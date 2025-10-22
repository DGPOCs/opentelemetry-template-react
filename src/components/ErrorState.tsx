import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface ErrorStateProps {
  message: string;
  action?: ReactNode;
}

export const ErrorState = ({ message, action }: ErrorStateProps) => (
  <motion.div
    className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-red-400/20 bg-red-500/10 p-8 text-center text-red-100"
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    role="alert"
  >
    <AlertTriangle className="h-8 w-8" />
    <p className="text-lg font-medium">{message}</p>
    {action}
  </motion.div>
);
