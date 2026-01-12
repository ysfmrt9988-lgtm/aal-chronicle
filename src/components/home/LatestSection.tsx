import { motion } from "framer-motion";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { getLatestArticles, getEditorsPickArticles } from "@/data/articles";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const LatestSection = () => {
  const latestArticles = getLatestArticles(4);
  const editorsPicks = getEditorsPickArticles().slice(0, 3);

  return (
    <section className="container-editorial py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        {/* Latest News - Main Column */}
        <div className="lg:col-span-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-headline">
                Latest News
              </h2>
              <div className="hidden sm:block flex-1 h-px bg-border w-24" />
            </div>
            <Link
              to="/news"
              className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              View All
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {latestArticles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </div>

        {/* Editor's Pick - Sidebar */}
        <div className="lg:col-span-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-headline">
              Editor's Pick
            </h2>
            <div className="flex-1 h-px bg-border" />
          </motion.div>

          <div className="space-y-6">
            {editorsPicks.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                variant="compact"
                index={index}
              />
            ))}
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 p-6 bg-secondary rounded-sm"
          >
            <h3 className="font-display text-lg font-bold text-headline mb-2">
              Stay Updated
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the latest news from Voice of AAL delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 text-sm border border-border rounded-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-sm hover:bg-accent transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
