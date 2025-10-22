import { ArrowUpRight, ExternalLink, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import type { DevToArticle } from '../types/news';

interface NewsCardProps {
  article: DevToArticle;
}

const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 }
};

export const NewsCard = ({ article }: NewsCardProps) => {
  const publishedDate = new Date(article.published_at);

  return (
    <motion.article
      className="gradient-border"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      variants={cardVariants}
    >
      <div className="rounded-2xl bg-slate-900/60 p-6 backdrop-blur">
        <div className="flex flex-wrap items-start justify-between gap-3 text-sm text-slate-300">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 px-3 py-1 text-primary">
            <ArrowUpRight className="h-4 w-4 text-primary" />
            {publishedDate.toLocaleDateString('es-ES', {
              day: '2-digit',
              month: 'short',
              year: 'numeric'
            })}
          </span>
          <span className="inline-flex items-center gap-2 text-secondary">
            <Tag className="h-4 w-4" />
            {article.tags}
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold text-white">{article.title}</h3>
        <p className="mt-3 line-clamp-3 text-slate-300">{article.description}</p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-400">
          <div>
            <p className="font-medium text-slate-200">{article.user.name}</p>
            <p className="text-xs text-slate-400">@{article.user.username}</p>
          </div>

          <a
            href={article.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 font-medium text-secondary transition hover:bg-secondary/30"
          >
            Leer artículo
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};
