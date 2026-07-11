import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

const articles = [
  {
    title: 'Understanding THC vs CBD',
    summary: 'A comprehensive breakdown of the two most prominent cannabinoids and how they interact with your body.',
    category: 'THC & CBD Science',
    readTime: '8 min read',
    author: 'Dr. Sarah Jenkins',
    date: 'Oct 12, 2024',
    image: 'bg-gradient-to-tr from-purple-900/50 to-emerald-900/50'
  },
  {
    title: 'How to Choose the Right Strain',
    summary: 'Learn how to navigate indica, sativa, and hybrid classifications to find the perfect flower for your needs.',
    category: 'Strains Guide',
    readTime: '6 min read',
    author: 'Marcus Chen',
    date: 'Oct 09, 2024',
    image: 'bg-gradient-to-tr from-orange-900/50 to-yellow-900/50'
  },
  {
    title: 'Cannabis for Better Sleep',
    summary: 'Discover which terpene profiles and cannabinoid ratios are most effective for achieving deep, restful sleep.',
    category: 'Wellness & Lifestyle',
    readTime: '10 min read',
    author: 'Elena Rodriguez',
    date: 'Oct 05, 2024',
    image: 'bg-gradient-to-tr from-indigo-900/50 to-blue-900/50'
  },
  {
    title: "A Beginner's Guide to Edibles",
    summary: 'Everything you need to know about dosing, onset times, and safe consumption practices for infused foods.',
    category: 'Consumption Methods',
    readTime: '12 min read',
    author: 'Chef James',
    date: 'Sep 28, 2024',
    image: 'bg-gradient-to-tr from-pink-900/50 to-red-900/50'
  },
  {
    title: 'What Is Microdosing?',
    summary: 'How taking minimal amounts of cannabis can provide therapeutic benefits without psychoactive interference.',
    category: 'Cannabis Basics',
    readTime: '7 min read',
    author: 'Dr. Sarah Jenkins',
    date: 'Sep 22, 2024',
    image: 'bg-gradient-to-tr from-cyan-900/50 to-teal-900/50'
  },
  {
    title: 'Lab Testing Explained',
    summary: 'How to read a Certificate of Analysis (COA) and why verified testing is crucial for consumer safety.',
    category: 'Industry News',
    readTime: '9 min read',
    author: 'Alex Thorne',
    date: 'Sep 15, 2024',
    image: 'bg-gradient-to-tr from-gray-800/50 to-emerald-900/50'
  }
];

export function FeaturedArticles() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Featured Articles</h2>
            <p className="text-gray-400 text-lg">In-depth guides and insights written by industry experts and medical professionals.</p>
          </div>
          <button className="text-primary hover:text-white transition-colors font-medium">
            View All Articles &rarr;
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl overflow-hidden group cursor-pointer flex flex-col"
            >
              <div className={`h-48 w-full ${article.image} relative p-4 flex items-start justify-between overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                <span className="relative z-20 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/10 uppercase tracking-wider">
                  {article.category}
                </span>
                
                {/* Abstract shape */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-700">
                  <div className="w-32 h-32 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm" />
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col bg-black/40">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                  <span className="w-1 h-1 rounded-full bg-white/20 mx-1" />
                  <span>{article.date}</span>
                </div>
                
                <h3 className="font-bold text-xl mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-sm text-gray-400 mb-6 line-clamp-3 leading-relaxed flex-1">
                  {article.summary}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-sm font-medium text-gray-300">{article.author}</span>
                  <span className="text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">Read &rarr;</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
