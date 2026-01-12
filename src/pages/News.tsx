import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { PageTransition } from "@/components/layout/PageTransition";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { getArticlesByCategory, articles } from "@/data/articles";

const categories = [
  { id: "all", label: "All" },
  { id: "news", label: "News" },
  { id: "clubs", label: "Clubs" },
  { id: "events", label: "Events" },
  { id: "sports", label: "Sports" },
  { id: "culture", label: "Culture" },
];

const News = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";
  const [filteredArticles, setFilteredArticles] = useState(articles);

  useEffect(() => {
    setFilteredArticles(getArticlesByCategory(currentCategory));
  }, [currentCategory]);

  const handleCategoryChange = (category: string) => {
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <Layout>
      <PageTransition>
        {/* Header */}
        <section className="bg-secondary py-12 md:py-16">
          <div className="container-editorial">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h1 className="font-display text-4xl md:text-5xl font-bold text-headline mb-4">
                News & Articles
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore the latest stories, events, and updates from Atakent Anatolian High School
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="container-editorial py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-5 py-2 text-sm font-medium uppercase tracking-wider rounded-sm transition-all duration-300 ${
                  currentCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </section>

        {/* Articles Grid */}
        <section className="container-editorial pb-16">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg">
                No articles found in this category.
              </p>
              <Link
                to="/news"
                className="inline-block mt-4 text-primary hover:underline"
              >
                View all articles
              </Link>
            </motion.div>
          )}
        </section>
      </PageTransition>
    </Layout>
  );
};

export default News;
