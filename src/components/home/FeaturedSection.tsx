import { motion } from "framer-motion";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { getFeaturedArticles } from "@/data/articles";

export const FeaturedSection = () => {
  const featuredArticles = getFeaturedArticles();

  return (
    <section className="container-editorial py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-8"
      >
        <h2 className="font-display text-2xl md:text-3xl font-bold text-headline">
          Featured Stories
        </h2>
        <div className="flex-1 h-px bg-border" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {featuredArticles.map((article, index) => (
          <ArticleCard
            key={article.id}
            article={article}
            variant="featured"
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
