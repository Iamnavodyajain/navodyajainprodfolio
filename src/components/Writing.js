// src/components/Writing.js - Full corrected version
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { PenTool, ArrowRight, Clock, ChevronRight, ExternalLink, BarChart, TrendingUp, Layers, Image as ImageIcon } from 'lucide-react';

export default function Writing() {
  const [articles] = useState([
    {
      id: 1,
      title: "When Products Don't Solve Problems — They Create Possibilities",
      excerpt: "Some products don't fix pain points — they reshape behaviour. This piece explores how possibility-led thinking defines modern product success.",
      readTime: "5 min read",
      category: "Product Thinking",
      content: "This article explores how to think beyond problem-solving to possibility-creation, focusing on how products can enable new capabilities rather than just fixing old problems. We'll examine case studies and frameworks for shifting from reactive problem-solving to proactive possibility-creation in product development.",
      externalLink: "https://example.com/article-1",
      thumbnailIcon: PenTool,
      // Your image paths (put images in public folder)
      thumbnailImage: "/writing/ep01.png", // Example: public/writing/product-thinking.jpg
      placeholderColor: "from-[#22C55E]/20 to-[#16A34A]/10",
      gradientColor: "from-[#22C55E]/30 to-transparent"
    },
    {
      id: 2,
      title: "The Analytics Mindset: Asking Better Questions",
      excerpt: "Why meaningful product insights come from hypotheses, not dashboards — and how to think beyond metrics reporting.",
      readTime: "4 min read",
      category: "Product Analytics",
      content: "Learn how to ask better questions that uncover deeper insights, moving from reporting to understanding in product analytics. This piece covers practical techniques for hypothesis-driven analysis and avoiding common data traps that lead to superficial insights.",
      externalLink: "https://example.com/article-2",
      thumbnailIcon: BarChart,
      thumbnailImage: "/writing/analytics-mindset.jpg",
      placeholderColor: "from-[#3B82F6]/20 to-[#1D4ED8]/10",
      gradientColor: "from-[#3B82F6]/30 to-transparent"
    },
    {
      id: 3,
      title: "Design Decisions That Scale With the Product",
      excerpt: "How early design choices influence usability, speed, and consistency as products grow.",
      readTime: "6 min read",
      category: "Product Design",
      content: "Principles for creating design systems and making decisions that scale with your product and team size. We'll discuss trade-offs between flexibility and consistency, and how to build design foundations that support long-term product evolution.",
      externalLink: "https://example.com/article-3",
      thumbnailIcon: Layers,
      thumbnailImage: "/writing/design-scaling.jpg",
      placeholderColor: "from-[#8B5CF6]/20 to-[#7C3AED]/10",
      gradientColor: "from-[#8B5CF6]/30 to-transparent"
    }
  ]);

  const [featuredId, setFeaturedId] = useState(1);
  const [imageErrors, setImageErrors] = useState({});
  
  // Get featured article
  const featuredArticle = articles.find(article => article.id === featuredId);
  
  // Get queue articles (all except featured)
  const queueArticles = articles.filter(article => article.id !== featuredId);

  const handleArticleClick = (articleId) => {
    if (articleId === featuredId) return;
    
    // Update featured article
    setFeaturedId(articleId);
  };

  const handleImageError = (articleId) => {
    setImageErrors(prev => ({ ...prev, [articleId]: true }));
  };

  const getThumbnailForArticle = (article) => {
    const ThumbnailIcon = article.thumbnailIcon;
    const hasError = imageErrors[article.id];
    const showImage = article.thumbnailImage && !hasError;
    
    return (
      <div className="relative w-full h-40 rounded-lg border border-[#2A2A2A] overflow-hidden group">
        {/* Image Container */}
        <div className="absolute inset-0">
          {/* Main Image */}
          {showImage ? (
            <img
              src={article.thumbnailImage}
              alt={`${article.title} thumbnail`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => handleImageError(article.id)}
            />
          ) : null}
          
          {/* Fallback Gradient - shown if no image or image fails to load */}
          <div 
            className={`absolute inset-0 bg-gradient-to-r ${article.placeholderColor} ${showImage ? 'hidden' : 'flex'} items-center justify-center`}
          >
            <div className={`w-16 h-16 ${article.placeholderColor.split(' ')[0].replace('/20', '/50')} rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20`}>
              <ThumbnailIcon className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
        
        {/* Dark Overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        
        {/* Color Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${article.gradientColor} opacity-20 mix-blend-overlay`} />
        
        {/* Hover Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${article.gradientColor} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
        
        {/* Featured Badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full flex items-center gap-1 border border-white/10">
          <ImageIcon size={12} className="text-white/70" />
          <span className="text-xs text-white/70 font-medium">Featured</span>
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#0E0E0E] to-[#151515]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#16A34A]/10 rounded-full mb-8 border border-[#16A34A]/20">
            <PenTool size={18} className="text-[#22C55E]" />
            <span className="text-[#22C55E] font-semibold">Thought Leadership</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-[#EAEAEA] mb-6">
            Product Thinking & Writing
          </h2>
          
          <p className="text-xl text-[#A1A1A1] max-w-3xl mx-auto leading-relaxed">
            Ideas, observations, and frameworks shaped by hands-on work across analytics, design, and product execution.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Featured Article */}
          <div className="h-full">
            <AnimatePresence mode="wait">
              <motion.article
                key={featuredId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-[#1C1C1C] to-transparent rounded-3xl p-8 border border-[#2A2A2A] hover:border-[#22C55E]/30 transition-all duration-300 h-full flex flex-col"
              >
                {/* Article Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1 bg-[#22C55E]/10 rounded-full border border-[#22C55E]/20">
                      <span className="text-sm font-semibold text-[#22C55E]">
                        Featured
                      </span>
                    </div>
                    <div className="text-sm font-semibold text-[#22C55E]">
                      {featuredArticle.category}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#A1A1A1] text-sm">
                    <Clock size={14} />
                    {featuredArticle.readTime}
                  </div>
                </div>

                {/* Article Title */}
                <h3 className="text-2xl font-bold text-[#EAEAEA] mb-4">
                  {featuredArticle.title}
                </h3>

                {/* Dynamic Thumbnail with img tag */}
                <div className="mb-4">
                  {getThumbnailForArticle(featuredArticle)}
                </div>
                
                {/* Article Excerpt */}
                <div className="mb-4">
                  <p className="text-[#A1A1A1] leading-relaxed line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                {/* Article Content Preview */}
                <div className="mb-6 flex-grow">
                  <p className="text-sm text-[#A1A1A1] leading-relaxed line-clamp-4">
                    {featuredArticle.content}
                  </p>
                </div>

                {/* CTA */}
                <div className="pt-4 border-t border-[#2A2A2A]">
                  <motion.a
                    href={featuredArticle.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group inline-flex items-center gap-2 px-6 py-3 bg-[#22C55E] text-white rounded-full font-semibold hover:bg-[#16A34A] transition-all duration-300 w-full justify-center text-sm"
                  >
                    <span>Read full article</span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ExternalLink size={16} />
                    </motion.div>
                  </motion.a>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* Article Queue */}
          <div className="h-full">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-[#EAEAEA]">Latest Articles</h3>
              <div className="text-[#22C55E] font-semibold flex items-center gap-2 text-sm">
                View All <ChevronRight size={14} />
              </div>
            </div>
            
            <div className="space-y-4">
              {queueArticles.map((article, index) => {
                const hasError = imageErrors[article.id];
                const showImage = article.thumbnailImage && !hasError;
                const ThumbnailIcon = article.thumbnailIcon;
                
                return (
                  <motion.button
                    key={article.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => handleArticleClick(article.id)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-left p-5 rounded-2xl border border-[#2A2A2A] bg-transparent hover:border-[#22C55E]/30 hover:bg-[#1C1C1C]/30 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      {/* Small Thumbnail Preview */}
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border border-[#2A2A2A]">
                        {showImage ? (
                          <img
                            src={article.thumbnailImage}
                            alt={`${article.title} thumbnail`}
                            className="w-full h-full object-cover"
                            onError={() => handleImageError(article.id)}
                          />
                        ) : null}
                        <div 
                          className={`w-full h-full bg-gradient-to-r ${article.placeholderColor} ${showImage ? 'hidden' : 'flex'} items-center justify-center`}
                        >
                          <ThumbnailIcon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      {/* Article Content */}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="px-2 py-1 bg-[#1C1C1C] rounded text-xs font-semibold text-[#A1A1A1] border border-[#2A2A2A]">
                              {article.category}
                            </div>
                            <div className="flex items-center gap-1 text-[#666666] text-xs">
                              <Clock size={10} />
                              {article.readTime}
                            </div>
                          </div>
                          <ArrowRight size={12} className="text-[#22C55E] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        
                        <h4 className="text-base font-semibold text-[#A1A1A1] group-hover:text-[#EAEAEA] transition-colors mb-2 line-clamp-2">
                          {article.title}
                        </h4>

                        <p className="text-sm text-[#666666] group-hover:text-[#A1A1A1] transition-colors leading-relaxed line-clamp-2">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}