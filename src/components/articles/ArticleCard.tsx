import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Article } from "@/data/articles";
import { format } from "date-fns";

interface ArticleCardProps {
  article: Article;
  variant?: "default" | "featured" | "compact";
  index?: number;
}

export const ArticleCard = ({ article, variant = "default", index = 0 }: ArticleCardProps) => {
  const categoryColors: Record<string, string> = {
    news: "bg-primary",
    clubs: "bg-emerald-600",
    events: "bg-amber-600",
    sports: "bg-blue-600",
    culture: "bg-purple-600",
  };

  if (variant === "featured") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group"
      >
        <Link to={`/article/${article.id}`} className="block">
          <div className="relative overflow-hidden aspect-[16/10] md:aspect-[16/9] rounded-sm">
            <motion.img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 image-overlay" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className={`category-badge ${categoryColors[article.category]} mb-4`}>
                {article.category}
              </span>
              <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-3 leading-tight">
                {article.title}
              </h2>
              <p className="text-white/80 text-sm md:text-base line-clamp-2 mb-4 max-w-2xl">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-4 text-white/60 text-sm">
                <span>{article.author}</span>
                <span>•</span>
                <time>{format(new Date(article.publishDate), "MMMM d, yyyy")}</time>
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  if (variant === "compact") {
    return (
      <motion.article
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="group"
      >
        <Link to={`/article/${article.id}`} className="flex gap-4">
          <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-sm">
            <motion.img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
          </div>
          <div className="flex-1 min-w-0">
            <span className={`inline-block px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-primary-foreground rounded-sm ${categoryColors[article.category]} mb-2`}>
              {article.category}
            </span>
            <h3 className="font-display text-base font-semibold text-headline line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <time className="text-xs text-caption mt-1 block">
              {format(new Date(article.publishDate), "MMM d, yyyy")}
            </time>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="article-card group"
    >
      <Link to={`/article/${article.id}`} className="block">
        <div className="relative overflow-hidden aspect-[16/10]">
          <motion.img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
          <span className={`absolute top-4 left-4 category-badge ${categoryColors[article.category]}`}>
            {article.category}
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl font-bold text-headline mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-body text-sm line-clamp-2 mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-caption">
            <span>{article.author}</span>
            <time>{format(new Date(article.publishDate), "MMM d, yyyy")}</time>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
